const express = require('express');
const app = express();
const port = process.env.PORT || 2410;
const cors = require('cors');
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwt = require('jsonwebtoken');

const { mobilesList } = require('./mobilesdata');
const { reviews } = require('./reviews');
const { users } = require('./users');
const { pincodeData } = require('./pincodes');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Passport configuration
const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'your_jwt_secret'
};

passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
        const user = users.find(u => u.uid === jwt_payload.sub);
        if (user) {
            return done(null, user);
        } else {
            return done(null, false, { message: 'Incorrect user ID' });
        }
    })
);

// Routes
app.post('/login', (req, res) => {
    const { mobile, email } = req.body;

    const user = users.find(u => u.email === email || u.mobile === mobile);
    if (!user) {
        return res.status(401).json({ message: 'Invalid email or mobile number' });
    }
    const token = jwt.sign({ sub: user.uid }, 'your_jwt_secret');

    res.json({ user, token });
});

app.post('/wishlist/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { id } = req.params;
    const { product } = req.body;

    const user = users.find(u => u.uid === +id);
    if (!user) {
        return res.status(401).json({ message: 'Invalid user email or mobile number' });
    }

    const wishlist = user.wishlist;
    const index = wishlist.findIndex(prod => prod.id === product.id);
    let msg = "";

    if (index >= 0) {
        wishlist.splice(index, 1);
        msg = "Removed from Wishlist";
    } else {
        wishlist.push(product);
        msg = "Added to Wishlist";
    }

    return res.status(200).json({ user, msg });
});

app.post('/updateuser/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { id } = req.params;
    const { body } = req.body;

    const userIndex = users.findIndex(u => u.uid === +id);
    if (userIndex === -1) {
        return res.status(401).json({ message: 'Invalid user email or mobile number' });
    }

    const updatedUser = { ...users[userIndex], ...body };
    users[userIndex] = updatedUser;

    return res.status(200).json({ user: updatedUser, message: 'User data updated successfully' });
});

app.post('/addaddress/:id/:addid?', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { id, addid } = req.params;
    const { body } = req.body;

    const userIndex = users.findIndex(u => u.uid === +id);
    if (userIndex === -1) {
        return res.status(401).json({ message: 'Invalid user email or mobile number' });
    }

    const tempAddresses = users[userIndex].address;
    let updatedAddress;

    if (addid) {
        const updateAddressIndex = tempAddresses.findIndex(address => address.id === +addid);
        if (updateAddressIndex === -1) {
            return res.status(404).json({ message: 'Address not found' });
        }

        updatedAddress = { ...tempAddresses[updateAddressIndex], ...body };
        tempAddresses[updateAddressIndex] = updatedAddress;
    } else {
        const addressIds = tempAddresses.map(address => address.id);
        const newaddid = Math.max(...addressIds, 0) + 1;
        updatedAddress = { id: newaddid, ...body };
        tempAddresses.push(updatedAddress);
    }

    const updatedUser = { ...users[userIndex], address: tempAddresses };
    users[userIndex] = updatedUser;

    return res.status(200).json({ user: updatedUser, message: 'User data updated successfully' });
});

app.delete('/deladdress/:id/:adid', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { id, adid } = req.params;

    const userIndex = users.findIndex(u => u.uid === +id);
    if (userIndex === -1) {
        return res.status(401).json({ message: 'Invalid user email or mobile number' });
    }

    const tempAddresses = users[userIndex].address;
    const filteredAddresses = tempAddresses.filter(address => address.id !== +adid);

    const updatedUser = { ...users[userIndex], address: filteredAddresses };
    users[userIndex] = updatedUser;

    return res.status(200).json({ user: updatedUser, message: 'Address deleted successfully' });
});

app.post('/saveorder/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { id } = req.params;
    const { body } = req.body;

    const userIndex = users.findIndex(u => u.uid === +id);
    if (userIndex === -1) {
        return res.status(401).json({ message: 'Invalid user email or mobile number' });
    }

    const tempOrders = users[userIndex].cart;

    const orderIds = tempOrders.map(order => order.id);
    const neworderid = Math.max(...orderIds, 0) + 1;
    tempOrders.push({ id: neworderid, ...body });
    const updatedUser = { ...users[userIndex], cart: tempOrders };
    users[userIndex] = updatedUser;

    return res.status(200).json({ user: updatedUser, message: 'Purchase successfully' });
});

