const reviews = [
    {
        id: 1,
        mobileId: "M1",
        ratings: [
            {
                star: 1,
                title: "Not recommended at all",
                description:
                    "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Useless product",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Nice product",
                description: "Great display.",
                author: "Gyana Jena",
            },
            {
                star: 5,
                title: "Best in the market!",
                description: "👌👌 good product",
                author: "Suraj Kumbhakar",
            },
            {
                star: 1,
                title: "Very poor",
                description: "Speaker not working after 7days",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Slightly disappointed",
                description: "speaker problem",
                author: "Samala Pradee",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Camera performance very bad",
                author: "Sumangal Mondal",
            },
            {
                star: 5,
                title: "Classy product",
                description: "The poco M2pro mobile is very👍 nice I love this phone",
                author: "Moumita Nandy",
            },
            {
                star: 1,
                title: "Useless product",
                description:
                    "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description: "Microphone not working",
            },
            {
                star: 4,
                title: "Very poor",
                description: "Thanks to Flipkart for fast delivery",
                author: "Ha Ri",
            },
            {
                star: 3,
                title: "Fair",
                description:
                    "All over good, some time get hanged in simple task like what's app message and calling time",
                author: "MUKHTIAR RAM",
            },
            {
                star: 5,
                title: "Classy product",
                description: "Good👍",
                author: "Mani Manikandan",
            },
            {
                star: 4,
                title: "Good choice",
                description: "Good",
                author: "Puja Pal",
            },
            {
                star: 4,
                title: "Nice product",
                description:
                    "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
                author: "Mitesh W",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "Best phone i have had.",
                author: "Swetasri Pal",
            },
            {
                star: 1,
                title: "Waste of money!",
                description:
                    "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Horrible",
                description: "Don't buy this mobile it has speaker issue",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description:
                    "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Utterly Disappointed",
                description: "My m2pro has yearspaker problem",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Not recommended at all",
                description: "miui is not good in poco mobile",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Nice phone ...blindly go for it",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Must buy!",
                description:
                    "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "I m happy 😁😊",
                author: "Anita Patwal",
            },
            {
                star: 3,
                title: "Just okay",
                description: "It's good phone but battery performance is poor...",
                author: "Sanjay Singh",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Good 🥳🥳🥳🥳",
                author: "SANTANU MALIK",
            },
            {
                star: 5,
                title: "Just wow!",
                description: "Good",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Bad quality",
                description:
                    "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
                author: "Manoj Patel",
            },
            {
                star: 2,
                title: "Bad quality",
                description: "Feels like a Brick",
                author: "Ashutosh Tyagi",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Ok product",
                author: "Momin Azharoddin",
            },
            {
                star: 3,
                title: "Just okay",
                description: "Normal but not awesome performance",
                author: "Saran mukesh Choudhary",
            },
            {
                star: 2,
                title: "Expected a better product",
                description: "Network quality is bad",
                author: "Flipkart Customer",
            },
            {
                star: 3,
                title: "Fair",
                description: "Good but tower problem and voice mic not clear",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Worst experience ever!",
                description:
                    "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Not good",
                description: "Front camera is the worst so far",
                author: "Abhi Sahay",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Average.",
                author: "Sunil Sunil b",
            },
            {
                star: 5,
                title: "Wonderful",
                description: "Best👍💯",
                author: "SATYENDRA MEENA",
            },
            {
                star: 3,
                title: "Does the job",
                description:
                    "Screen over camera is bit dim. Informed the same to flipkart. They showed very reluctant attitude and refused to replace it.",
                author: "Flipkart Customer",
            },
        ],
    },
    {
        id: 2,
        mobileId: "M2",
        ratings: [
            {
                star: 1,
                title: "Not recommended at all",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Useless product",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Nice product",
                description: "Great display.",
                author: "Gyana Jena",
            },
            {
                star: 5,
                title: "Best in the market!",
                description: "👌👌 good product",
                author: "Suraj Kumbhakar",
            },
            {
                star: 1,
                title: "Very poor",
                description: "Speaker not working after 7days",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Slightly disappointed",
                description: "speaker problem",
                author: "Samala Pradee",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Camera performance very bad",
                author: "Sumangal Mondal",
            },
            {
                star: 5,
                title: "Classy product",
                description: "The poco M2pro mobile is very👍 nice I love this phone",
                author: "Moumita Nandy",
            },
            {
                star: 1,
                title: "Useless product",
                description:
                    "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description: "Microphone not working",
            },
            {
                star: 4,
                title: "Very poor",
                description: "Thanks to Flipkart for fast delivery",
                author: "Ha Ri",
            },
            {
                star: 3,
                title: "Fair",
                description:
                    "All over good, some time get hanged in simple task like what's app message and calling time",
                author: "MUKHTIAR RAM",
            },
            {
                star: 5,
                title: "Classy product",
                description: "Good👍",
                author: "Mani Manikandan",
            },
            {
                star: 4,
                title: "Good choice",
                description: "Good",
                author: "Puja Pal",
            },
            {
                star: 4,
                title: "Nice product",
                description:
                    "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
                author: "Mitesh W",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "Best phone i have had.",
                author: "Swetasri Pal",
            },
            {
                star: 1,
                title: "Waste of money!",
                description:
                    "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Horrible",
                description: "Don't buy this mobile it has speaker issue",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description:
                    "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Utterly Disappointed",
                description: "My m2pro has yearspaker problem",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Not recommended at all",
                description: "miui is not good in poco mobile",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Nice phone ...blindly go for it",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Must buy!",
                description:
                    "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "I m happy 😁😊",
                author: "Anita Patwal",
            },
            {
                star: 3,
                title: "Just okay",
                description: "It's good phone but battery performance is poor...",
                author: "Sanjay Singh",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Good 🥳🥳🥳🥳",
                author: "SANTANU MALIK",
            },
            {
                star: 5,
                title: "Just wow!",
                description: "Good",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Bad quality",
                description:
                    "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
                author: "Manoj Patel",
            },
            {
                star: 2,
                title: "Bad quality",
                description: "Feels like a Brick",
                author: "Ashutosh Tyagi",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Ok product",
                author: "Momin Azharoddin",
            },
            {
                star: 3,
                title: "Just okay",
                description: "Normal but not awesome performance",
                author: "Saran mukesh Choudhary",
            },
            {
                star: 2,
                title: "Expected a better product",
                description: "Network quality is bad",
                author: "Flipkart Customer",
            },
            {
                star: 3,
                title: "Fair",
                description: "Good but tower problem and voice mic not clear",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Worst experience ever!",
                description:
                    "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
                author: "Flipkart Customer",
            },
        ],
    },
    {
        id: 3,
        mobileId: "M3",
        ratings: [
            {
                star: 1,
                title: "Not recommended at all",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Useless product",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Nice product",
                description: "Great display.",
                author: "Gyana Jena",
            },
            {
                star: 5,
                title: "Best in the market!",
                description: "👌👌 good product",
                author: "Suraj Kumbhakar",
            },
            {
                star: 1,
                title: "Very poor",
                description: "Speaker not working after 7days",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Slightly disappointed",
                description: "speaker problem",
                author: "Samala Pradee",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Camera performance very bad",
                author: "Sumangal Mondal",
            },
            {
                star: 5,
                title: "Classy product",
                description: "The poco M2pro mobile is very👍 nice I love this phone",
                author: "Moumita Nandy",
            },
            {
                star: 1,
                title: "Useless product",
                description:
                    "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description: "Microphone not working",
            },
            {
                star: 4,
                title: "Very poor",
                description: "Thanks to Flipkart for fast delivery",
                author: "Ha Ri",
            },
            {
                star: 3,
                title: "Fair",
                description:
                    "All over good, some time get hanged in simple task like what's app message and calling time",
                author: "MUKHTIAR RAM",
            },
            {
                star: 5,
                title: "Classy product",
                description: "Good👍",
                author: "Mani Manikandan",
            },
            {
                star: 4,
                title: "Good choice",
                description: "Good",
                author: "Puja Pal",
            },
            {
                star: 4,
                title: "Nice product",
                description:
                    "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
                author: "Mitesh W",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "Best phone i have had.",
                author: "Swetasri Pal",
            },
            {
                star: 1,
                title: "Waste of money!",
                description:
                    "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Horrible",
                description: "Don't buy this mobile it has speaker issue",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description:
                    "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Utterly Disappointed",
                description: "My m2pro has yearspaker problem",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Not recommended at all",
                description: "miui is not good in poco mobile",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Nice phone ...blindly go for it",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Must buy!",
                description:
                    "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "I m happy 😁😊",
                author: "Anita Patwal",
            },
            {
                star: 3,
                title: "Just okay",
                description: "It's good phone but battery performance is poor...",
                author: "Sanjay Singh",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Good 🥳🥳🥳🥳",
                author: "SANTANU MALIK",
            },
            {
                star: 5,
                title: "Just wow!",
                description: "Good",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Bad quality",
                description:
                    "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
                author: "Manoj Patel",
            },
            {
                star: 2,
                title: "Bad quality",
                description: "Feels like a Brick",
                author: "Ashutosh Tyagi",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Ok product",
                author: "Momin Azharoddin",
            },
            {
                star: 3,
                title: "Just okay",
                description: "Normal but not awesome performance",
                author: "Saran mukesh Choudhary",
            },
            {
                star: 2,
                title: "Expected a better product",
                description: "Network quality is bad",
                author: "Flipkart Customer",
            },
            {
                star: 3,
                title: "Fair",
                description: "Good but tower problem and voice mic not clear",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Worst experience ever!",
                description:
                    "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
                author: "Flipkart Customer",
            },
        ],
    },
    {
        id: 4,
        mobileId: "M4",
        ratings: [
            {
                star: 1,
                title: "Not recommended at all",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Useless product",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Nice product",
                description: "Great display.",
                author: "Gyana Jena",
            },
            {
                star: 5,
                title: "Best in the market!",
                description: "👌👌 good product",
                author: "Suraj Kumbhakar",
            },
            {
                star: 1,
                title: "Very poor",
                description: "Speaker not working after 7days",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Slightly disappointed",
                description: "speaker problem",
                author: "Samala Pradee",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Camera performance very bad",
                author: "Sumangal Mondal",
            },
            {
                star: 5,
                title: "Classy product",
                description: "The poco M2pro mobile is very👍 nice I love this phone",
                author: "Moumita Nandy",
            },
            {
                star: 1,
                title: "Useless product",
                description:
                    "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description: "Microphone not working",
            },
            {
                star: 4,
                title: "Very poor",
                description: "Thanks to Flipkart for fast delivery",
                author: "Ha Ri",
            },
            {
                star: 3,
                title: "Fair",
                description:
                    "All over good, some time get hanged in simple task like what's app message and calling time",
                author: "MUKHTIAR RAM",
            },
            {
                star: 5,
                title: "Classy product",
                description: "Good👍",
                author: "Mani Manikandan",
            },
            {
                star: 4,
                title: "Good choice",
                description: "Good",
                author: "Puja Pal",
            },
            {
                star: 4,
                title: "Nice product",
                description:
                    "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
                author: "Mitesh W",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "Best phone i have had.",
                author: "Swetasri Pal",
            },
            {
                star: 1,
                title: "Waste of money!",
                description:
                    "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Horrible",
                description: "Don't buy this mobile it has speaker issue",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description:
                    "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Utterly Disappointed",
                description: "My m2pro has yearspaker problem",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Not recommended at all",
                description: "miui is not good in poco mobile",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Nice phone ...blindly go for it",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Must buy!",
                description:
                    "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "I m happy 😁😊",
                author: "Anita Patwal",
            },
            {
                star: 3,
                title: "Just okay",
                description: "It's good phone but battery performance is poor...",
                author: "Sanjay Singh",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Good 🥳🥳🥳🥳",
                author: "SANTANU MALIK",
            },
            {
                star: 5,
                title: "Just wow!",
                description: "Good",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Bad quality",
                description:
                    "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
                author: "Manoj Patel",
            },
            {
                star: 2,
                title: "Bad quality",
                description: "Feels like a Brick",
                author: "Ashutosh Tyagi",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Ok product",
                author: "Momin Azharoddin",
            },
            {
                star: 3,
                title: "Just okay",
                description: "Normal but not awesome performance",
                author: "Saran mukesh Choudhary",
            },
            {
                star: 2,
                title: "Expected a better product",
                description: "Network quality is bad",
                author: "Flipkart Customer",
            },
            {
                star: 3,
                title: "Fair",
                description: "Good but tower problem and voice mic not clear",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Worst experience ever!",
                description:
                    "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
                author: "Flipkart Customer",
            },
        ],
    },
    {
        id: 5,
        mobileId: "M5",
        ratings: [
            {
                star: 1,
                title: "Not recommended at all",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Useless product",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Nice product",
                description: "Great display.",
                author: "Gyana Jena",
            },
            {
                star: 5,
                title: "Best in the market!",
                description: "👌👌 good product",
                author: "Suraj Kumbhakar",
            },
            {
                star: 1,
                title: "Very poor",
                description: "Speaker not working after 7days",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Slightly disappointed",
                description: "speaker problem",
                author: "Samala Pradee",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Camera performance very bad",
                author: "Sumangal Mondal",
            },
            {
                star: 5,
                title: "Classy product",
                description: "The poco M2pro mobile is very👍 nice I love this phone",
                author: "Moumita Nandy",
            },
            {
                star: 1,
                title: "Useless product",
                description:
                    "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description: "Microphone not working",
            },
            {
                star: 4,
                title: "Very poor",
                description: "Thanks to Flipkart for fast delivery",
                author: "Ha Ri",
            },
            {
                star: 3,
                title: "Fair",
                description:
                    "All over good, some time get hanged in simple task like what's app message and calling time",
                author: "MUKHTIAR RAM",
            },
            {
                star: 4,
                title: "Good choice",
                description: "Good",
                author: "Puja Pal",
            },
            {
                star: 4,
                title: "Nice product",
                description:
                    "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
                author: "Mitesh W",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "Best phone i have had.",
                author: "Swetasri Pal",
            },
            {
                star: 1,
                title: "Waste of money!",
                description:
                    "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Horrible",
                description: "Don't buy this mobile it has speaker issue",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description:
                    "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Not recommended at all",
                description: "miui is not good in poco mobile",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Nice phone ...blindly go for it",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Must buy!",
                description:
                    "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "I m happy 😁😊",
                author: "Anita Patwal",
            },
            {
                star: 3,
                title: "Just okay",
                description: "It's good phone but battery performance is poor...",
                author: "Sanjay Singh",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Good 🥳🥳🥳🥳",
                author: "SANTANU MALIK",
            },
            {
                star: 5,
                title: "Just wow!",
                description: "Good",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Bad quality",
                description:
                    "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
                author: "Manoj Patel",
            },
            {
                star: 2,
                title: "Bad quality",
                description: "Feels like a Brick",
                author: "Ashutosh Tyagi",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Ok product",
                author: "Momin Azharoddin",
            },
            {
                star: 3,
                title: "Just okay",
                description: "Normal but not awesome performance",
                author: "Saran mukesh Choudhary",
            },
            {
                star: 2,
                title: "Expected a better product",
                description: "Network quality is bad",
                author: "Flipkart Customer",
            },
            {
                star: 3,
                title: "Fair",
                description: "Good but tower problem and voice mic not clear",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Worst experience ever!",
                description:
                    "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
                author: "Flipkart Customer",
            },
        ],
    },
    {
        id: 6,
        mobileId: "M6",
        ratings: [
            {
                star: 1,
                title: "Not recommended at all",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Useless product",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Nice product",
                description: "Great display.",
                author: "Gyana Jena",
            },
            {
                star: 5,
                title: "Best in the market!",
                description: "👌👌 good product",
                author: "Suraj Kumbhakar",
            },
            {
                star: 1,
                title: "Very poor",
                description: "Speaker not working after 7days",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Slightly disappointed",
                description: "speaker problem",
                author: "Samala Pradee",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Camera performance very bad",
                author: "Sumangal Mondal",
            },
            {
                star: 5,
                title: "Classy product",
                description: "The poco M2pro mobile is very👍 nice I love this phone",
                author: "Moumita Nandy",
            },
            {
                star: 1,
                title: "Useless product",
                description:
                    "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description: "Microphone not working",
            },
            {
                star: 4,
                title: "Very poor",
                description: "Thanks to Flipkart for fast delivery",
                author: "Ha Ri",
            },
            {
                star: 3,
                title: "Fair",
                description:
                    "All over good, some time get hanged in simple task like what's app message and calling time",
                author: "MUKHTIAR RAM",
            },
            {
                star: 5,
                title: "Classy product",
                description: "Good👍",
                author: "Mani Manikandan",
            },
            {
                star: 4,
                title: "Good choice",
                description: "Good",
                author: "Puja Pal",
            },
            {
                star: 4,
                title: "Nice product",
                description:
                    "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
                author: "Mitesh W",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "Best phone i have had.",
                author: "Swetasri Pal",
            },
            {
                star: 1,
                title: "Waste of money!",
                description:
                    "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Horrible",
                description: "Don't buy this mobile it has speaker issue",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description:
                    "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Utterly Disappointed",
                description: "My m2pro has yearspaker problem",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Not recommended at all",
                description: "miui is not good in poco mobile",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Nice phone ...blindly go for it",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Must buy!",
                description:
                    "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "I m happy 😁😊",
                author: "Anita Patwal",
            },
            {
                star: 3,
                title: "Just okay",
                description: "It's good phone but battery performance is poor...",
                author: "Sanjay Singh",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Good 🥳🥳🥳🥳",
                author: "SANTANU MALIK",
            },
            {
                star: 5,
                title: "Just wow!",
                description: "Good",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Bad quality",
                description:
                    "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
                author: "Manoj Patel",
            },
            {
                star: 2,
                title: "Bad quality",
                description: "Feels like a Brick",
                author: "Ashutosh Tyagi",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Ok product",
                author: "Momin Azharoddin",
            },
            {
                star: 3,
                title: "Just okay",
                description: "Normal but not awesome performance",
                author: "Saran mukesh Choudhary",
            },
            {
                star: 2,
                title: "Expected a better product",
                description: "Network quality is bad",
                author: "Flipkart Customer",
            },
            {
                star: 3,
                title: "Fair",
                description: "Good but tower problem and voice mic not clear",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Worst experience ever!",
                description:
                    "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
                author: "Flipkart Customer",
            },
        ],
    },
    {
        id: 7,
        mobileId: "M7",
        ratings: [
            {
                star: 1,
                title: "Not recommended at all",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Useless product",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Nice product",
                description: "Great display.",
                author: "Gyana Jena",
            },
            {
                star: 5,
                title: "Best in the market!",
                description: "👌👌 good product",
                author: "Suraj Kumbhakar",
            },
            {
                star: 1,
                title: "Very poor",
                description: "Speaker not working after 7days",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Slightly disappointed",
                description: "speaker problem",
                author: "Samala Pradee",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Camera performance very bad",
                author: "Sumangal Mondal",
            },
            {
                star: 5,
                title: "Classy product",
                description: "The poco M2pro mobile is very👍 nice I love this phone",
                author: "Moumita Nandy",
            },
            {
                star: 1,
                title: "Useless product",
                description:
                    "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description: "Microphone not working",
            },
            {
                star: 4,
                title: "Very poor",
                description: "Thanks to Flipkart for fast delivery",
                author: "Ha Ri",
            },
            {
                star: 3,
                title: "Fair",
                description:
                    "All over good, some time get hanged in simple task like what's app message and calling time",
                author: "MUKHTIAR RAM",
            },
            {
                star: 5,
                title: "Classy product",
                description: "Good👍",
                author: "Mani Manikandan",
            },
            {
                star: 4,
                title: "Good choice",
                description: "Good",
                author: "Puja Pal",
            },
            {
                star: 4,
                title: "Nice product",
                description:
                    "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
                author: "Mitesh W",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "Best phone i have had.",
                author: "Swetasri Pal",
            },
            {
                star: 1,
                title: "Waste of money!",
                description:
                    "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Horrible",
                description: "Don't buy this mobile it has speaker issue",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description:
                    "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Utterly Disappointed",
                description: "My m2pro has yearspaker problem",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Not recommended at all",
                description: "miui is not good in poco mobile",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Nice phone ...blindly go for it",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Must buy!",
                description:
                    "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "I m happy 😁😊",
                author: "Anita Patwal",
            },
            {
                star: 3,
                title: "Just okay",
                description: "It's good phone but battery performance is poor...",
                author: "Sanjay Singh",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Good 🥳🥳🥳🥳",
                author: "SANTANU MALIK",
            },
            {
                star: 5,
                title: "Just wow!",
                description: "Good",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Bad quality",
                description:
                    "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
                author: "Manoj Patel",
            },
            {
                star: 2,
                title: "Bad quality",
                description: "Feels like a Brick",
                author: "Ashutosh Tyagi",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Ok product",
                author: "Momin Azharoddin",
            },
            {
                star: 3,
                title: "Just okay",
                description: "Normal but not awesome performance",
                author: "Saran mukesh Choudhary",
            },
            {
                star: 2,
                title: "Expected a better product",
                description: "Network quality is bad",
                author: "Flipkart Customer",
            },
            {
                star: 3,
                title: "Fair",
                description: "Good but tower problem and voice mic not clear",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Worst experience ever!",
                description:
                    "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
                author: "Flipkart Customer",
            },
        ],
    },
    {
        id: 8,
        mobileId: "M8",
        ratings: [
            {
                star: 1,
                title: "Not recommended at all",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Useless product",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Nice product",
                description: "Great display.",
                author: "Gyana Jena",
            },
            {
                star: 5,
                title: "Best in the market!",
                description: "👌👌 good product",
                author: "Suraj Kumbhakar",
            },
            {
                star: 1,
                title: "Very poor",
                description: "Speaker not working after 7days",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Slightly disappointed",
                description: "speaker problem",
                author: "Samala Pradee",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Camera performance very bad",
                author: "Sumangal Mondal",
            },
            {
                star: 5,
                title: "Classy product",
                description: "The poco M2pro mobile is very👍 nice I love this phone",
                author: "Moumita Nandy",
            },
            {
                star: 1,
                title: "Useless product",
                description:
                    "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description: "Microphone not working",
            },
            {
                star: 4,
                title: "Very poor",
                description: "Thanks to Flipkart for fast delivery",
                author: "Ha Ri",
            },
            {
                star: 3,
                title: "Fair",
                description:
                    "All over good, some time get hanged in simple task like what's app message and calling time",
                author: "MUKHTIAR RAM",
            },
            {
                star: 5,
                title: "Classy product",
                description: "Good👍",
                author: "Mani Manikandan",
            },
            {
                star: 4,
                title: "Good choice",
                description: "Good",
                author: "Puja Pal",
            },
            {
                star: 4,
                title: "Nice product",
                description:
                    "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
                author: "Mitesh W",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "Best phone i have had.",
                author: "Swetasri Pal",
            },
            {
                star: 1,
                title: "Waste of money!",
                description:
                    "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Horrible",
                description: "Don't buy this mobile it has speaker issue",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description:
                    "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Utterly Disappointed",
                description: "My m2pro has yearspaker problem",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Not recommended at all",
                description: "miui is not good in poco mobile",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Nice phone ...blindly go for it",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Must buy!",
                description:
                    "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "I m happy 😁😊",
                author: "Anita Patwal",
            },
            {
                star: 3,
                title: "Just okay",
                description: "It's good phone but battery performance is poor...",
                author: "Sanjay Singh",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Good 🥳🥳🥳🥳",
                author: "SANTANU MALIK",
            },
            {
                star: 5,
                title: "Just wow!",
                description: "Good",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Bad quality",
                description:
                    "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
                author: "Manoj Patel",
            },
            {
                star: 2,
                title: "Bad quality",
                description: "Feels like a Brick",
                author: "Ashutosh Tyagi",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Ok product",
                author: "Momin Azharoddin",
            },
            {
                star: 3,
                title: "Just okay",
                description: "Normal but not awesome performance",
                author: "Saran mukesh Choudhary",
            },
            {
                star: 2,
                title: "Expected a better product",
                description: "Network quality is bad",
                author: "Flipkart Customer",
            },
            {
                star: 3,
                title: "Fair",
                description: "Good but tower problem and voice mic not clear",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Worst experience ever!",
                description:
                    "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
                author: "Flipkart Customer",
            },
        ],
    },
    {
        id: 9,
        mobileId: "M9",
        ratings: [
            {
                star: 1,
                title: "Not recommended at all",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Useless product",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Nice product",
                description: "Great display.",
                author: "Gyana Jena",
            },
            {
                star: 5,
                title: "Best in the market!",
                description: "👌👌 good product",
                author: "Suraj Kumbhakar",
            },
            {
                star: 1,
                title: "Very poor",
                description: "Speaker not working after 7days",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Slightly disappointed",
                description: "speaker problem",
                author: "Samala Pradee",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Camera performance very bad",
                author: "Sumangal Mondal",
            },
            {
                star: 5,
                title: "Classy product",
                description: "The poco M2pro mobile is very👍 nice I love this phone",
                author: "Moumita Nandy",
            },
            {
                star: 1,
                title: "Useless product",
                description:
                    "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description: "Microphone not working",
            },
            {
                star: 4,
                title: "Very poor",
                description: "Thanks to Flipkart for fast delivery",
                author: "Ha Ri",
            },
            {
                star: 3,
                title: "Fair",
                description:
                    "All over good, some time get hanged in simple task like what's app message and calling time",
                author: "MUKHTIAR RAM",
            },
            {
                star: 5,
                title: "Classy product",
                description: "Good👍",
                author: "Mani Manikandan",
            },
            {
                star: 4,
                title: "Good choice",
                description: "Good",
                author: "Puja Pal",
            },
            {
                star: 4,
                title: "Nice product",
                description:
                    "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
                author: "Mitesh W",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "Best phone i have had.",
                author: "Swetasri Pal",
            },
            {
                star: 1,
                title: "Waste of money!",
                description:
                    "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Horrible",
                description: "Don't buy this mobile it has speaker issue",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description:
                    "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Utterly Disappointed",
                description: "My m2pro has yearspaker problem",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Not recommended at all",
                description: "miui is not good in poco mobile",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Nice phone ...blindly go for it",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Must buy!",
                description:
                    "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "I m happy 😁😊",
                author: "Anita Patwal",
            },
            {
                star: 3,
                title: "Just okay",
                description: "It's good phone but battery performance is poor...",
                author: "Sanjay Singh",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Good 🥳🥳🥳🥳",
                author: "SANTANU MALIK",
            },
            {
                star: 5,
                title: "Just wow!",
                description: "Good",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Bad quality",
                description:
                    "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
                author: "Manoj Patel",
            },
            {
                star: 2,
                title: "Bad quality",
                description: "Feels like a Brick",
                author: "Ashutosh Tyagi",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Ok product",
                author: "Momin Azharoddin",
            },
            {
                star: 3,
                title: "Just okay",
                description: "Normal but not awesome performance",
                author: "Saran mukesh Choudhary",
            },
            {
                star: 2,
                title: "Expected a better product",
                description: "Network quality is bad",
                author: "Flipkart Customer",
            },
            {
                star: 3,
                title: "Fair",
                description: "Good but tower problem and voice mic not clear",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Worst experience ever!",
                description:
                    "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
                author: "Flipkart Customer",
            },
        ],
    },
    {
        id: 10,
        mobileId: "M10",
        ratings: [
            {
                star: 1,
                title: "Not recommended at all",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Useless product",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Nice product",
                description: "Great display.",
                author: "Gyana Jena",
            },
            {
                star: 5,
                title: "Best in the market!",
                description: "👌👌 good product",
                author: "Suraj Kumbhakar",
            },
            {
                star: 1,
                title: "Very poor",
                description: "Speaker not working after 7days",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Slightly disappointed",
                description: "speaker problem",
                author: "Samala Pradee",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Camera performance very bad",
                author: "Sumangal Mondal",
            },
            {
                star: 5,
                title: "Classy product",
                description: "The poco M2pro mobile is very👍 nice I love this phone",
                author: "Moumita Nandy",
            },
            {
                star: 1,
                title: "Useless product",
                description:
                    "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description: "Microphone not working",
            },
            {
                star: 4,
                title: "Very poor",
                description: "Thanks to Flipkart for fast delivery",
                author: "Ha Ri",
            },
            {
                star: 3,
                title: "Fair",
                description:
                    "All over good, some time get hanged in simple task like what's app message and calling time",
                author: "MUKHTIAR RAM",
            },
            {
                star: 5,
                title: "Classy product",
                description: "Good👍",
                author: "Mani Manikandan",
            },
            {
                star: 4,
                title: "Good choice",
                description: "Good",
                author: "Puja Pal",
            },
            {
                star: 4,
                title: "Nice product",
                description:
                    "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
                author: "Mitesh W",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "Best phone i have had.",
                author: "Swetasri Pal",
            },
            {
                star: 1,
                title: "Waste of money!",
                description:
                    "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Horrible",
                description: "Don't buy this mobile it has speaker issue",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description:
                    "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Utterly Disappointed",
                description: "My m2pro has yearspaker problem",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Not recommended at all",
                description: "miui is not good in poco mobile",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Nice phone ...blindly go for it",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Must buy!",
                description:
                    "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "I m happy 😁😊",
                author: "Anita Patwal",
            },
            {
                star: 3,
                title: "Just okay",
                description: "It's good phone but battery performance is poor...",
                author: "Sanjay Singh",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Good 🥳🥳🥳🥳",
                author: "SANTANU MALIK",
            },
            {
                star: 5,
                title: "Just wow!",
                description: "Good",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Bad quality",
                description:
                    "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
                author: "Manoj Patel",
            },
            {
                star: 2,
                title: "Bad quality",
                description: "Feels like a Brick",
                author: "Ashutosh Tyagi",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Ok product",
                author: "Momin Azharoddin",
            },
            {
                star: 3,
                title: "Just okay",
                description: "Normal but not awesome performance",
                author: "Saran mukesh Choudhary",
            },
            {
                star: 2,
                title: "Expected a better product",
                description: "Network quality is bad",
                author: "Flipkart Customer",
            },
            {
                star: 3,
                title: "Fair",
                description: "Good but tower problem and voice mic not clear",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Worst experience ever!",
                description:
                    "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
                author: "Flipkart Customer",
            },
        ],
    },
    {
        id: 11,
        mobileId: "M11",
        ratings: [
            {
                star: 1,
                title: "Not recommended at all",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Useless product",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Nice product",
                description: "Great display.",
                author: "Gyana Jena",
            },
            {
                star: 5,
                title: "Best in the market!",
                description: "👌👌 good product",
                author: "Suraj Kumbhakar",
            },
            {
                star: 1,
                title: "Very poor",
                description: "Speaker not working after 7days",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Slightly disappointed",
                description: "speaker problem",
                author: "Samala Pradee",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Camera performance very bad",
                author: "Sumangal Mondal",
            },
            {
                star: 5,
                title: "Classy product",
                description: "The poco M2pro mobile is very👍 nice I love this phone",
                author: "Moumita Nandy",
            },
            {
                star: 1,
                title: "Useless product",
                description:
                    "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description: "Microphone not working",
            },
            {
                star: 4,
                title: "Very poor",
                description: "Thanks to Flipkart for fast delivery",
                author: "Ha Ri",
            },
            {
                star: 3,
                title: "Fair",
                description:
                    "All over good, some time get hanged in simple task like what's app message and calling time",
                author: "MUKHTIAR RAM",
            },
            {
                star: 5,
                title: "Classy product",
                description: "Good👍",
                author: "Mani Manikandan",
            },
            {
                star: 4,
                title: "Good choice",
                description: "Good",
                author: "Puja Pal",
            },
            {
                star: 4,
                title: "Nice product",
                description:
                    "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
                author: "Mitesh W",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "Best phone i have had.",
                author: "Swetasri Pal",
            },
            {
                star: 1,
                title: "Waste of money!",
                description:
                    "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Horrible",
                description: "Don't buy this mobile it has speaker issue",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description:
                    "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Utterly Disappointed",
                description: "My m2pro has yearspaker problem",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Not recommended at all",
                description: "miui is not good in poco mobile",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Nice phone ...blindly go for it",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Must buy!",
                description:
                    "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "I m happy 😁😊",
                author: "Anita Patwal",
            },
            {
                star: 3,
                title: "Just okay",
                description: "It's good phone but battery performance is poor...",
                author: "Sanjay Singh",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Good 🥳🥳🥳🥳",
                author: "SANTANU MALIK",
            },
            {
                star: 5,
                title: "Just wow!",
                description: "Good",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Bad quality",
                description:
                    "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
                author: "Manoj Patel",
            },
            {
                star: 2,
                title: "Bad quality",
                description: "Feels like a Brick",
                author: "Ashutosh Tyagi",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Ok product",
                author: "Momin Azharoddin",
            },
            {
                star: 3,
                title: "Just okay",
                description: "Normal but not awesome performance",
                author: "Saran mukesh Choudhary",
            },
            {
                star: 2,
                title: "Expected a better product",
                description: "Network quality is bad",
                author: "Flipkart Customer",
            },
            {
                star: 3,
                title: "Fair",
                description: "Good but tower problem and voice mic not clear",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Worst experience ever!",
                description:
                    "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
                author: "Flipkart Customer",
            },
        ],
    },
    {
        id: 12,
        mobileId: "M12",
        ratings: [
            {
                star: 1,
                title: "Not recommended at all",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Useless product",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Nice product",
                description: "Great display.",
                author: "Gyana Jena",
            },
            {
                star: 5,
                title: "Best in the market!",
                description: "👌👌 good product",
                author: "Suraj Kumbhakar",
            },
            {
                star: 1,
                title: "Very poor",
                description: "Speaker not working after 7days",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Slightly disappointed",
                description: "speaker problem",
                author: "Samala Pradee",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Camera performance very bad",
                author: "Sumangal Mondal",
            },
            {
                star: 5,
                title: "Classy product",
                description: "The poco M2pro mobile is very👍 nice I love this phone",
                author: "Moumita Nandy",
            },
            {
                star: 1,
                title: "Useless product",
                description:
                    "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description: "Microphone not working",
            },
            {
                star: 4,
                title: "Very poor",
                description: "Thanks to Flipkart for fast delivery",
                author: "Ha Ri",
            },
            {
                star: 3,
                title: "Fair",
                description:
                    "All over good, some time get hanged in simple task like what's app message and calling time",
                author: "MUKHTIAR RAM",
            },
            {
                star: 5,
                title: "Classy product",
                description: "Good👍",
                author: "Mani Manikandan",
            },
            {
                star: 4,
                title: "Good choice",
                description: "Good",
                author: "Puja Pal",
            },
            {
                star: 4,
                title: "Nice product",
                description:
                    "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
                author: "Mitesh W",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "Best phone i have had.",
                author: "Swetasri Pal",
            },
            {
                star: 1,
                title: "Waste of money!",
                description:
                    "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Horrible",
                description: "Don't buy this mobile it has speaker issue",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description:
                    "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Utterly Disappointed",
                description: "My m2pro has yearspaker problem",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Not recommended at all",
                description: "miui is not good in poco mobile",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Nice phone ...blindly go for it",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Must buy!",
                description:
                    "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "I m happy 😁😊",
                author: "Anita Patwal",
            },
            {
                star: 3,
                title: "Just okay",
                description: "It's good phone but battery performance is poor...",
                author: "Sanjay Singh",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Good 🥳🥳🥳🥳",
                author: "SANTANU MALIK",
            },
            {
                star: 5,
                title: "Just wow!",
                description: "Good",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Bad quality",
                description:
                    "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
                author: "Manoj Patel",
            },
            {
                star: 2,
                title: "Bad quality",
                description: "Feels like a Brick",
                author: "Ashutosh Tyagi",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Ok product",
                author: "Momin Azharoddin",
            },
            {
                star: 3,
                title: "Just okay",
                description: "Normal but not awesome performance",
                author: "Saran mukesh Choudhary",
            },
            {
                star: 2,
                title: "Expected a better product",
                description: "Network quality is bad",
                author: "Flipkart Customer",
            },
            {
                star: 3,
                title: "Fair",
                description: "Good but tower problem and voice mic not clear",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Worst experience ever!",
                description:
                    "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
                author: "Flipkart Customer",
            },
        ],
    },
    {
        id: 13,
        mobileId: "M13",
        ratings: [
            {
                star: 1,
                title: "Not recommended at all",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Useless product",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Nice product",
                description: "Great display.",
                author: "Gyana Jena",
            },
            {
                star: 5,
                title: "Best in the market!",
                description: "👌👌 good product",
                author: "Suraj Kumbhakar",
            },
            {
                star: 1,
                title: "Very poor",
                description: "Speaker not working after 7days",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Slightly disappointed",
                description: "speaker problem",
                author: "Samala Pradee",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Camera performance very bad",
                author: "Sumangal Mondal",
            },
            {
                star: 5,
                title: "Classy product",
                description: "The poco M2pro mobile is very👍 nice I love this phone",
                author: "Moumita Nandy",
            },
            {
                star: 1,
                title: "Useless product",
                description:
                    "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description: "Microphone not working",
            },
            {
                star: 4,
                title: "Very poor",
                description: "Thanks to Flipkart for fast delivery",
                author: "Ha Ri",
            },
            {
                star: 3,
                title: "Fair",
                description:
                    "All over good, some time get hanged in simple task like what's app message and calling time",
                author: "MUKHTIAR RAM",
            },
            {
                star: 5,
                title: "Classy product",
                description: "Good👍",
                author: "Mani Manikandan",
            },
            {
                star: 4,
                title: "Good choice",
                description: "Good",
                author: "Puja Pal",
            },
            {
                star: 4,
                title: "Nice product",
                description:
                    "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
                author: "Mitesh W",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "Best phone i have had.",
                author: "Swetasri Pal",
            },
            {
                star: 1,
                title: "Waste of money!",
                description:
                    "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Horrible",
                description: "Don't buy this mobile it has speaker issue",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description:
                    "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Utterly Disappointed",
                description: "My m2pro has yearspaker problem",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Not recommended at all",
                description: "miui is not good in poco mobile",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Nice phone ...blindly go for it",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Must buy!",
                description:
                    "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "I m happy 😁😊",
                author: "Anita Patwal",
            },
            {
                star: 3,
                title: "Just okay",
                description: "It's good phone but battery performance is poor...",
                author: "Sanjay Singh",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Good 🥳🥳🥳🥳",
                author: "SANTANU MALIK",
            },
            {
                star: 5,
                title: "Just wow!",
                description: "Good",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Bad quality",
                description:
                    "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
                author: "Manoj Patel",
            },
            {
                star: 2,
                title: "Bad quality",
                description: "Feels like a Brick",
                author: "Ashutosh Tyagi",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Ok product",
                author: "Momin Azharoddin",
            },
            {
                star: 3,
                title: "Just okay",
                description: "Normal but not awesome performance",
                author: "Saran mukesh Choudhary",
            },
            {
                star: 2,
                title: "Expected a better product",
                description: "Network quality is bad",
                author: "Flipkart Customer",
            },
            {
                star: 3,
                title: "Fair",
                description: "Good but tower problem and voice mic not clear",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Worst experience ever!",
                description:
                    "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
                author: "Flipkart Customer",
            },
        ],
    },
    {
        id: 14,
        mobileId: "M14",
        ratings: [
            {
                star: 1,
                title: "Not recommended at all",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Useless product",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Nice product",
                description: "Great display.",
                author: "Gyana Jena",
            },
            {
                star: 5,
                title: "Best in the market!",
                description: "👌👌 good product",
                author: "Suraj Kumbhakar",
            },
            {
                star: 1,
                title: "Very poor",
                description: "Speaker not working after 7days",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Slightly disappointed",
                description: "speaker problem",
                author: "Samala Pradee",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Camera performance very bad",
                author: "Sumangal Mondal",
            },
            {
                star: 5,
                title: "Classy product",
                description: "The poco M2pro mobile is very👍 nice I love this phone",
                author: "Moumita Nandy",
            },
            {
                star: 1,
                title: "Useless product",
                description:
                    "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description: "Microphone not working",
            },
            {
                star: 4,
                title: "Very poor",
                description: "Thanks to Flipkart for fast delivery",
                author: "Ha Ri",
            },
            {
                star: 3,
                title: "Fair",
                description:
                    "All over good, some time get hanged in simple task like what's app message and calling time",
                author: "MUKHTIAR RAM",
            },
            {
                star: 5,
                title: "Classy product",
                description: "Good👍",
                author: "Mani Manikandan",
            },
            {
                star: 4,
                title: "Good choice",
                description: "Good",
                author: "Puja Pal",
            },
            {
                star: 4,
                title: "Nice product",
                description:
                    "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
                author: "Mitesh W",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "Best phone i have had.",
                author: "Swetasri Pal",
            },
            {
                star: 1,
                title: "Waste of money!",
                description:
                    "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Horrible",
                description: "Don't buy this mobile it has speaker issue",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description:
                    "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Utterly Disappointed",
                description: "My m2pro has yearspaker problem",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Not recommended at all",
                description: "miui is not good in poco mobile",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Nice phone ...blindly go for it",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Must buy!",
                description:
                    "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "I m happy 😁😊",
                author: "Anita Patwal",
            },
            {
                star: 3,
                title: "Just okay",
                description: "It's good phone but battery performance is poor...",
                author: "Sanjay Singh",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Good 🥳🥳🥳🥳",
                author: "SANTANU MALIK",
            },
            {
                star: 5,
                title: "Just wow!",
                description: "Good",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Bad quality",
                description:
                    "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
                author: "Manoj Patel",
            },
            {
                star: 2,
                title: "Bad quality",
                description: "Feels like a Brick",
                author: "Ashutosh Tyagi",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Ok product",
                author: "Momin Azharoddin",
            },
            {
                star: 3,
                title: "Just okay",
                description: "Normal but not awesome performance",
                author: "Saran mukesh Choudhary",
            },
            {
                star: 2,
                title: "Expected a better product",
                description: "Network quality is bad",
                author: "Flipkart Customer",
            },
            {
                star: 3,
                title: "Fair",
                description: "Good but tower problem and voice mic not clear",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Worst experience ever!",
                description:
                    "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
                author: "Flipkart Customer",
            },
        ],
    },
    {
        id: 15,
        mobileId: "M15",
        ratings: [
            {
                star: 1,
                title: "Not recommended at all",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Useless product",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Nice product",
                description: "Great display.",
                author: "Gyana Jena",
            },
            {
                star: 5,
                title: "Best in the market!",
                description: "👌👌 good product",
                author: "Suraj Kumbhakar",
            },
            {
                star: 1,
                title: "Very poor",
                description: "Speaker not working after 7days",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Slightly disappointed",
                description: "speaker problem",
                author: "Samala Pradee",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Camera performance very bad",
                author: "Sumangal Mondal",
            },
            {
                star: 5,
                title: "Classy product",
                description: "The poco M2pro mobile is very👍 nice I love this phone",
                author: "Moumita Nandy",
            },
            {
                star: 1,
                title: "Useless product",
                description:
                    "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description: "Microphone not working",
            },
            {
                star: 4,
                title: "Very poor",
                description: "Thanks to Flipkart for fast delivery",
                author: "Ha Ri",
            },
            {
                star: 3,
                title: "Fair",
                description:
                    "All over good, some time get hanged in simple task like what's app message and calling time",
                author: "MUKHTIAR RAM",
            },
            {
                star: 5,
                title: "Classy product",
                description: "Good👍",
                author: "Mani Manikandan",
            },
            {
                star: 4,
                title: "Good choice",
                description: "Good",
                author: "Puja Pal",
            },
            {
                star: 4,
                title: "Nice product",
                description:
                    "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
                author: "Mitesh W",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "Best phone i have had.",
                author: "Swetasri Pal",
            },
            {
                star: 1,
                title: "Waste of money!",
                description:
                    "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Horrible",
                description: "Don't buy this mobile it has speaker issue",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description:
                    "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Utterly Disappointed",
                description: "My m2pro has yearspaker problem",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Not recommended at all",
                description: "miui is not good in poco mobile",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Nice phone ...blindly go for it",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Must buy!",
                description:
                    "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "I m happy 😁😊",
                author: "Anita Patwal",
            },
            {
                star: 3,
                title: "Just okay",
                description: "It's good phone but battery performance is poor...",
                author: "Sanjay Singh",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Good 🥳🥳🥳🥳",
                author: "SANTANU MALIK",
            },
            {
                star: 5,
                title: "Just wow!",
                description: "Good",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Bad quality",
                description:
                    "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
                author: "Manoj Patel",
            },
            {
                star: 2,
                title: "Bad quality",
                description: "Feels like a Brick",
                author: "Ashutosh Tyagi",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Ok product",
                author: "Momin Azharoddin",
            },
            {
                star: 3,
                title: "Just okay",
                description: "Normal but not awesome performance",
                author: "Saran mukesh Choudhary",
            },
            {
                star: 2,
                title: "Expected a better product",
                description: "Network quality is bad",
                author: "Flipkart Customer",
            },
            {
                star: 3,
                title: "Fair",
                description: "Good but tower problem and voice mic not clear",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Worst experience ever!",
                description:
                    "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
                author: "Flipkart Customer",
            },
        ],
    },
    {
        id: 16,
        mobileId: "M16",
        ratings: [
            {
                star: 1,
                title: "Not recommended at all",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Useless product",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Nice product",
                description: "Great display.",
                author: "Gyana Jena",
            },
            {
                star: 5,
                title: "Best in the market!",
                description: "👌👌 good product",
                author: "Suraj Kumbhakar",
            },
            {
                star: 1,
                title: "Very poor",
                description: "Speaker not working after 7days",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Slightly disappointed",
                description: "speaker problem",
                author: "Samala Pradee",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Camera performance very bad",
                author: "Sumangal Mondal",
            },
            {
                star: 5,
                title: "Classy product",
                description: "The poco M2pro mobile is very👍 nice I love this phone",
                author: "Moumita Nandy",
            },
            {
                star: 1,
                title: "Useless product",
                description:
                    "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description: "Microphone not working",
            },
            {
                star: 4,
                title: "Very poor",
                description: "Thanks to Flipkart for fast delivery",
                author: "Ha Ri",
            },
            {
                star: 3,
                title: "Fair",
                description:
                    "All over good, some time get hanged in simple task like what's app message and calling time",
                author: "MUKHTIAR RAM",
            },
            {
                star: 5,
                title: "Classy product",
                description: "Good👍",
                author: "Mani Manikandan",
            },
            {
                star: 4,
                title: "Good choice",
                description: "Good",
                author: "Puja Pal",
            },
            {
                star: 4,
                title: "Nice product",
                description:
                    "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
                author: "Mitesh W",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "Best phone i have had.",
                author: "Swetasri Pal",
            },
            {
                star: 1,
                title: "Waste of money!",
                description:
                    "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Horrible",
                description: "Don't buy this mobile it has speaker issue",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description:
                    "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Utterly Disappointed",
                description: "My m2pro has yearspaker problem",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Not recommended at all",
                description: "miui is not good in poco mobile",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Nice phone ...blindly go for it",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Must buy!",
                description:
                    "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "I m happy 😁😊",
                author: "Anita Patwal",
            },
            {
                star: 3,
                title: "Just okay",
                description: "It's good phone but battery performance is poor...",
                author: "Sanjay Singh",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Good 🥳🥳🥳🥳",
                author: "SANTANU MALIK",
            },
            {
                star: 5,
                title: "Just wow!",
                description: "Good",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Bad quality",
                description:
                    "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
                author: "Manoj Patel",
            },
            {
                star: 2,
                title: "Bad quality",
                description: "Feels like a Brick",
                author: "Ashutosh Tyagi",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Ok product",
                author: "Momin Azharoddin",
            },
            {
                star: 3,
                title: "Just okay",
                description: "Normal but not awesome performance",
                author: "Saran mukesh Choudhary",
            },
            {
                star: 2,
                title: "Expected a better product",
                description: "Network quality is bad",
                author: "Flipkart Customer",
            },
            {
                star: 3,
                title: "Fair",
                description: "Good but tower problem and voice mic not clear",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Worst experience ever!",
                description:
                    "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
                author: "Flipkart Customer",
            },
        ],
    },
    {
        id: 17,
        mobileId: "M17",
        ratings: [
            {
                star: 1,
                title: "Not recommended at all",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Useless product",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Nice product",
                description: "Great display.",
                author: "Gyana Jena",
            },
            {
                star: 5,
                title: "Best in the market!",
                description: "👌👌 good product",
                author: "Suraj Kumbhakar",
            },
            {
                star: 1,
                title: "Very poor",
                description: "Speaker not working after 7days",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Slightly disappointed",
                description: "speaker problem",
                author: "Samala Pradee",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Camera performance very bad",
                author: "Sumangal Mondal",
            },
            {
                star: 5,
                title: "Classy product",
                description: "The poco M2pro mobile is very👍 nice I love this phone",
                author: "Moumita Nandy",
            },
            {
                star: 1,
                title: "Useless product",
                description:
                    "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description: "Microphone not working",
            },
            {
                star: 4,
                title: "Very poor",
                description: "Thanks to Flipkart for fast delivery",
                author: "Ha Ri",
            },
            {
                star: 3,
                title: "Fair",
                description:
                    "All over good, some time get hanged in simple task like what's app message and calling time",
                author: "MUKHTIAR RAM",
            },
            {
                star: 5,
                title: "Classy product",
                description: "Good👍",
                author: "Mani Manikandan",
            },
            {
                star: 4,
                title: "Good choice",
                description: "Good",
                author: "Puja Pal",
            },
            {
                star: 4,
                title: "Nice product",
                description:
                    "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
                author: "Mitesh W",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "Best phone i have had.",
                author: "Swetasri Pal",
            },
            {
                star: 1,
                title: "Waste of money!",
                description:
                    "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Horrible",
                description: "Don't buy this mobile it has speaker issue",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description:
                    "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Utterly Disappointed",
                description: "My m2pro has yearspaker problem",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Not recommended at all",
                description: "miui is not good in poco mobile",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Nice phone ...blindly go for it",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Must buy!",
                description:
                    "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "I m happy 😁😊",
                author: "Anita Patwal",
            },
            {
                star: 3,
                title: "Just okay",
                description: "It's good phone but battery performance is poor...",
                author: "Sanjay Singh",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Good 🥳🥳🥳🥳",
                author: "SANTANU MALIK",
            },
            {
                star: 5,
                title: "Just wow!",
                description: "Good",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Bad quality",
                description:
                    "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
                author: "Manoj Patel",
            },
            {
                star: 2,
                title: "Bad quality",
                description: "Feels like a Brick",
                author: "Ashutosh Tyagi",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Ok product",
                author: "Momin Azharoddin",
            },
            {
                star: 3,
                title: "Just okay",
                description: "Normal but not awesome performance",
                author: "Saran mukesh Choudhary",
            },
            {
                star: 2,
                title: "Expected a better product",
                description: "Network quality is bad",
                author: "Flipkart Customer",
            },
            {
                star: 3,
                title: "Fair",
                description: "Good but tower problem and voice mic not clear",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Worst experience ever!",
                description:
                    "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
                author: "Flipkart Customer",
            },
        ],
    },
    {
        id: 18,
        mobileId: "M18",
        ratings: [
            {
                star: 1,
                title: "Not recommended at all",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Useless product",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Nice product",
                description: "Great display.",
                author: "Gyana Jena",
            },
            {
                star: 5,
                title: "Best in the market!",
                description: "👌👌 good product",
                author: "Suraj Kumbhakar",
            },
            {
                star: 1,
                title: "Very poor",
                description: "Speaker not working after 7days",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Slightly disappointed",
                description: "speaker problem",
                author: "Samala Pradee",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Camera performance very bad",
                author: "Sumangal Mondal",
            },
            {
                star: 5,
                title: "Classy product",
                description: "The poco M2pro mobile is very👍 nice I love this phone",
                author: "Moumita Nandy",
            },
            {
                star: 1,
                title: "Useless product",
                description:
                    "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description: "Microphone not working",
            },
            {
                star: 4,
                title: "Very poor",
                description: "Thanks to Flipkart for fast delivery",
                author: "Ha Ri",
            },
            {
                star: 3,
                title: "Fair",
                description:
                    "All over good, some time get hanged in simple task like what's app message and calling time",
                author: "MUKHTIAR RAM",
            },
            {
                star: 5,
                title: "Classy product",
                description: "Good👍",
                author: "Mani Manikandan",
            },
            {
                star: 4,
                title: "Good choice",
                description: "Good",
                author: "Puja Pal",
            },
            {
                star: 4,
                title: "Nice product",
                description:
                    "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
                author: "Mitesh W",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "Best phone i have had.",
                author: "Swetasri Pal",
            },
            {
                star: 1,
                title: "Waste of money!",
                description:
                    "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Horrible",
                description: "Don't buy this mobile it has speaker issue",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description:
                    "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Utterly Disappointed",
                description: "My m2pro has yearspaker problem",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Not recommended at all",
                description: "miui is not good in poco mobile",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Nice phone ...blindly go for it",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Must buy!",
                description:
                    "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "I m happy 😁😊",
                author: "Anita Patwal",
            },
            {
                star: 3,
                title: "Just okay",
                description: "It's good phone but battery performance is poor...",
                author: "Sanjay Singh",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Good 🥳🥳🥳🥳",
                author: "SANTANU MALIK",
            },
            {
                star: 5,
                title: "Just wow!",
                description: "Good",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Bad quality",
                description:
                    "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
                author: "Manoj Patel",
            },
            {
                star: 2,
                title: "Bad quality",
                description: "Feels like a Brick",
                author: "Ashutosh Tyagi",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Ok product",
                author: "Momin Azharoddin",
            },
            {
                star: 3,
                title: "Just okay",
                description: "Normal but not awesome performance",
                author: "Saran mukesh Choudhary",
            },
            {
                star: 2,
                title: "Expected a better product",
                description: "Network quality is bad",
                author: "Flipkart Customer",
            },
            {
                star: 3,
                title: "Fair",
                description: "Good but tower problem and voice mic not clear",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Worst experience ever!",
                description:
                    "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
                author: "Flipkart Customer",
            },
        ],
    },
    {
        id: 19,
        mobileId: "M19",
        ratings: [
            {
                star: 1,
                title: "Not recommended at all",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Useless product",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Nice product",
                description: "Great display.",
                author: "Gyana Jena",
            },
            {
                star: 5,
                title: "Best in the market!",
                description: "👌👌 good product",
                author: "Suraj Kumbhakar",
            },
            {
                star: 1,
                title: "Very poor",
                description: "Speaker not working after 7days",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Slightly disappointed",
                description: "speaker problem",
                author: "Samala Pradee",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Camera performance very bad",
                author: "Sumangal Mondal",
            },
            {
                star: 5,
                title: "Classy product",
                description: "The poco M2pro mobile is very👍 nice I love this phone",
                author: "Moumita Nandy",
            },
            {
                star: 1,
                title: "Useless product",
                description:
                    "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description: "Microphone not working",
            },
            {
                star: 4,
                title: "Very poor",
                description: "Thanks to Flipkart for fast delivery",
                author: "Ha Ri",
            },
            {
                star: 3,
                title: "Fair",
                description:
                    "All over good, some time get hanged in simple task like what's app message and calling time",
                author: "MUKHTIAR RAM",
            },
            {
                star: 5,
                title: "Classy product",
                description: "Good👍",
                author: "Mani Manikandan",
            },
            {
                star: 4,
                title: "Good choice",
                description: "Good",
                author: "Puja Pal",
            },
            {
                star: 4,
                title: "Nice product",
                description:
                    "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
                author: "Mitesh W",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "Best phone i have had.",
                author: "Swetasri Pal",
            },
            {
                star: 1,
                title: "Waste of money!",
                description:
                    "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Horrible",
                description: "Don't buy this mobile it has speaker issue",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description:
                    "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Utterly Disappointed",
                description: "My m2pro has yearspaker problem",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Not recommended at all",
                description: "miui is not good in poco mobile",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Nice phone ...blindly go for it",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Must buy!",
                description:
                    "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "I m happy 😁😊",
                author: "Anita Patwal",
            },
            {
                star: 3,
                title: "Just okay",
                description: "It's good phone but battery performance is poor...",
                author: "Sanjay Singh",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Good 🥳🥳🥳🥳",
                author: "SANTANU MALIK",
            },
            {
                star: 5,
                title: "Just wow!",
                description: "Good",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Bad quality",
                description:
                    "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
                author: "Manoj Patel",
            },
            {
                star: 2,
                title: "Bad quality",
                description: "Feels like a Brick",
                author: "Ashutosh Tyagi",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Ok product",
                author: "Momin Azharoddin",
            },
            {
                star: 3,
                title: "Just okay",
                description: "Normal but not awesome performance",
                author: "Saran mukesh Choudhary",
            },
            {
                star: 2,
                title: "Expected a better product",
                description: "Network quality is bad",
                author: "Flipkart Customer",
            },
            {
                star: 3,
                title: "Fair",
                description: "Good but tower problem and voice mic not clear",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Worst experience ever!",
                description:
                    "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
                author: "Flipkart Customer",
            },
        ],
    },
    {
        id: 20,
        mobileId: "M20",
        ratings: [
            {
                star: 1,
                title: "Not recommended at all",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Useless product",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Nice product",
                description: "Great display.",
                author: "Gyana Jena",
            },
            {
                star: 5,
                title: "Best in the market!",
                description: "👌👌 good product",
                author: "Suraj Kumbhakar",
            },
            {
                star: 1,
                title: "Very poor",
                description: "Speaker not working after 7days",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Slightly disappointed",
                description: "speaker problem",
                author: "Samala Pradee",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Camera performance very bad",
                author: "Sumangal Mondal",
            },
            {
                star: 5,
                title: "Classy product",
                description: "The poco M2pro mobile is very👍 nice I love this phone",
                author: "Moumita Nandy",
            },
            {
                star: 1,
                title: "Useless product",
                description:
                    "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description: "Microphone not working",
            },
            {
                star: 4,
                title: "Very poor",
                description: "Thanks to Flipkart for fast delivery",
                author: "Ha Ri",
            },
            {
                star: 3,
                title: "Fair",
                description:
                    "All over good, some time get hanged in simple task like what's app message and calling time",
                author: "MUKHTIAR RAM",
            },
            {
                star: 5,
                title: "Classy product",
                description: "Good👍",
                author: "Mani Manikandan",
            },
            {
                star: 4,
                title: "Good choice",
                description: "Good",
                author: "Puja Pal",
            },
            {
                star: 4,
                title: "Nice product",
                description:
                    "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
                author: "Mitesh W",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "Best phone i have had.",
                author: "Swetasri Pal",
            },
            {
                star: 1,
                title: "Waste of money!",
                description:
                    "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Horrible",
                description: "Don't buy this mobile it has speaker issue",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description:
                    "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Utterly Disappointed",
                description: "My m2pro has yearspaker problem",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Not recommended at all",
                description: "miui is not good in poco mobile",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Nice phone ...blindly go for it",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Must buy!",
                description:
                    "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "I m happy 😁😊",
                author: "Anita Patwal",
            },
            {
                star: 3,
                title: "Just okay",
                description: "It's good phone but battery performance is poor...",
                author: "Sanjay Singh",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Good 🥳🥳🥳🥳",
                author: "SANTANU MALIK",
            },
            {
                star: 5,
                title: "Just wow!",
                description: "Good",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Bad quality",
                description:
                    "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
                author: "Manoj Patel",
            },
            {
                star: 2,
                title: "Bad quality",
                description: "Feels like a Brick",
                author: "Ashutosh Tyagi",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Ok product",
                author: "Momin Azharoddin",
            },
            {
                star: 3,
                title: "Just okay",
                description: "Normal but not awesome performance",
                author: "Saran mukesh Choudhary",
            },
            {
                star: 2,
                title: "Expected a better product",
                description: "Network quality is bad",
                author: "Flipkart Customer",
            },
            {
                star: 3,
                title: "Fair",
                description: "Good but tower problem and voice mic not clear",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Worst experience ever!",
                description:
                    "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
                author: "Flipkart Customer",
            },
        ],
    },
    {
        id: 21,
        mobileId: "M21",
        ratings: [
            {
                star: 1,
                title: "Not recommended at all",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Useless product",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Nice product",
                description: "Great display.",
                author: "Gyana Jena",
            },
            {
                star: 5,
                title: "Best in the market!",
                description: "👌👌 good product",
                author: "Suraj Kumbhakar",
            },
            {
                star: 1,
                title: "Very poor",
                description: "Speaker not working after 7days",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Slightly disappointed",
                description: "speaker problem",
                author: "Samala Pradee",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Camera performance very bad",
                author: "Sumangal Mondal",
            },
            {
                star: 5,
                title: "Classy product",
                description: "The poco M2pro mobile is very👍 nice I love this phone",
                author: "Moumita Nandy",
            },
            {
                star: 1,
                title: "Useless product",
                description:
                    "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description: "Microphone not working",
            },
            {
                star: 4,
                title: "Very poor",
                description: "Thanks to Flipkart for fast delivery",
                author: "Ha Ri",
            },
            {
                star: 3,
                title: "Fair",
                description:
                    "All over good, some time get hanged in simple task like what's app message and calling time",
                author: "MUKHTIAR RAM",
            },
            {
                star: 5,
                title: "Classy product",
                description: "Good👍",
                author: "Mani Manikandan",
            },
            {
                star: 4,
                title: "Good choice",
                description: "Good",
                author: "Puja Pal",
            },
            {
                star: 4,
                title: "Nice product",
                description:
                    "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
                author: "Mitesh W",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "Best phone i have had.",
                author: "Swetasri Pal",
            },
            {
                star: 1,
                title: "Waste of money!",
                description:
                    "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Horrible",
                description: "Don't buy this mobile it has speaker issue",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description:
                    "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Utterly Disappointed",
                description: "My m2pro has yearspaker problem",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Not recommended at all",
                description: "miui is not good in poco mobile",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Nice phone ...blindly go for it",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Must buy!",
                description:
                    "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "I m happy 😁😊",
                author: "Anita Patwal",
            },
            {
                star: 3,
                title: "Just okay",
                description: "It's good phone but battery performance is poor...",
                author: "Sanjay Singh",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Good 🥳🥳🥳🥳",
                author: "SANTANU MALIK",
            },
            {
                star: 5,
                title: "Just wow!",
                description: "Good",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Bad quality",
                description:
                    "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
                author: "Manoj Patel",
            },
            {
                star: 2,
                title: "Bad quality",
                description: "Feels like a Brick",
                author: "Ashutosh Tyagi",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Ok product",
                author: "Momin Azharoddin",
            },
            {
                star: 3,
                title: "Just okay",
                description: "Normal but not awesome performance",
                author: "Saran mukesh Choudhary",
            },
            {
                star: 2,
                title: "Expected a better product",
                description: "Network quality is bad",
                author: "Flipkart Customer",
            },
            {
                star: 3,
                title: "Fair",
                description: "Good but tower problem and voice mic not clear",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Worst experience ever!",
                description:
                    "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
                author: "Flipkart Customer",
            },
        ],
    },
    {
        id: 22,
        mobileId: "M22",
        ratings: [
            {
                star: 1,
                title: "Not recommended at all",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Useless product",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Nice product",
                description: "Great display.",
                author: "Gyana Jena",
            },
            {
                star: 5,
                title: "Best in the market!",
                description: "👌👌 good product",
                author: "Suraj Kumbhakar",
            },
            {
                star: 1,
                title: "Very poor",
                description: "Speaker not working after 7days",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Slightly disappointed",
                description: "speaker problem",
                author: "Samala Pradee",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Camera performance very bad",
                author: "Sumangal Mondal",
            },
            {
                star: 5,
                title: "Classy product",
                description: "The poco M2pro mobile is very👍 nice I love this phone",
                author: "Moumita Nandy",
            },
            {
                star: 1,
                title: "Useless product",
                description:
                    "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description: "Microphone not working",
            },
            {
                star: 4,
                title: "Very poor",
                description: "Thanks to Flipkart for fast delivery",
                author: "Ha Ri",
            },
            {
                star: 3,
                title: "Fair",
                description:
                    "All over good, some time get hanged in simple task like what's app message and calling time",
                author: "MUKHTIAR RAM",
            },
            {
                star: 5,
                title: "Classy product",
                description: "Good👍",
                author: "Mani Manikandan",
            },
            {
                star: 4,
                title: "Good choice",
                description: "Good",
                author: "Puja Pal",
            },
            {
                star: 4,
                title: "Nice product",
                description:
                    "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
                author: "Mitesh W",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "Best phone i have had.",
                author: "Swetasri Pal",
            },
            {
                star: 1,
                title: "Waste of money!",
                description:
                    "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Horrible",
                description: "Don't buy this mobile it has speaker issue",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description:
                    "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Utterly Disappointed",
                description: "My m2pro has yearspaker problem",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Not recommended at all",
                description: "miui is not good in poco mobile",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Nice phone ...blindly go for it",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Must buy!",
                description:
                    "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "I m happy 😁😊",
                author: "Anita Patwal",
            },
            {
                star: 3,
                title: "Just okay",
                description: "It's good phone but battery performance is poor...",
                author: "Sanjay Singh",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Good 🥳🥳🥳🥳",
                author: "SANTANU MALIK",
            },
            {
                star: 5,
                title: "Just wow!",
                description: "Good",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Bad quality",
                description:
                    "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
                author: "Manoj Patel",
            },
            {
                star: 2,
                title: "Bad quality",
                description: "Feels like a Brick",
                author: "Ashutosh Tyagi",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Ok product",
                author: "Momin Azharoddin",
            },
            {
                star: 3,
                title: "Just okay",
                description: "Normal but not awesome performance",
                author: "Saran mukesh Choudhary",
            },
            {
                star: 2,
                title: "Expected a better product",
                description: "Network quality is bad",
                author: "Flipkart Customer",
            },
            {
                star: 3,
                title: "Fair",
                description: "Good but tower problem and voice mic not clear",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Worst experience ever!",
                description:
                    "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
                author: "Flipkart Customer",
            },
        ],
    },
    {
        id: 23,
        mobileId: "M23",
        ratings: [
            {
                star: 1,
                title: "Not recommended at all",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Useless product",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Nice product",
                description: "Great display.",
                author: "Gyana Jena",
            },
            {
                star: 5,
                title: "Best in the market!",
                description: "👌👌 good product",
                author: "Suraj Kumbhakar",
            },
            {
                star: 1,
                title: "Very poor",
                description: "Speaker not working after 7days",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Slightly disappointed",
                description: "speaker problem",
                author: "Samala Pradee",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Camera performance very bad",
                author: "Sumangal Mondal",
            },
            {
                star: 5,
                title: "Classy product",
                description: "The poco M2pro mobile is very👍 nice I love this phone",
                author: "Moumita Nandy",
            },
            {
                star: 1,
                title: "Useless product",
                description:
                    "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description: "Microphone not working",
            },
            {
                star: 4,
                title: "Very poor",
                description: "Thanks to Flipkart for fast delivery",
                author: "Ha Ri",
            },
            {
                star: 3,
                title: "Fair",
                description:
                    "All over good, some time get hanged in simple task like what's app message and calling time",
                author: "MUKHTIAR RAM",
            },
            {
                star: 5,
                title: "Classy product",
                description: "Good👍",
                author: "Mani Manikandan",
            },
            {
                star: 4,
                title: "Good choice",
                description: "Good",
                author: "Puja Pal",
            },
            {
                star: 4,
                title: "Nice product",
                description:
                    "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
                author: "Mitesh W",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "Best phone i have had.",
                author: "Swetasri Pal",
            },
            {
                star: 1,
                title: "Waste of money!",
                description:
                    "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Horrible",
                description: "Don't buy this mobile it has speaker issue",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description:
                    "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Utterly Disappointed",
                description: "My m2pro has yearspaker problem",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Not recommended at all",
                description: "miui is not good in poco mobile",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Nice phone ...blindly go for it",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Must buy!",
                description:
                    "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "I m happy 😁😊",
                author: "Anita Patwal",
            },
            {
                star: 3,
                title: "Just okay",
                description: "It's good phone but battery performance is poor...",
                author: "Sanjay Singh",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Good 🥳🥳🥳🥳",
                author: "SANTANU MALIK",
            },
            {
                star: 5,
                title: "Just wow!",
                description: "Good",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Bad quality",
                description:
                    "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
                author: "Manoj Patel",
            },
            {
                star: 2,
                title: "Bad quality",
                description: "Feels like a Brick",
                author: "Ashutosh Tyagi",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Ok product",
                author: "Momin Azharoddin",
            },
            {
                star: 3,
                title: "Just okay",
                description: "Normal but not awesome performance",
                author: "Saran mukesh Choudhary",
            },
            {
                star: 2,
                title: "Expected a better product",
                description: "Network quality is bad",
                author: "Flipkart Customer",
            },
            {
                star: 3,
                title: "Fair",
                description: "Good but tower problem and voice mic not clear",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Worst experience ever!",
                description:
                    "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
                author: "Flipkart Customer",
            },
        ],
    },
    {
        id: 24,
        mobileId: "M24",
        ratings: [
            {
                star: 1,
                title: "Not recommended at all",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Useless product",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Nice product",
                description: "Great display.",
                author: "Gyana Jena",
            },
            {
                star: 5,
                title: "Best in the market!",
                description: "👌👌 good product",
                author: "Suraj Kumbhakar",
            },
            {
                star: 1,
                title: "Very poor",
                description: "Speaker not working after 7days",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Slightly disappointed",
                description: "speaker problem",
                author: "Samala Pradee",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Camera performance very bad",
                author: "Sumangal Mondal",
            },
            {
                star: 5,
                title: "Classy product",
                description: "The poco M2pro mobile is very👍 nice I love this phone",
                author: "Moumita Nandy",
            },
            {
                star: 1,
                title: "Useless product",
                description:
                    "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description: "Microphone not working",
            },
            {
                star: 4,
                title: "Very poor",
                description: "Thanks to Flipkart for fast delivery",
                author: "Ha Ri",
            },
            {
                star: 3,
                title: "Fair",
                description:
                    "All over good, some time get hanged in simple task like what's app message and calling time",
                author: "MUKHTIAR RAM",
            },
            {
                star: 5,
                title: "Classy product",
                description: "Good👍",
                author: "Mani Manikandan",
            },
            {
                star: 4,
                title: "Good choice",
                description: "Good",
                author: "Puja Pal",
            },
            {
                star: 4,
                title: "Nice product",
                description:
                    "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
                author: "Mitesh W",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "Best phone i have had.",
                author: "Swetasri Pal",
            },
            {
                star: 1,
                title: "Waste of money!",
                description:
                    "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Horrible",
                description: "Don't buy this mobile it has speaker issue",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description:
                    "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Utterly Disappointed",
                description: "My m2pro has yearspaker problem",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Not recommended at all",
                description: "miui is not good in poco mobile",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Nice phone ...blindly go for it",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Must buy!",
                description:
                    "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "I m happy 😁😊",
                author: "Anita Patwal",
            },
            {
                star: 3,
                title: "Just okay",
                description: "It's good phone but battery performance is poor...",
                author: "Sanjay Singh",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Good 🥳🥳🥳🥳",
                author: "SANTANU MALIK",
            },
            {
                star: 5,
                title: "Just wow!",
                description: "Good",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Bad quality",
                description:
                    "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
                author: "Manoj Patel",
            },
            {
                star: 2,
                title: "Bad quality",
                description: "Feels like a Brick",
                author: "Ashutosh Tyagi",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Ok product",
                author: "Momin Azharoddin",
            },
            {
                star: 3,
                title: "Just okay",
                description: "Normal but not awesome performance",
                author: "Saran mukesh Choudhary",
            },
            {
                star: 2,
                title: "Expected a better product",
                description: "Network quality is bad",
                author: "Flipkart Customer",
            },
            {
                star: 3,
                title: "Fair",
                description: "Good but tower problem and voice mic not clear",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Worst experience ever!",
                description:
                    "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
                author: "Flipkart Customer",
            },
        ],
    },
    {
        id: 25,
        mobileId: "M25",
        ratings: [
            {
                star: 1,
                title: "Not recommended at all",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Useless product",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Nice product",
                description: "Great display.",
                author: "Gyana Jena",
            },
            {
                star: 5,
                title: "Best in the market!",
                description: "👌👌 good product",
                author: "Suraj Kumbhakar",
            },
            {
                star: 1,
                title: "Very poor",
                description: "Speaker not working after 7days",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Slightly disappointed",
                description: "speaker problem",
                author: "Samala Pradee",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Camera performance very bad",
                author: "Sumangal Mondal",
            },
            {
                star: 5,
                title: "Classy product",
                description: "The poco M2pro mobile is very👍 nice I love this phone",
                author: "Moumita Nandy",
            },
            {
                star: 1,
                title: "Useless product",
                description:
                    "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description: "Microphone not working",
            },
            {
                star: 4,
                title: "Very poor",
                description: "Thanks to Flipkart for fast delivery",
                author: "Ha Ri",
            },
            {
                star: 3,
                title: "Fair",
                description:
                    "All over good, some time get hanged in simple task like what's app message and calling time",
                author: "MUKHTIAR RAM",
            },
            {
                star: 5,
                title: "Classy product",
                description: "Good👍",
                author: "Mani Manikandan",
            },
            {
                star: 4,
                title: "Good choice",
                description: "Good",
                author: "Puja Pal",
            },
            {
                star: 4,
                title: "Nice product",
                description:
                    "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
                author: "Mitesh W",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "Best phone i have had.",
                author: "Swetasri Pal",
            },
            {
                star: 1,
                title: "Waste of money!",
                description:
                    "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Horrible",
                description: "Don't buy this mobile it has speaker issue",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description:
                    "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Utterly Disappointed",
                description: "My m2pro has yearspaker problem",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Not recommended at all",
                description: "miui is not good in poco mobile",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Nice phone ...blindly go for it",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Must buy!",
                description:
                    "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "I m happy 😁😊",
                author: "Anita Patwal",
            },
            {
                star: 3,
                title: "Just okay",
                description: "It's good phone but battery performance is poor...",
                author: "Sanjay Singh",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Good 🥳🥳🥳🥳",
                author: "SANTANU MALIK",
            },
            {
                star: 5,
                title: "Just wow!",
                description: "Good",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Bad quality",
                description:
                    "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
                author: "Manoj Patel",
            },
            {
                star: 2,
                title: "Bad quality",
                description: "Feels like a Brick",
                author: "Ashutosh Tyagi",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Ok product",
                author: "Momin Azharoddin",
            },
            {
                star: 3,
                title: "Just okay",
                description: "Normal but not awesome performance",
                author: "Saran mukesh Choudhary",
            },
            {
                star: 2,
                title: "Expected a better product",
                description: "Network quality is bad",
                author: "Flipkart Customer",
            },
            {
                star: 3,
                title: "Fair",
                description: "Good but tower problem and voice mic not clear",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Worst experience ever!",
                description:
                    "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
                author: "Flipkart Customer",
            },
        ],
    },
    {
        id: 26,
        mobileId: "M26",
        ratings: [
            {
                star: 1,
                title: "Not recommended at all",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Useless product",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Nice product",
                description: "Great display.",
                author: "Gyana Jena",
            },
            {
                star: 5,
                title: "Best in the market!",
                description: "👌👌 good product",
                author: "Suraj Kumbhakar",
            },
            {
                star: 1,
                title: "Very poor",
                description: "Speaker not working after 7days",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Slightly disappointed",
                description: "speaker problem",
                author: "Samala Pradee",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Camera performance very bad",
                author: "Sumangal Mondal",
            },
            {
                star: 5,
                title: "Classy product",
                description: "The poco M2pro mobile is very👍 nice I love this phone",
                author: "Moumita Nandy",
            },
            {
                star: 1,
                title: "Useless product",
                description:
                    "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description: "Microphone not working",
            },
            {
                star: 4,
                title: "Very poor",
                description: "Thanks to Flipkart for fast delivery",
                author: "Ha Ri",
            },
            {
                star: 3,
                title: "Fair",
                description:
                    "All over good, some time get hanged in simple task like what's app message and calling time",
                author: "MUKHTIAR RAM",
            },
            {
                star: 5,
                title: "Classy product",
                description: "Good👍",
                author: "Mani Manikandan",
            },
            {
                star: 4,
                title: "Good choice",
                description: "Good",
                author: "Puja Pal",
            },
            {
                star: 4,
                title: "Nice product",
                description:
                    "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
                author: "Mitesh W",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "Best phone i have had.",
                author: "Swetasri Pal",
            },
            {
                star: 1,
                title: "Waste of money!",
                description:
                    "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Horrible",
                description: "Don't buy this mobile it has speaker issue",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description:
                    "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Utterly Disappointed",
                description: "My m2pro has yearspaker problem",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Not recommended at all",
                description: "miui is not good in poco mobile",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Nice phone ...blindly go for it",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Must buy!",
                description:
                    "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "I m happy 😁😊",
                author: "Anita Patwal",
            },
            {
                star: 3,
                title: "Just okay",
                description: "It's good phone but battery performance is poor...",
                author: "Sanjay Singh",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Good 🥳🥳🥳🥳",
                author: "SANTANU MALIK",
            },
            {
                star: 5,
                title: "Just wow!",
                description: "Good",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Bad quality",
                description:
                    "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
                author: "Manoj Patel",
            },
            {
                star: 2,
                title: "Bad quality",
                description: "Feels like a Brick",
                author: "Ashutosh Tyagi",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Ok product",
                author: "Momin Azharoddin",
            },
            {
                star: 3,
                title: "Just okay",
                description: "Normal but not awesome performance",
                author: "Saran mukesh Choudhary",
            },
            {
                star: 2,
                title: "Expected a better product",
                description: "Network quality is bad",
                author: "Flipkart Customer",
            },
            {
                star: 3,
                title: "Fair",
                description: "Good but tower problem and voice mic not clear",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Worst experience ever!",
                description:
                    "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
                author: "Flipkart Customer",
            },
        ],
    },
    {
        id: 27,
        mobileId: "M27",
        ratings: [
            {
                star: 1,
                title: "Not recommended at all",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Useless product",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Nice product",
                description: "Great display.",
                author: "Gyana Jena",
            },
            {
                star: 5,
                title: "Best in the market!",
                description: "👌👌 good product",
                author: "Suraj Kumbhakar",
            },
            {
                star: 1,
                title: "Very poor",
                description: "Speaker not working after 7days",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Slightly disappointed",
                description: "speaker problem",
                author: "Samala Pradee",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Camera performance very bad",
                author: "Sumangal Mondal",
            },
            {
                star: 5,
                title: "Classy product",
                description: "The poco M2pro mobile is very👍 nice I love this phone",
                author: "Moumita Nandy",
            },
            {
                star: 1,
                title: "Useless product",
                description:
                    "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description: "Microphone not working",
            },
            {
                star: 4,
                title: "Very poor",
                description: "Thanks to Flipkart for fast delivery",
                author: "Ha Ri",
            },
            {
                star: 3,
                title: "Fair",
                description:
                    "All over good, some time get hanged in simple task like what's app message and calling time",
                author: "MUKHTIAR RAM",
            },
            {
                star: 5,
                title: "Classy product",
                description: "Good👍",
                author: "Mani Manikandan",
            },
            {
                star: 4,
                title: "Good choice",
                description: "Good",
                author: "Puja Pal",
            },
            {
                star: 4,
                title: "Nice product",
                description:
                    "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
                author: "Mitesh W",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "Best phone i have had.",
                author: "Swetasri Pal",
            },
            {
                star: 1,
                title: "Waste of money!",
                description:
                    "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Horrible",
                description: "Don't buy this mobile it has speaker issue",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description:
                    "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Utterly Disappointed",
                description: "My m2pro has yearspaker problem",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Not recommended at all",
                description: "miui is not good in poco mobile",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Nice phone ...blindly go for it",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Must buy!",
                description:
                    "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "I m happy 😁😊",
                author: "Anita Patwal",
            },
            {
                star: 3,
                title: "Just okay",
                description: "It's good phone but battery performance is poor...",
                author: "Sanjay Singh",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Good 🥳🥳🥳🥳",
                author: "SANTANU MALIK",
            },
            {
                star: 5,
                title: "Just wow!",
                description: "Good",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Bad quality",
                description:
                    "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
                author: "Manoj Patel",
            },
            {
                star: 2,
                title: "Bad quality",
                description: "Feels like a Brick",
                author: "Ashutosh Tyagi",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Ok product",
                author: "Momin Azharoddin",
            },
            {
                star: 3,
                title: "Just okay",
                description: "Normal but not awesome performance",
                author: "Saran mukesh Choudhary",
            },
            {
                star: 2,
                title: "Expected a better product",
                description: "Network quality is bad",
                author: "Flipkart Customer",
            },
            {
                star: 3,
                title: "Fair",
                description: "Good but tower problem and voice mic not clear",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Worst experience ever!",
                description:
                    "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
                author: "Flipkart Customer",
            },
        ],
    },
    {
        id: 28,
        mobileId: "M28",
        ratings: [
            {
                star: 1,
                title: "Not recommended at all",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Useless product",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Nice product",
                description: "Great display.",
                author: "Gyana Jena",
            },
            {
                star: 5,
                title: "Best in the market!",
                description: "👌👌 good product",
                author: "Suraj Kumbhakar",
            },
            {
                star: 1,
                title: "Very poor",
                description: "Speaker not working after 7days",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Slightly disappointed",
                description: "speaker problem",
                author: "Samala Pradee",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Camera performance very bad",
                author: "Sumangal Mondal",
            },
            {
                star: 5,
                title: "Classy product",
                description: "The poco M2pro mobile is very👍 nice I love this phone",
                author: "Moumita Nandy",
            },
            {
                star: 1,
                title: "Useless product",
                description:
                    "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description: "Microphone not working",
            },
            {
                star: 4,
                title: "Very poor",
                description: "Thanks to Flipkart for fast delivery",
                author: "Ha Ri",
            },
            {
                star: 3,
                title: "Fair",
                description:
                    "All over good, some time get hanged in simple task like what's app message and calling time",
                author: "MUKHTIAR RAM",
            },
            {
                star: 5,
                title: "Classy product",
                description: "Good👍",
                author: "Mani Manikandan",
            },
            {
                star: 4,
                title: "Good choice",
                description: "Good",
                author: "Puja Pal",
            },
            {
                star: 4,
                title: "Nice product",
                description:
                    "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
                author: "Mitesh W",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "Best phone i have had.",
                author: "Swetasri Pal",
            },
            {
                star: 1,
                title: "Waste of money!",
                description:
                    "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Horrible",
                description: "Don't buy this mobile it has speaker issue",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description:
                    "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Utterly Disappointed",
                description: "My m2pro has yearspaker problem",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Not recommended at all",
                description: "miui is not good in poco mobile",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Nice phone ...blindly go for it",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Must buy!",
                description:
                    "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "I m happy 😁😊",
                author: "Anita Patwal",
            },
            {
                star: 3,
                title: "Just okay",
                description: "It's good phone but battery performance is poor...",
                author: "Sanjay Singh",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Good 🥳🥳🥳🥳",
                author: "SANTANU MALIK",
            },
            {
                star: 5,
                title: "Just wow!",
                description: "Good",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Bad quality",
                description:
                    "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
                author: "Manoj Patel",
            },
            {
                star: 2,
                title: "Bad quality",
                description: "Feels like a Brick",
                author: "Ashutosh Tyagi",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Ok product",
                author: "Momin Azharoddin",
            },
            {
                star: 3,
                title: "Just okay",
                description: "Normal but not awesome performance",
                author: "Saran mukesh Choudhary",
            },
            {
                star: 2,
                title: "Expected a better product",
                description: "Network quality is bad",
                author: "Flipkart Customer",
            },
            {
                star: 3,
                title: "Fair",
                description: "Good but tower problem and voice mic not clear",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Worst experience ever!",
                description:
                    "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
                author: "Flipkart Customer",
            },
        ],
    },
    {
        id: 29,
        mobileId: "M29",
        ratings: [
            {
                star: 1,
                title: "Not recommended at all",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Useless product",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Nice product",
                description: "Great display.",
                author: "Gyana Jena",
            },
            {
                star: 5,
                title: "Best in the market!",
                description: "👌👌 good product",
                author: "Suraj Kumbhakar",
            },
            {
                star: 1,
                title: "Very poor",
                description: "Speaker not working after 7days",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Slightly disappointed",
                description: "speaker problem",
                author: "Samala Pradee",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Camera performance very bad",
                author: "Sumangal Mondal",
            },
            {
                star: 5,
                title: "Classy product",
                description: "The poco M2pro mobile is very👍 nice I love this phone",
                author: "Moumita Nandy",
            },
            {
                star: 1,
                title: "Useless product",
                description:
                    "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description: "Microphone not working",
            },
            {
                star: 4,
                title: "Very poor",
                description: "Thanks to Flipkart for fast delivery",
                author: "Ha Ri",
            },
            {
                star: 3,
                title: "Fair",
                description:
                    "All over good, some time get hanged in simple task like what's app message and calling time",
                author: "MUKHTIAR RAM",
            },
            {
                star: 5,
                title: "Classy product",
                description: "Good👍",
                author: "Mani Manikandan",
            },
            {
                star: 4,
                title: "Good choice",
                description: "Good",
                author: "Puja Pal",
            },
            {
                star: 4,
                title: "Nice product",
                description:
                    "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
                author: "Mitesh W",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "Best phone i have had.",
                author: "Swetasri Pal",
            },
            {
                star: 1,
                title: "Waste of money!",
                description:
                    "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Horrible",
                description: "Don't buy this mobile it has speaker issue",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description:
                    "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Utterly Disappointed",
                description: "My m2pro has yearspaker problem",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Not recommended at all",
                description: "miui is not good in poco mobile",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Nice phone ...blindly go for it",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Must buy!",
                description:
                    "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "I m happy 😁😊",
                author: "Anita Patwal",
            },
            {
                star: 3,
                title: "Just okay",
                description: "It's good phone but battery performance is poor...",
                author: "Sanjay Singh",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Good 🥳🥳🥳🥳",
                author: "SANTANU MALIK",
            },
            {
                star: 5,
                title: "Just wow!",
                description: "Good",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Bad quality",
                description:
                    "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
                author: "Manoj Patel",
            },
            {
                star: 2,
                title: "Bad quality",
                description: "Feels like a Brick",
                author: "Ashutosh Tyagi",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Ok product",
                author: "Momin Azharoddin",
            },
            {
                star: 3,
                title: "Just okay",
                description: "Normal but not awesome performance",
                author: "Saran mukesh Choudhary",
            },
            {
                star: 2,
                title: "Expected a better product",
                description: "Network quality is bad",
                author: "Flipkart Customer",
            },
            {
                star: 3,
                title: "Fair",
                description: "Good but tower problem and voice mic not clear",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Worst experience ever!",
                description:
                    "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
                author: "Flipkart Customer",
            },
        ],
    },
    {
        id: 30,
        mobileId: "M30",
        ratings: [
            {
                star: 1,
                title: "Not recommended at all",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Useless product",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Nice product",
                description: "Great display.",
                author: "Gyana Jena",
            },
            {
                star: 5,
                title: "Best in the market!",
                description: "👌👌 good product",
                author: "Suraj Kumbhakar",
            },
            {
                star: 1,
                title: "Very poor",
                description: "Speaker not working after 7days",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Slightly disappointed",
                description: "speaker problem",
                author: "Samala Pradee",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Camera performance very bad",
                author: "Sumangal Mondal",
            },
            {
                star: 5,
                title: "Classy product",
                description: "The poco M2pro mobile is very👍 nice I love this phone",
                author: "Moumita Nandy",
            },
            {
                star: 1,
                title: "Useless product",
                description:
                    "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description: "Microphone not working",
            },
            {
                star: 4,
                title: "Very poor",
                description: "Thanks to Flipkart for fast delivery",
                author: "Ha Ri",
            },
            {
                star: 3,
                title: "Fair",
                description:
                    "All over good, some time get hanged in simple task like what's app message and calling time",
                author: "MUKHTIAR RAM",
            },
            {
                star: 5,
                title: "Classy product",
                description: "Good👍",
                author: "Mani Manikandan",
            },
            {
                star: 4,
                title: "Good choice",
                description: "Good",
                author: "Puja Pal",
            },
            {
                star: 4,
                title: "Nice product",
                description:
                    "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
                author: "Mitesh W",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "Best phone i have had.",
                author: "Swetasri Pal",
            },
            {
                star: 1,
                title: "Waste of money!",
                description:
                    "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Horrible",
                description: "Don't buy this mobile it has speaker issue",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description:
                    "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Utterly Disappointed",
                description: "My m2pro has yearspaker problem",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Not recommended at all",
                description: "miui is not good in poco mobile",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Nice phone ...blindly go for it",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Must buy!",
                description:
                    "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "I m happy 😁😊",
                author: "Anita Patwal",
            },
            {
                star: 3,
                title: "Just okay",
                description: "It's good phone but battery performance is poor...",
                author: "Sanjay Singh",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Good 🥳🥳🥳🥳",
                author: "SANTANU MALIK",
            },
            {
                star: 5,
                title: "Just wow!",
                description: "Good",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Bad quality",
                description:
                    "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
                author: "Manoj Patel",
            },
            {
                star: 2,
                title: "Bad quality",
                description: "Feels like a Brick",
                author: "Ashutosh Tyagi",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Ok product",
                author: "Momin Azharoddin",
            },
            {
                star: 3,
                title: "Just okay",
                description: "Normal but not awesome performance",
                author: "Saran mukesh Choudhary",
            },
            {
                star: 2,
                title: "Expected a better product",
                description: "Network quality is bad",
                author: "Flipkart Customer",
            },
            {
                star: 3,
                title: "Fair",
                description: "Good but tower problem and voice mic not clear",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Worst experience ever!",
                description:
                    "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
                author: "Flipkart Customer",
            },
        ],
    },
    {
        id: 31,
        mobileId: "M31",
        ratings: [
            {
                star: 1,
                title: "Not recommended at all",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Useless product",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Nice product",
                description: "Great display.",
                author: "Gyana Jena",
            },
            {
                star: 5,
                title: "Best in the market!",
                description: "👌👌 good product",
                author: "Suraj Kumbhakar",
            },
            {
                star: 1,
                title: "Very poor",
                description: "Speaker not working after 7days",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Slightly disappointed",
                description: "speaker problem",
                author: "Samala Pradee",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Camera performance very bad",
                author: "Sumangal Mondal",
            },
            {
                star: 5,
                title: "Classy product",
                description: "The poco M2pro mobile is very👍 nice I love this phone",
                author: "Moumita Nandy",
            },
            {
                star: 1,
                title: "Useless product",
                description:
                    "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description: "Microphone not working",
            },
            {
                star: 4,
                title: "Very poor",
                description: "Thanks to Flipkart for fast delivery",
                author: "Ha Ri",
            },
            {
                star: 3,
                title: "Fair",
                description:
                    "All over good, some time get hanged in simple task like what's app message and calling time",
                author: "MUKHTIAR RAM",
            },
            {
                star: 5,
                title: "Classy product",
                description: "Good👍",
                author: "Mani Manikandan",
            },
            {
                star: 4,
                title: "Good choice",
                description: "Good",
                author: "Puja Pal",
            },
            {
                star: 4,
                title: "Nice product",
                description:
                    "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
                author: "Mitesh W",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "Best phone i have had.",
                author: "Swetasri Pal",
            },
            {
                star: 1,
                title: "Waste of money!",
                description:
                    "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Horrible",
                description: "Don't buy this mobile it has speaker issue",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description:
                    "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Utterly Disappointed",
                description: "My m2pro has yearspaker problem",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Not recommended at all",
                description: "miui is not good in poco mobile",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Nice phone ...blindly go for it",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Must buy!",
                description:
                    "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "I m happy 😁😊",
                author: "Anita Patwal",
            },
            {
                star: 3,
                title: "Just okay",
                description: "It's good phone but battery performance is poor...",
                author: "Sanjay Singh",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Good 🥳🥳🥳🥳",
                author: "SANTANU MALIK",
            },
            {
                star: 5,
                title: "Just wow!",
                description: "Good",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Bad quality",
                description:
                    "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
                author: "Manoj Patel",
            },
            {
                star: 2,
                title: "Bad quality",
                description: "Feels like a Brick",
                author: "Ashutosh Tyagi",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Ok product",
                author: "Momin Azharoddin",
            },
            {
                star: 3,
                title: "Just okay",
                description: "Normal but not awesome performance",
                author: "Saran mukesh Choudhary",
            },
            {
                star: 2,
                title: "Expected a better product",
                description: "Network quality is bad",
                author: "Flipkart Customer",
            },
            {
                star: 3,
                title: "Fair",
                description: "Good but tower problem and voice mic not clear",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Worst experience ever!",
                description:
                    "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
                author: "Flipkart Customer",
            },
        ],
    },
    {
        id: 32,
        mobileId: "M32",
        ratings: [
            {
                star: 1,
                title: "Not recommended at all",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Useless product",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Nice product",
                description: "Great display.",
                author: "Gyana Jena",
            },
            {
                star: 5,
                title: "Best in the market!",
                description: "👌👌 good product",
                author: "Suraj Kumbhakar",
            },
            {
                star: 1,
                title: "Very poor",
                description: "Speaker not working after 7days",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Slightly disappointed",
                description: "speaker problem",
                author: "Samala Pradee",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Camera performance very bad",
                author: "Sumangal Mondal",
            },
            {
                star: 5,
                title: "Classy product",
                description: "The poco M2pro mobile is very👍 nice I love this phone",
                author: "Moumita Nandy",
            },
            {
                star: 1,
                title: "Useless product",
                description:
                    "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description: "Microphone not working",
            },
            {
                star: 4,
                title: "Very poor",
                description: "Thanks to Flipkart for fast delivery",
                author: "Ha Ri",
            },
            {
                star: 3,
                title: "Fair",
                description:
                    "All over good, some time get hanged in simple task like what's app message and calling time",
                author: "MUKHTIAR RAM",
            },
            {
                star: 5,
                title: "Classy product",
                description: "Good👍",
                author: "Mani Manikandan",
            },
            {
                star: 4,
                title: "Good choice",
                description: "Good",
                author: "Puja Pal",
            },
            {
                star: 4,
                title: "Nice product",
                description:
                    "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
                author: "Mitesh W",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "Best phone i have had.",
                author: "Swetasri Pal",
            },
            {
                star: 1,
                title: "Waste of money!",
                description:
                    "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Horrible",
                description: "Don't buy this mobile it has speaker issue",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description:
                    "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Utterly Disappointed",
                description: "My m2pro has yearspaker problem",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Not recommended at all",
                description: "miui is not good in poco mobile",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Nice phone ...blindly go for it",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Must buy!",
                description:
                    "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "I m happy 😁😊",
                author: "Anita Patwal",
            },
            {
                star: 3,
                title: "Just okay",
                description: "It's good phone but battery performance is poor...",
                author: "Sanjay Singh",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Good 🥳🥳🥳🥳",
                author: "SANTANU MALIK",
            },
            {
                star: 5,
                title: "Just wow!",
                description: "Good",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Bad quality",
                description:
                    "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
                author: "Manoj Patel",
            },
            {
                star: 2,
                title: "Bad quality",
                description: "Feels like a Brick",
                author: "Ashutosh Tyagi",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Ok product",
                author: "Momin Azharoddin",
            },
            {
                star: 3,
                title: "Just okay",
                description: "Normal but not awesome performance",
                author: "Saran mukesh Choudhary",
            },
            {
                star: 2,
                title: "Expected a better product",
                description: "Network quality is bad",
                author: "Flipkart Customer",
            },
            {
                star: 3,
                title: "Fair",
                description: "Good but tower problem and voice mic not clear",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Worst experience ever!",
                description:
                    "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
                author: "Flipkart Customer",
            },
        ],
    },
    {
        id: 33,
        mobileId: "M33",
        ratings: [
            {
                star: 1,
                title: "Not recommended at all",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Useless product",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Nice product",
                description: "Great display.",
                author: "Gyana Jena",
            },
            {
                star: 5,
                title: "Best in the market!",
                description: "👌👌 good product",
                author: "Suraj Kumbhakar",
            },
            {
                star: 1,
                title: "Very poor",
                description: "Speaker not working after 7days",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Slightly disappointed",
                description: "speaker problem",
                author: "Samala Pradee",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Camera performance very bad",
                author: "Sumangal Mondal",
            },
            {
                star: 5,
                title: "Classy product",
                description: "The poco M2pro mobile is very👍 nice I love this phone",
                author: "Moumita Nandy",
            },
            {
                star: 1,
                title: "Useless product",
                description:
                    "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description: "Microphone not working",
            },
            {
                star: 4,
                title: "Very poor",
                description: "Thanks to Flipkart for fast delivery",
                author: "Ha Ri",
            },
            {
                star: 3,
                title: "Fair",
                description:
                    "All over good, some time get hanged in simple task like what's app message and calling time",
                author: "MUKHTIAR RAM",
            },
            {
                star: 5,
                title: "Classy product",
                description: "Good👍",
                author: "Mani Manikandan",
            },
            {
                star: 4,
                title: "Good choice",
                description: "Good",
                author: "Puja Pal",
            },
            {
                star: 4,
                title: "Nice product",
                description:
                    "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
                author: "Mitesh W",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "Best phone i have had.",
                author: "Swetasri Pal",
            },
            {
                star: 1,
                title: "Waste of money!",
                description:
                    "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Horrible",
                description: "Don't buy this mobile it has speaker issue",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description:
                    "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Utterly Disappointed",
                description: "My m2pro has yearspaker problem",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Not recommended at all",
                description: "miui is not good in poco mobile",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Nice phone ...blindly go for it",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Must buy!",
                description:
                    "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "I m happy 😁😊",
                author: "Anita Patwal",
            },
            {
                star: 3,
                title: "Just okay",
                description: "It's good phone but battery performance is poor...",
                author: "Sanjay Singh",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Good 🥳🥳🥳🥳",
                author: "SANTANU MALIK",
            },
            {
                star: 5,
                title: "Just wow!",
                description: "Good",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Bad quality",
                description:
                    "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
                author: "Manoj Patel",
            },
            {
                star: 2,
                title: "Bad quality",
                description: "Feels like a Brick",
                author: "Ashutosh Tyagi",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Ok product",
                author: "Momin Azharoddin",
            },
            {
                star: 3,
                title: "Just okay",
                description: "Normal but not awesome performance",
                author: "Saran mukesh Choudhary",
            },
            {
                star: 2,
                title: "Expected a better product",
                description: "Network quality is bad",
                author: "Flipkart Customer",
            },
            {
                star: 3,
                title: "Fair",
                description: "Good but tower problem and voice mic not clear",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Worst experience ever!",
                description:
                    "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
                author: "Flipkart Customer",
            },
        ],
    },
    {
        id: 34,
        mobileId: "M34",
        ratings: [
            {
                star: 1,
                title: "Not recommended at all",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Useless product",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Nice product",
                description: "Great display.",
                author: "Gyana Jena",
            },
            {
                star: 5,
                title: "Best in the market!",
                description: "👌👌 good product",
                author: "Suraj Kumbhakar",
            },
            {
                star: 1,
                title: "Very poor",
                description: "Speaker not working after 7days",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Slightly disappointed",
                description: "speaker problem",
                author: "Samala Pradee",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Camera performance very bad",
                author: "Sumangal Mondal",
            },
            {
                star: 5,
                title: "Classy product",
                description: "The poco M2pro mobile is very👍 nice I love this phone",
                author: "Moumita Nandy",
            },
            {
                star: 1,
                title: "Useless product",
                description:
                    "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description: "Microphone not working",
            },
            {
                star: 4,
                title: "Very poor",
                description: "Thanks to Flipkart for fast delivery",
                author: "Ha Ri",
            },
            {
                star: 3,
                title: "Fair",
                description:
                    "All over good, some time get hanged in simple task like what's app message and calling time",
                author: "MUKHTIAR RAM",
            },
            {
                star: 5,
                title: "Classy product",
                description: "Good👍",
                author: "Mani Manikandan",
            },
            {
                star: 4,
                title: "Good choice",
                description: "Good",
                author: "Puja Pal",
            },
            {
                star: 4,
                title: "Nice product",
                description:
                    "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
                author: "Mitesh W",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "Best phone i have had.",
                author: "Swetasri Pal",
            },
            {
                star: 1,
                title: "Waste of money!",
                description:
                    "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Horrible",
                description: "Don't buy this mobile it has speaker issue",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description:
                    "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Utterly Disappointed",
                description: "My m2pro has yearspaker problem",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Not recommended at all",
                description: "miui is not good in poco mobile",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Nice phone ...blindly go for it",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Must buy!",
                description:
                    "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "I m happy 😁😊",
                author: "Anita Patwal",
            },
            {
                star: 3,
                title: "Just okay",
                description: "It's good phone but battery performance is poor...",
                author: "Sanjay Singh",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Good 🥳🥳🥳🥳",
                author: "SANTANU MALIK",
            },
            {
                star: 5,
                title: "Just wow!",
                description: "Good",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Bad quality",
                description:
                    "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
                author: "Manoj Patel",
            },
            {
                star: 2,
                title: "Bad quality",
                description: "Feels like a Brick",
                author: "Ashutosh Tyagi",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Ok product",
                author: "Momin Azharoddin",
            },
            {
                star: 3,
                title: "Just okay",
                description: "Normal but not awesome performance",
                author: "Saran mukesh Choudhary",
            },
            {
                star: 2,
                title: "Expected a better product",
                description: "Network quality is bad",
                author: "Flipkart Customer",
            },
            {
                star: 3,
                title: "Fair",
                description: "Good but tower problem and voice mic not clear",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Worst experience ever!",
                description:
                    "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
                author: "Flipkart Customer",
            },
        ],
    },
    {
        id: 35,
        mobileId: "M35",
        ratings: [
            {
                star: 1,
                title: "Not recommended at all",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Useless product",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Nice product",
                description: "Great display.",
                author: "Gyana Jena",
            },
            {
                star: 5,
                title: "Best in the market!",
                description: "👌👌 good product",
                author: "Suraj Kumbhakar",
            },
            {
                star: 1,
                title: "Very poor",
                description: "Speaker not working after 7days",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Slightly disappointed",
                description: "speaker problem",
                author: "Samala Pradee",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Camera performance very bad",
                author: "Sumangal Mondal",
            },
            {
                star: 5,
                title: "Classy product",
                description: "The poco M2pro mobile is very👍 nice I love this phone",
                author: "Moumita Nandy",
            },
            {
                star: 1,
                title: "Useless product",
                description:
                    "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description: "Microphone not working",
            },
            {
                star: 4,
                title: "Very poor",
                description: "Thanks to Flipkart for fast delivery",
                author: "Ha Ri",
            },
            {
                star: 3,
                title: "Fair",
                description:
                    "All over good, some time get hanged in simple task like what's app message and calling time",
                author: "MUKHTIAR RAM",
            },
            {
                star: 5,
                title: "Classy product",
                description: "Good👍",
                author: "Mani Manikandan",
            },
            {
                star: 4,
                title: "Good choice",
                description: "Good",
                author: "Puja Pal",
            },
            {
                star: 4,
                title: "Nice product",
                description:
                    "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
                author: "Mitesh W",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "Best phone i have had.",
                author: "Swetasri Pal",
            },
            {
                star: 1,
                title: "Waste of money!",
                description:
                    "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Horrible",
                description: "Don't buy this mobile it has speaker issue",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description:
                    "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Utterly Disappointed",
                description: "My m2pro has yearspaker problem",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Not recommended at all",
                description: "miui is not good in poco mobile",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Nice phone ...blindly go for it",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Must buy!",
                description:
                    "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "I m happy 😁😊",
                author: "Anita Patwal",
            },
            {
                star: 3,
                title: "Just okay",
                description: "It's good phone but battery performance is poor...",
                author: "Sanjay Singh",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Good 🥳🥳🥳🥳",
                author: "SANTANU MALIK",
            },
            {
                star: 5,
                title: "Just wow!",
                description: "Good",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Bad quality",
                description:
                    "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
                author: "Manoj Patel",
            },
            {
                star: 2,
                title: "Bad quality",
                description: "Feels like a Brick",
                author: "Ashutosh Tyagi",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Ok product",
                author: "Momin Azharoddin",
            },
            {
                star: 3,
                title: "Just okay",
                description: "Normal but not awesome performance",
                author: "Saran mukesh Choudhary",
            },
            {
                star: 2,
                title: "Expected a better product",
                description: "Network quality is bad",
                author: "Flipkart Customer",
            },
            {
                star: 3,
                title: "Fair",
                description: "Good but tower problem and voice mic not clear",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Worst experience ever!",
                description:
                    "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
                author: "Flipkart Customer",
            },
        ],
    },
    {
        id: 36,
        mobileId: "M36",
        ratings: [
            {
                star: 1,
                title: "Not recommended at all",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Useless product",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Nice product",
                description: "Great display.",
                author: "Gyana Jena",
            },
            {
                star: 5,
                title: "Best in the market!",
                description: "👌👌 good product",
                author: "Suraj Kumbhakar",
            },
            {
                star: 1,
                title: "Very poor",
                description: "Speaker not working after 7days",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Slightly disappointed",
                description: "speaker problem",
                author: "Samala Pradee",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Camera performance very bad",
                author: "Sumangal Mondal",
            },
            {
                star: 5,
                title: "Classy product",
                description: "The poco M2pro mobile is very👍 nice I love this phone",
                author: "Moumita Nandy",
            },
            {
                star: 1,
                title: "Useless product",
                description:
                    "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description: "Microphone not working",
            },
            {
                star: 4,
                title: "Very poor",
                description: "Thanks to Flipkart for fast delivery",
                author: "Ha Ri",
            },
            {
                star: 3,
                title: "Fair",
                description:
                    "All over good, some time get hanged in simple task like what's app message and calling time",
                author: "MUKHTIAR RAM",
            },
            {
                star: 5,
                title: "Classy product",
                description: "Good👍",
                author: "Mani Manikandan",
            },
            {
                star: 4,
                title: "Good choice",
                description: "Good",
                author: "Puja Pal",
            },
            {
                star: 4,
                title: "Nice product",
                description:
                    "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
                author: "Mitesh W",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "Best phone i have had.",
                author: "Swetasri Pal",
            },
            {
                star: 1,
                title: "Waste of money!",
                description:
                    "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Horrible",
                description: "Don't buy this mobile it has speaker issue",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description:
                    "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Utterly Disappointed",
                description: "My m2pro has yearspaker problem",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Not recommended at all",
                description: "miui is not good in poco mobile",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Nice phone ...blindly go for it",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Must buy!",
                description:
                    "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "I m happy 😁😊",
                author: "Anita Patwal",
            },
            {
                star: 3,
                title: "Just okay",
                description: "It's good phone but battery performance is poor...",
                author: "Sanjay Singh",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Good 🥳🥳🥳🥳",
                author: "SANTANU MALIK",
            },
            {
                star: 5,
                title: "Just wow!",
                description: "Good",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Bad quality",
                description:
                    "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
                author: "Manoj Patel",
            },
            {
                star: 2,
                title: "Bad quality",
                description: "Feels like a Brick",
                author: "Ashutosh Tyagi",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Ok product",
                author: "Momin Azharoddin",
            },
            {
                star: 3,
                title: "Just okay",
                description: "Normal but not awesome performance",
                author: "Saran mukesh Choudhary",
            },
            {
                star: 2,
                title: "Expected a better product",
                description: "Network quality is bad",
                author: "Flipkart Customer",
            },
            {
                star: 3,
                title: "Fair",
                description: "Good but tower problem and voice mic not clear",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Worst experience ever!",
                description:
                    "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
                author: "Flipkart Customer",
            },
        ],
    },
    {
        id: 37,
        mobileId: "M37",
        ratings: [
            {
                star: 1,
                title: "Not recommended at all",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Useless product",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Nice product",
                description: "Great display.",
                author: "Gyana Jena",
            },
            {
                star: 5,
                title: "Best in the market!",
                description: "👌👌 good product",
                author: "Suraj Kumbhakar",
            },
            {
                star: 1,
                title: "Very poor",
                description: "Speaker not working after 7days",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Slightly disappointed",
                description: "speaker problem",
                author: "Samala Pradee",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Camera performance very bad",
                author: "Sumangal Mondal",
            },
            {
                star: 5,
                title: "Classy product",
                description: "The poco M2pro mobile is very👍 nice I love this phone",
                author: "Moumita Nandy",
            },
            {
                star: 1,
                title: "Useless product",
                description:
                    "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description: "Microphone not working",
            },
            {
                star: 4,
                title: "Very poor",
                description: "Thanks to Flipkart for fast delivery",
                author: "Ha Ri",
            },
            {
                star: 3,
                title: "Fair",
                description:
                    "All over good, some time get hanged in simple task like what's app message and calling time",
                author: "MUKHTIAR RAM",
            },
            {
                star: 5,
                title: "Classy product",
                description: "Good👍",
                author: "Mani Manikandan",
            },
            {
                star: 4,
                title: "Good choice",
                description: "Good",
                author: "Puja Pal",
            },
            {
                star: 4,
                title: "Nice product",
                description:
                    "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
                author: "Mitesh W",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "Best phone i have had.",
                author: "Swetasri Pal",
            },
            {
                star: 1,
                title: "Waste of money!",
                description:
                    "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Horrible",
                description: "Don't buy this mobile it has speaker issue",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description:
                    "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Utterly Disappointed",
                description: "My m2pro has yearspaker problem",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Not recommended at all",
                description: "miui is not good in poco mobile",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Nice phone ...blindly go for it",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Must buy!",
                description:
                    "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "I m happy 😁😊",
                author: "Anita Patwal",
            },
            {
                star: 3,
                title: "Just okay",
                description: "It's good phone but battery performance is poor...",
                author: "Sanjay Singh",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Good 🥳🥳🥳🥳",
                author: "SANTANU MALIK",
            },
            {
                star: 5,
                title: "Just wow!",
                description: "Good",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Bad quality",
                description:
                    "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
                author: "Manoj Patel",
            },
            {
                star: 2,
                title: "Bad quality",
                description: "Feels like a Brick",
                author: "Ashutosh Tyagi",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Ok product",
                author: "Momin Azharoddin",
            },
            {
                star: 3,
                title: "Just okay",
                description: "Normal but not awesome performance",
                author: "Saran mukesh Choudhary",
            },
            {
                star: 2,
                title: "Expected a better product",
                description: "Network quality is bad",
                author: "Flipkart Customer",
            },
            {
                star: 3,
                title: "Fair",
                description: "Good but tower problem and voice mic not clear",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Worst experience ever!",
                description:
                    "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
                author: "Flipkart Customer",
            },
        ],
    },
    {
        id: 38,
        mobileId: "M38",
        ratings: [
            {
                star: 1,
                title: "Not recommended at all",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Useless product",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Nice product",
                description: "Great display.",
                author: "Gyana Jena",
            },
            {
                star: 5,
                title: "Best in the market!",
                description: "👌👌 good product",
                author: "Suraj Kumbhakar",
            },
            {
                star: 1,
                title: "Very poor",
                description: "Speaker not working after 7days",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Slightly disappointed",
                description: "speaker problem",
                author: "Samala Pradee",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Camera performance very bad",
                author: "Sumangal Mondal",
            },
            {
                star: 5,
                title: "Classy product",
                description: "The poco M2pro mobile is very👍 nice I love this phone",
                author: "Moumita Nandy",
            },
            {
                star: 1,
                title: "Useless product",
                description:
                    "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description: "Microphone not working",
            },
            {
                star: 4,
                title: "Very poor",
                description: "Thanks to Flipkart for fast delivery",
                author: "Ha Ri",
            },
            {
                star: 3,
                title: "Fair",
                description:
                    "All over good, some time get hanged in simple task like what's app message and calling time",
                author: "MUKHTIAR RAM",
            },
            {
                star: 5,
                title: "Classy product",
                description: "Good👍",
                author: "Mani Manikandan",
            },
            {
                star: 4,
                title: "Good choice",
                description: "Good",
                author: "Puja Pal",
            },
            {
                star: 4,
                title: "Nice product",
                description:
                    "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
                author: "Mitesh W",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "Best phone i have had.",
                author: "Swetasri Pal",
            },
            {
                star: 1,
                title: "Waste of money!",
                description:
                    "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Horrible",
                description: "Don't buy this mobile it has speaker issue",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description:
                    "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Utterly Disappointed",
                description: "My m2pro has yearspaker problem",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Not recommended at all",
                description: "miui is not good in poco mobile",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Nice phone ...blindly go for it",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Must buy!",
                description:
                    "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "I m happy 😁😊",
                author: "Anita Patwal",
            },
            {
                star: 3,
                title: "Just okay",
                description: "It's good phone but battery performance is poor...",
                author: "Sanjay Singh",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Good 🥳🥳🥳🥳",
                author: "SANTANU MALIK",
            },
            {
                star: 5,
                title: "Just wow!",
                description: "Good",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Bad quality",
                description:
                    "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
                author: "Manoj Patel",
            },
            {
                star: 2,
                title: "Bad quality",
                description: "Feels like a Brick",
                author: "Ashutosh Tyagi",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Ok product",
                author: "Momin Azharoddin",
            },
            {
                star: 3,
                title: "Just okay",
                description: "Normal but not awesome performance",
                author: "Saran mukesh Choudhary",
            },
            {
                star: 2,
                title: "Expected a better product",
                description: "Network quality is bad",
                author: "Flipkart Customer",
            },
            {
                star: 3,
                title: "Fair",
                description: "Good but tower problem and voice mic not clear",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Worst experience ever!",
                description:
                    "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
                author: "Flipkart Customer",
            },
        ],
    },
    {
        id: 39,
        mobileId: "M39",
        ratings: [
            {
                star: 1,
                title: "Not recommended at all",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Useless product",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Nice product",
                description: "Great display.",
                author: "Gyana Jena",
            },
            {
                star: 5,
                title: "Best in the market!",
                description: "👌👌 good product",
                author: "Suraj Kumbhakar",
            },
            {
                star: 1,
                title: "Very poor",
                description: "Speaker not working after 7days",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Slightly disappointed",
                description: "speaker problem",
                author: "Samala Pradee",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Camera performance very bad",
                author: "Sumangal Mondal",
            },
            {
                star: 5,
                title: "Classy product",
                description: "The poco M2pro mobile is very👍 nice I love this phone",
                author: "Moumita Nandy",
            },
            {
                star: 1,
                title: "Useless product",
                description:
                    "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description: "Microphone not working",
            },
            {
                star: 4,
                title: "Very poor",
                description: "Thanks to Flipkart for fast delivery",
                author: "Ha Ri",
            },
            {
                star: 3,
                title: "Fair",
                description:
                    "All over good, some time get hanged in simple task like what's app message and calling time",
                author: "MUKHTIAR RAM",
            },
            {
                star: 5,
                title: "Classy product",
                description: "Good👍",
                author: "Mani Manikandan",
            },
            {
                star: 4,
                title: "Good choice",
                description: "Good",
                author: "Puja Pal",
            },
            {
                star: 4,
                title: "Nice product",
                description:
                    "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
                author: "Mitesh W",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "Best phone i have had.",
                author: "Swetasri Pal",
            },
            {
                star: 1,
                title: "Waste of money!",
                description:
                    "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Horrible",
                description: "Don't buy this mobile it has speaker issue",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description:
                    "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Utterly Disappointed",
                description: "My m2pro has yearspaker problem",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Not recommended at all",
                description: "miui is not good in poco mobile",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Nice phone ...blindly go for it",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Must buy!",
                description:
                    "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "I m happy 😁😊",
                author: "Anita Patwal",
            },
            {
                star: 3,
                title: "Just okay",
                description: "It's good phone but battery performance is poor...",
                author: "Sanjay Singh",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Good 🥳🥳🥳🥳",
                author: "SANTANU MALIK",
            },
            {
                star: 5,
                title: "Just wow!",
                description: "Good",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Bad quality",
                description:
                    "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
                author: "Manoj Patel",
            },
            {
                star: 2,
                title: "Bad quality",
                description: "Feels like a Brick",
                author: "Ashutosh Tyagi",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Ok product",
                author: "Momin Azharoddin",
            },
            {
                star: 3,
                title: "Just okay",
                description: "Normal but not awesome performance",
                author: "Saran mukesh Choudhary",
            },
            {
                star: 2,
                title: "Expected a better product",
                description: "Network quality is bad",
                author: "Flipkart Customer",
            },
            {
                star: 3,
                title: "Fair",
                description: "Good but tower problem and voice mic not clear",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Worst experience ever!",
                description:
                    "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
                author: "Flipkart Customer",
            },
        ],
    },
    {
        id: 40,
        mobileId: "M40",
        ratings: [
            {
                star: 1,
                title: "Not recommended at all",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Useless product",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Nice product",
                description: "Great display.",
                author: "Gyana Jena",
            },
            {
                star: 5,
                title: "Best in the market!",
                description: "👌👌 good product",
                author: "Suraj Kumbhakar",
            },
            {
                star: 1,
                title: "Very poor",
                description: "Speaker not working after 7days",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Slightly disappointed",
                description: "speaker problem",
                author: "Samala Pradee",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Camera performance very bad",
                author: "Sumangal Mondal",
            },
            {
                star: 5,
                title: "Classy product",
                description: "The poco M2pro mobile is very👍 nice I love this phone",
                author: "Moumita Nandy",
            },
            {
                star: 1,
                title: "Useless product",
                description:
                    "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description: "Microphone not working",
            },
            {
                star: 4,
                title: "Very poor",
                description: "Thanks to Flipkart for fast delivery",
                author: "Ha Ri",
            },
            {
                star: 3,
                title: "Fair",
                description:
                    "All over good, some time get hanged in simple task like what's app message and calling time",
                author: "MUKHTIAR RAM",
            },
            {
                star: 5,
                title: "Classy product",
                description: "Good👍",
                author: "Mani Manikandan",
            },
            {
                star: 4,
                title: "Good choice",
                description: "Good",
                author: "Puja Pal",
            },
            {
                star: 4,
                title: "Nice product",
                description:
                    "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
                author: "Mitesh W",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "Best phone i have had.",
                author: "Swetasri Pal",
            },
            {
                star: 1,
                title: "Waste of money!",
                description:
                    "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Horrible",
                description: "Don't buy this mobile it has speaker issue",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description:
                    "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Utterly Disappointed",
                description: "My m2pro has yearspaker problem",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Not recommended at all",
                description: "miui is not good in poco mobile",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Nice phone ...blindly go for it",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Must buy!",
                description:
                    "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "I m happy 😁😊",
                author: "Anita Patwal",
            },
            {
                star: 3,
                title: "Just okay",
                description: "It's good phone but battery performance is poor...",
                author: "Sanjay Singh",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Good 🥳🥳🥳🥳",
                author: "SANTANU MALIK",
            },
            {
                star: 5,
                title: "Just wow!",
                description: "Good",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Bad quality",
                description:
                    "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
                author: "Manoj Patel",
            },
            {
                star: 2,
                title: "Bad quality",
                description: "Feels like a Brick",
                author: "Ashutosh Tyagi",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Ok product",
                author: "Momin Azharoddin",
            },
            {
                star: 3,
                title: "Just okay",
                description: "Normal but not awesome performance",
                author: "Saran mukesh Choudhary",
            },
            {
                star: 2,
                title: "Expected a better product",
                description: "Network quality is bad",
                author: "Flipkart Customer",
            },
            {
                star: 3,
                title: "Fair",
                description: "Good but tower problem and voice mic not clear",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Worst experience ever!",
                description:
                    "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
                author: "Flipkart Customer",
            },
        ],
    },
    {
        id: 41,
        mobileId: "M41",
        ratings: [
            {
                star: 1,
                title: "Not recommended at all",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Useless product",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Nice product",
                description: "Great display.",
                author: "Gyana Jena",
            },
            {
                star: 5,
                title: "Best in the market!",
                description: "👌👌 good product",
                author: "Suraj Kumbhakar",
            },
            {
                star: 1,
                title: "Very poor",
                description: "Speaker not working after 7days",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Slightly disappointed",
                description: "speaker problem",
                author: "Samala Pradee",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Camera performance very bad",
                author: "Sumangal Mondal",
            },
            {
                star: 5,
                title: "Classy product",
                description: "The poco M2pro mobile is very👍 nice I love this phone",
                author: "Moumita Nandy",
            },
            {
                star: 1,
                title: "Useless product",
                description:
                    "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description: "Microphone not working",
            },
            {
                star: 4,
                title: "Very poor",
                description: "Thanks to Flipkart for fast delivery",
                author: "Ha Ri",
            },
            {
                star: 3,
                title: "Fair",
                description:
                    "All over good, some time get hanged in simple task like what's app message and calling time",
                author: "MUKHTIAR RAM",
            },
            {
                star: 5,
                title: "Classy product",
                description: "Good👍",
                author: "Mani Manikandan",
            },
            {
                star: 4,
                title: "Good choice",
                description: "Good",
                author: "Puja Pal",
            },
            {
                star: 4,
                title: "Nice product",
                description:
                    "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
                author: "Mitesh W",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "Best phone i have had.",
                author: "Swetasri Pal",
            },
            {
                star: 1,
                title: "Waste of money!",
                description:
                    "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Horrible",
                description: "Don't buy this mobile it has speaker issue",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description:
                    "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Utterly Disappointed",
                description: "My m2pro has yearspaker problem",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Not recommended at all",
                description: "miui is not good in poco mobile",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Nice phone ...blindly go for it",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Must buy!",
                description:
                    "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "I m happy 😁😊",
                author: "Anita Patwal",
            },
            {
                star: 3,
                title: "Just okay",
                description: "It's good phone but battery performance is poor...",
                author: "Sanjay Singh",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Good 🥳🥳🥳🥳",
                author: "SANTANU MALIK",
            },
            {
                star: 5,
                title: "Just wow!",
                description: "Good",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Bad quality",
                description:
                    "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
                author: "Manoj Patel",
            },
            {
                star: 2,
                title: "Bad quality",
                description: "Feels like a Brick",
                author: "Ashutosh Tyagi",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Ok product",
                author: "Momin Azharoddin",
            },
            {
                star: 3,
                title: "Just okay",
                description: "Normal but not awesome performance",
                author: "Saran mukesh Choudhary",
            },
            {
                star: 2,
                title: "Expected a better product",
                description: "Network quality is bad",
                author: "Flipkart Customer",
            },
            {
                star: 3,
                title: "Fair",
                description: "Good but tower problem and voice mic not clear",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Worst experience ever!",
                description:
                    "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
                author: "Flipkart Customer",
            },
        ],
    },
    {
        id: 42,
        mobileId: "M42",
        ratings: [
            {
                star: 1,
                title: "Not recommended at all",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Useless product",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Nice product",
                description: "Great display.",
                author: "Gyana Jena",
            },
            {
                star: 5,
                title: "Best in the market!",
                description: "👌👌 good product",
                author: "Suraj Kumbhakar",
            },
            {
                star: 1,
                title: "Very poor",
                description: "Speaker not working after 7days",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Slightly disappointed",
                description: "speaker problem",
                author: "Samala Pradee",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Camera performance very bad",
                author: "Sumangal Mondal",
            },
            {
                star: 5,
                title: "Classy product",
                description: "The poco M2pro mobile is very👍 nice I love this phone",
                author: "Moumita Nandy",
            },
            {
                star: 1,
                title: "Useless product",
                description:
                    "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description: "Microphone not working",
            },
            {
                star: 4,
                title: "Very poor",
                description: "Thanks to Flipkart for fast delivery",
                author: "Ha Ri",
            },
            {
                star: 3,
                title: "Fair",
                description:
                    "All over good, some time get hanged in simple task like what's app message and calling time",
                author: "MUKHTIAR RAM",
            },
            {
                star: 5,
                title: "Classy product",
                description: "Good👍",
                author: "Mani Manikandan",
            },
            {
                star: 4,
                title: "Good choice",
                description: "Good",
                author: "Puja Pal",
            },
            {
                star: 4,
                title: "Nice product",
                description:
                    "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
                author: "Mitesh W",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "Best phone i have had.",
                author: "Swetasri Pal",
            },
            {
                star: 1,
                title: "Waste of money!",
                description:
                    "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Horrible",
                description: "Don't buy this mobile it has speaker issue",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description:
                    "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Utterly Disappointed",
                description: "My m2pro has yearspaker problem",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Not recommended at all",
                description: "miui is not good in poco mobile",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Nice phone ...blindly go for it",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Must buy!",
                description:
                    "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "I m happy 😁😊",
                author: "Anita Patwal",
            },
            {
                star: 3,
                title: "Just okay",
                description: "It's good phone but battery performance is poor...",
                author: "Sanjay Singh",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Good 🥳🥳🥳🥳",
                author: "SANTANU MALIK",
            },
            {
                star: 5,
                title: "Just wow!",
                description: "Good",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Bad quality",
                description:
                    "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
                author: "Manoj Patel",
            },
            {
                star: 2,
                title: "Bad quality",
                description: "Feels like a Brick",
                author: "Ashutosh Tyagi",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Ok product",
                author: "Momin Azharoddin",
            },
            {
                star: 3,
                title: "Just okay",
                description: "Normal but not awesome performance",
                author: "Saran mukesh Choudhary",
            },
            {
                star: 2,
                title: "Expected a better product",
                description: "Network quality is bad",
                author: "Flipkart Customer",
            },
            {
                star: 3,
                title: "Fair",
                description: "Good but tower problem and voice mic not clear",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Worst experience ever!",
                description:
                    "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
                author: "Flipkart Customer",
            },
        ],
    },
    {
        id: 43,
        mobileId: "M43",
        ratings: [
            {
                star: 1,
                title: "Not recommended at all",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Useless product",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Nice product",
                description: "Great display.",
                author: "Gyana Jena",
            },
            {
                star: 5,
                title: "Best in the market!",
                description: "👌👌 good product",
                author: "Suraj Kumbhakar",
            },
            {
                star: 1,
                title: "Very poor",
                description: "Speaker not working after 7days",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Slightly disappointed",
                description: "speaker problem",
                author: "Samala Pradee",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Camera performance very bad",
                author: "Sumangal Mondal",
            },
            {
                star: 5,
                title: "Classy product",
                description: "The poco M2pro mobile is very👍 nice I love this phone",
                author: "Moumita Nandy",
            },
            {
                star: 1,
                title: "Useless product",
                description:
                    "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description: "Microphone not working",
            },
            {
                star: 4,
                title: "Very poor",
                description: "Thanks to Flipkart for fast delivery",
                author: "Ha Ri",
            },
            {
                star: 3,
                title: "Fair",
                description:
                    "All over good, some time get hanged in simple task like what's app message and calling time",
                author: "MUKHTIAR RAM",
            },
            {
                star: 5,
                title: "Classy product",
                description: "Good👍",
                author: "Mani Manikandan",
            },
            {
                star: 4,
                title: "Good choice",
                description: "Good",
                author: "Puja Pal",
            },
            {
                star: 4,
                title: "Nice product",
                description:
                    "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
                author: "Mitesh W",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "Best phone i have had.",
                author: "Swetasri Pal",
            },
            {
                star: 1,
                title: "Waste of money!",
                description:
                    "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Horrible",
                description: "Don't buy this mobile it has speaker issue",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description:
                    "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Utterly Disappointed",
                description: "My m2pro has yearspaker problem",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Not recommended at all",
                description: "miui is not good in poco mobile",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Nice phone ...blindly go for it",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Must buy!",
                description:
                    "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "I m happy 😁😊",
                author: "Anita Patwal",
            },
            {
                star: 3,
                title: "Just okay",
                description: "It's good phone but battery performance is poor...",
                author: "Sanjay Singh",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Good 🥳🥳🥳🥳",
                author: "SANTANU MALIK",
            },
            {
                star: 5,
                title: "Just wow!",
                description: "Good",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Bad quality",
                description:
                    "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
                author: "Manoj Patel",
            },
            {
                star: 2,
                title: "Bad quality",
                description: "Feels like a Brick",
                author: "Ashutosh Tyagi",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Ok product",
                author: "Momin Azharoddin",
            },
            {
                star: 3,
                title: "Just okay",
                description: "Normal but not awesome performance",
                author: "Saran mukesh Choudhary",
            },
            {
                star: 2,
                title: "Expected a better product",
                description: "Network quality is bad",
                author: "Flipkart Customer",
            },
            {
                star: 3,
                title: "Fair",
                description: "Good but tower problem and voice mic not clear",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Worst experience ever!",
                description:
                    "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
                author: "Flipkart Customer",
            },
        ],
    },
    {
        id: 44,
        mobileId: "M44",
        ratings: [
            {
                star: 1,
                title: "Not recommended at all",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Useless product",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Nice product",
                description: "Great display.",
                author: "Gyana Jena",
            },
            {
                star: 5,
                title: "Best in the market!",
                description: "👌👌 good product",
                author: "Suraj Kumbhakar",
            },
            {
                star: 1,
                title: "Very poor",
                description: "Speaker not working after 7days",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Slightly disappointed",
                description: "speaker problem",
                author: "Samala Pradee",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Camera performance very bad",
                author: "Sumangal Mondal",
            },
            {
                star: 5,
                title: "Classy product",
                description: "The poco M2pro mobile is very👍 nice I love this phone",
                author: "Moumita Nandy",
            },
            {
                star: 1,
                title: "Useless product",
                description:
                    "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description: "Microphone not working",
            },
            {
                star: 4,
                title: "Very poor",
                description: "Thanks to Flipkart for fast delivery",
                author: "Ha Ri",
            },
            {
                star: 3,
                title: "Fair",
                description:
                    "All over good, some time get hanged in simple task like what's app message and calling time",
                author: "MUKHTIAR RAM",
            },
            {
                star: 5,
                title: "Classy product",
                description: "Good👍",
                author: "Mani Manikandan",
            },
            {
                star: 4,
                title: "Good choice",
                description: "Good",
                author: "Puja Pal",
            },
            {
                star: 4,
                title: "Nice product",
                description:
                    "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
                author: "Mitesh W",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "Best phone i have had.",
                author: "Swetasri Pal",
            },
            {
                star: 1,
                title: "Waste of money!",
                description:
                    "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Horrible",
                description: "Don't buy this mobile it has speaker issue",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description:
                    "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Utterly Disappointed",
                description: "My m2pro has yearspaker problem",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Not recommended at all",
                description: "miui is not good in poco mobile",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Nice phone ...blindly go for it",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Must buy!",
                description:
                    "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "I m happy 😁😊",
                author: "Anita Patwal",
            },
            {
                star: 3,
                title: "Just okay",
                description: "It's good phone but battery performance is poor...",
                author: "Sanjay Singh",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Good 🥳🥳🥳🥳",
                author: "SANTANU MALIK",
            },
            {
                star: 5,
                title: "Just wow!",
                description: "Good",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Bad quality",
                description:
                    "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
                author: "Manoj Patel",
            },
            {
                star: 2,
                title: "Bad quality",
                description: "Feels like a Brick",
                author: "Ashutosh Tyagi",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Ok product",
                author: "Momin Azharoddin",
            },
            {
                star: 3,
                title: "Just okay",
                description: "Normal but not awesome performance",
                author: "Saran mukesh Choudhary",
            },
            {
                star: 2,
                title: "Expected a better product",
                description: "Network quality is bad",
                author: "Flipkart Customer",
            },
            {
                star: 3,
                title: "Fair",
                description: "Good but tower problem and voice mic not clear",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Worst experience ever!",
                description:
                    "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
                author: "Flipkart Customer",
            },
        ],
    },
    {
        id: 45,
        mobileId: "M45",
        ratings: [
            {
                star: 1,
                title: "Not recommended at all",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Useless product",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Nice product",
                description: "Great display.",
                author: "Gyana Jena",
            },
            {
                star: 5,
                title: "Best in the market!",
                description: "👌👌 good product",
                author: "Suraj Kumbhakar",
            },
            {
                star: 1,
                title: "Very poor",
                description: "Speaker not working after 7days",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Slightly disappointed",
                description: "speaker problem",
                author: "Samala Pradee",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Camera performance very bad",
                author: "Sumangal Mondal",
            },
            {
                star: 5,
                title: "Classy product",
                description: "The poco M2pro mobile is very👍 nice I love this phone",
                author: "Moumita Nandy",
            },
            {
                star: 1,
                title: "Useless product",
                description:
                    "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description: "Microphone not working",
            },
            {
                star: 4,
                title: "Very poor",
                description: "Thanks to Flipkart for fast delivery",
                author: "Ha Ri",
            },
            {
                star: 3,
                title: "Fair",
                description:
                    "All over good, some time get hanged in simple task like what's app message and calling time",
                author: "MUKHTIAR RAM",
            },
            {
                star: 5,
                title: "Classy product",
                description: "Good👍",
                author: "Mani Manikandan",
            },
            {
                star: 4,
                title: "Good choice",
                description: "Good",
                author: "Puja Pal",
            },
            {
                star: 4,
                title: "Nice product",
                description:
                    "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
                author: "Mitesh W",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "Best phone i have had.",
                author: "Swetasri Pal",
            },
            {
                star: 1,
                title: "Waste of money!",
                description:
                    "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Horrible",
                description: "Don't buy this mobile it has speaker issue",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description:
                    "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Utterly Disappointed",
                description: "My m2pro has yearspaker problem",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Not recommended at all",
                description: "miui is not good in poco mobile",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Nice phone ...blindly go for it",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Must buy!",
                description:
                    "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "I m happy 😁😊",
                author: "Anita Patwal",
            },
            {
                star: 3,
                title: "Just okay",
                description: "It's good phone but battery performance is poor...",
                author: "Sanjay Singh",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Good 🥳🥳🥳🥳",
                author: "SANTANU MALIK",
            },
            {
                star: 5,
                title: "Just wow!",
                description: "Good",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Bad quality",
                description:
                    "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
                author: "Manoj Patel",
            },
            {
                star: 2,
                title: "Bad quality",
                description: "Feels like a Brick",
                author: "Ashutosh Tyagi",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Ok product",
                author: "Momin Azharoddin",
            },
            {
                star: 3,
                title: "Just okay",
                description: "Normal but not awesome performance",
                author: "Saran mukesh Choudhary",
            },
            {
                star: 2,
                title: "Expected a better product",
                description: "Network quality is bad",
                author: "Flipkart Customer",
            },
            {
                star: 3,
                title: "Fair",
                description: "Good but tower problem and voice mic not clear",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Worst experience ever!",
                description:
                    "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
                author: "Flipkart Customer",
            },
        ],
    },
    {
        id: 46,
        mobileId: "M46",
        ratings: [
            {
                star: 1,
                title: "Not recommended at all",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Useless product",
                description: "",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Nice product",
                description: "Great display.",
                author: "Gyana Jena",
            },
            {
                star: 5,
                title: "Best in the market!",
                description: "👌👌 good product",
                author: "Suraj Kumbhakar",
            },
            {
                star: 1,
                title: "Very poor",
                description: "Speaker not working after 7days",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Slightly disappointed",
                description: "speaker problem",
                author: "Samala Pradee",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Camera performance very bad",
                author: "Sumangal Mondal",
            },
            {
                star: 5,
                title: "Classy product",
                description: "The poco M2pro mobile is very👍 nice I love this phone",
                author: "Moumita Nandy",
            },
            {
                star: 1,
                title: "Useless product",
                description:
                    "The earphone jack got issue. Whenever i remove the earfone it was showing connected. And the earpiece speaker was not working when call is made",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description: "Microphone not working",
            },
            {
                star: 4,
                title: "Very poor",
                description: "Thanks to Flipkart for fast delivery",
                author: "Ha Ri",
            },
            {
                star: 3,
                title: "Fair",
                description:
                    "All over good, some time get hanged in simple task like what's app message and calling time",
                author: "MUKHTIAR RAM",
            },
            {
                star: 5,
                title: "Classy product",
                description: "Good👍",
                author: "Mani Manikandan",
            },
            {
                star: 4,
                title: "Good choice",
                description: "Good",
                author: "Puja Pal",
            },
            {
                star: 4,
                title: "Nice product",
                description:
                    "Everything thing is good only size and battery can be shrinked a bit and weigh below 195-190 gms would have made a lot of difference. And a 90hz speed too required.",
                author: "Mitesh W",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "Best phone i have had.",
                author: "Swetasri Pal",
            },
            {
                star: 1,
                title: "Waste of money!",
                description:
                    "#Worst# When we are calling to someone they couldn't able to hear our voice... Flipkart is not taking replacement also.. Very bad thing",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Horrible",
                description: "Don't buy this mobile it has speaker issue",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Terrible product",
                description:
                    "Don't buy this more problems charging connecting and disconnecting problem and mobile hang",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Utterly Disappointed",
                description: "My m2pro has yearspaker problem",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Not recommended at all",
                description: "miui is not good in poco mobile",
                author: "Flipkart Customer",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Nice phone ...blindly go for it",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Must buy!",
                description:
                    "Best phone and both it in exchange of old one..so price was also awesome...n features r too good",
                author: "Flipkart Customer",
            },
            {
                star: 5,
                title: "Worth every penny",
                description: "I m happy 😁😊",
                author: "Anita Patwal",
            },
            {
                star: 3,
                title: "Just okay",
                description: "It's good phone but battery performance is poor...",
                author: "Sanjay Singh",
            },
            {
                star: 4,
                title: "Value-for-money",
                description: "Good 🥳🥳🥳🥳",
                author: "SANTANU MALIK",
            },
            {
                star: 5,
                title: "Just wow!",
                description: "Good",
                author: "Flipkart Customer",
            },
            {
                star: 2,
                title: "Bad quality",
                description:
                    "I am reviewing it after 6 month of using, The worst phone I ever used, I bought it for gaming purpose but I quit to playing game and using it for general purpose but I feel a lot of hanging issue, sometimes work very slowly,",
                author: "Manoj Patel",
            },
            {
                star: 2,
                title: "Bad quality",
                description: "Feels like a Brick",
                author: "Ashutosh Tyagi",
            },
            {
                star: 3,
                title: "Decent product",
                description: "Ok product",
                author: "Momin Azharoddin",
            },
            {
                star: 3,
                title: "Just okay",
                description: "Normal but not awesome performance",
                author: "Saran mukesh Choudhary",
            },
            {
                star: 2,
                title: "Expected a better product",
                description: "Network quality is bad",
                author: "Flipkart Customer",
            },
            {
                star: 3,
                title: "Fair",
                description: "Good but tower problem and voice mic not clear",
                author: "Flipkart Customer",
            },
            {
                star: 1,
                title: "Worst experience ever!",
                description:
                    "Whenever i use earphone . This phone shows me some problem with mike . Why 😔 don't buy this phone . I replaced this phone . But in my new phone I'm facing again same problem with earphone .",
                author: "Flipkart Customer",
            },
        ],
    },
];

module.exports.reviews = reviews;
