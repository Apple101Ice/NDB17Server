const users = [
    {
        uid: 1001,
        mobile: "0123456789",
        email: "user001@test.com",
        firstname: "Amit",
        lastname: "Sharma",
        gender: "Male",
        address: [
            {
                id: 1,
                name: "Amit Sharma",
                mobile: "1122334455",
                pincode: "0123456",
                locality: "ABC Tower",
                area: "XYZ Colony",
                city: "Lucknow",
                state: "U.P",
                landmark: "",
                altmobile: "",
                addresstype: "Home",
            },
        ],
        cart: [],
        wishlist: [],
    },
    {
        uid: 1002,
        mobile: "9876543210",
        email: "user002@test.com",
        firstname: "Anjali",
        lastname: "Gupta",
        gender: "Female",
        address: [
            {
                id: 1,
                name: "Anjali Gupta",
                mobile: "5544332211",
                pincode: "0123456",
                locality: "ABC Tower",
                area: "XYZ Colony",
                city: "Lucknow",
                state: "U.P",
                landmark: "",
                altmobile: "",
                addresstype: "Home",
            },
        ],
        cart: [],
        wishlist: [],
    },
];

module.exports.users = users;