app.get('/products/:category/:brand?', (req, res) => {
    const { category, brand } = req.params;

    let filteredMobiles = mobilesList;

    const { assured, ram, rating, price, sort, page, q } = req.query;

    if (category) {
        filteredMobiles = filteredMobiles.filter(mobile => mobile.category === category);
    }
    if (brand) {
        filteredMobiles = filteredMobiles.filter(mobile => brand.includes(mobile.brand));
    }
    if (assured === 'true') {
        filteredMobiles = filteredMobiles.filter(mobile => mobile.assured);
    }
    if (ram) {
        const ramFilters = ram.split(',').map(filter => {
            const operator = filter.substring(0, 2);
            const value = parseInt(filter.substring(2));
            return { operator, value };
        });

        filteredMobiles = filteredMobiles.filter(mobile => {
            for (const filter of ramFilters) {
                const { operator, value } = filter;
                if (
                    (operator === '>=' && mobile.ram >= value) ||
                    (operator === '<=' && mobile.ram <= value)
                ) {
                    return true;
                }
            }
            return false;
        });
    }
    if (rating) {
        const ratingFilters = rating.split(',').map(filter => {
            const operator = filter.charAt(0);
            const value = parseFloat(filter.substring(1));
            return { operator, value };
        });

        filteredMobiles = filteredMobiles.filter(mobile => {
            for (const filter of ratingFilters) {
                const { operator, value } = filter;
                if (
                    (operator === '>' && mobile.rating > value) ||
                    (operator === '>=' && mobile.rating >= value) ||
                    (operator === '<' && mobile.rating < value) ||
                    (operator === '<=' && mobile.rating <= value)
                ) {
                    return true;
                }
            }
            return false;
        });
    }
    if (price) {
        const priceRanges = price.split('-');
        const minPrice = parseInt(priceRanges[0]);

        if (priceRanges[1].includes('+')) {
            filteredMobiles = filteredMobiles.filter(mobile => mobile.price >= minPrice);
        } else {
            const maxPrice = parseInt(priceRanges[1]);
            filteredMobiles = filteredMobiles.filter(mobile => mobile.price >= minPrice && mobile.price <= maxPrice);
        }
    }

    if (sort === 'asc') {
        filteredMobiles.sort((a, b) => a.price - b.price);
    } else if (sort === 'desc') {
        filteredMobiles.sort((a, b) => b.price - a.price);
    } else if (sort === 'popularity') {
        filteredMobiles.sort((a, b) => b.popularity - a.popularity);
    }

    if (q) {
        const queryString = q.toLowerCase();
        filteredMobiles = filteredMobiles.filter(
            mobile => mobile.name.toLowerCase().includes(queryString)
        );
    }

    const pageSize = 10;
    const pageNumber = page ? parseInt(page) : 1;
    const totalItems = filteredMobiles.length;
    const totalPages = Math.ceil(totalItems / pageSize);
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedMobiles = filteredMobiles.slice(startIndex, endIndex);

    res.json({
        mobilesList: paginatedMobiles,
        totalPages: totalPages,
        currentPage: pageNumber,
        totalItems: totalItems,
    });
});

app.get('/product/:category/:id', (req, res) => {
    const { category, id } = req.params;

    if (category !== 'Mobiles') {
        return res.status(400).send({ message: 'No product category found.' });
    }

    if (!id) {
        return res.status(400).send({ message: 'Product ID required' });
    }

    const mobile = mobilesList.find(item => item.id === id);
    if (mobile) {
        return res.json({ mobile });
    }

    return res.status(400).send({ message: 'Product ID not found' });
});

app.get('/deals', (req, res) => {
    const randomMobiles = getRandomMobiles(14);
    res.json({ mobilesList: randomMobiles });
});

app.get('/featured', (req, res) => {
    const randomMobiles = getFeaturedMobiles(10);
    res.json({ mobilesList: randomMobiles });
});

app.get('/search', (req, res) => {
    const { q } = req.query;
    let filteredMobiles = [];

    if (q) {
        const queryString = q.toLowerCase();
        filteredMobiles = mobilesList.filter(
            mobile => mobile.name.toLowerCase().includes(queryString)
        ).slice(0, 5);
    }

    res.json({ mobilesList: filteredMobiles });
});

app.get('/pincode/:pincode/:productId', (req, res) => {
    const { pincode, productId } = req.params;
    const pinobject = pincodeData.find(item => item.pincode === parseInt(pincode));

    if (pinobject) {
        const prod = pinobject.mobileList.find(mobile => mobile.id === productId);
        if (prod) {
            return res.json({ message: prod.display });
        }
    }

    return res.json({ message: 'Deliver in 2 Weeks' });
});

app.get('/reviews/:mobileId', (req, res) => {
    const { mobileId } = req.params;
    const { page } = req.query;
    const review = reviews.find(r => r.mobileId === mobileId);

    if (review) {
        const pageSize = 10;
        const pageNumber = page ? parseInt(page) : 1;
        const totalItems = review.ratings.length;
        const totalPages = Math.ceil(totalItems / pageSize);
        const startIndex = (pageNumber - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const paginatedReview = review.ratings.slice(startIndex, endIndex);

        res.json({
            reviews: paginatedReview,
            totalPages: totalPages,
            currentPage: pageNumber,
            totalItems: totalItems,
        });
    } else {
        res.status(400).send({ message: 'No product found' });
    }
});

app.get('/samplereview/:mobileId', (req, res) => {
    const { mobileId } = req.params;
    const review = reviews.find(r => r.mobileId === mobileId);
    const samplereview = getRandomElementsFromArray(review.ratings, 3);

    if (review) {
        res.json({ samplereview: samplereview });
    } else {
        res.status(400).send({ message: 'No product found' });
    }
});

app.get('/recent', (req, res) => {
    const { recentIds = [] } = req.query;

    const filteredMobiles = mobilesList.filter(item => recentIds.includes(item.id));

    res.json({ filteredMobiles: filteredMobiles });
});

// Helper function to get random mobiles from mobilesList
function getRandomMobiles(count) {
    const mobileCount = mobilesList.length;
    const randomMobiles = [];

    if (count > mobileCount) {
        randomMobiles.push(...mobilesList);
    } else {
        const shuffledMobiles = mobilesList.filter(mobile => mobile.exchange).sort(() => 0.5 - Math.random());
        randomMobiles.push(...shuffledMobiles.slice(0, count));
    }

    return randomMobiles;
}

function getFeaturedMobiles(count) {
    const mobileCount = mobilesList.length;
    const randomMobiles = [];

    if (count > mobileCount) {
        randomMobiles.push(...mobilesList);
    } else {
        const shuffledMobiles = mobilesList.sort(() => 0.5 - Math.random());
        randomMobiles.push(...shuffledMobiles.slice(0, count));
    }

    return randomMobiles;
}

function getRandomElementsFromArray(array, count) {
    const result = [];
    count = Math.min(count, array.length);

    for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * array.length);
        result.push(array.splice(randomIndex, 1)[0]);
    }

    return result;
}

app.listen(port, () => {
    console.log(`Node app listening on port ${port}!`);
});
