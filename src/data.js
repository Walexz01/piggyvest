// images
const build1 = require('./piggy-image/home_page_images/piggy.png')
const build2 = require('./piggy-image/home_page_images/safelock.png')
const build3 = require('./piggy-image/home_page_images/target.png')
const build4 = require('./piggy-image/home_page_images/flex.png')

export const NavLinks=[
    {
        id:1,
        name:"Save",
        path:"save",
        modal:[
            {
            name: 'PiggyBank',
            link:'/piggybank',
            image:build1
            },
            {
            name: 'Safelock',
            link:'/safelock',
            image:build2
            },
            {
            name: 'Target Savings',
            link:'/targets',
            image:build3
            },
            {
            name: 'Flex Naira',
            link:'/flex-naira',
            image:build4
            },
    ]
    },
    {
        id:2,
        name:"Invest",
        path:"invest"
    },
    {
        id:3,
        name:"Stories",
        path:"stories"
    },
    {
        id:4,
        name:"FAQs",
        path:"faqs"
    },
    {
        id:5,
        name:"Blog",
        path:"blog"
    }
]



export const Buildsavingsdata= [
    {
        image: build1,
        title:"Automated SavingsAutomated Savings",
        desc:"Build a dedicated savings faster on your terms automatically or manually.",
        link:"Piggybank"
    },
    {
        image:build2,
        title:"Fixed Savings",
        desc:"Lock money away for a fixed duration with no access to it until maturity. It’s like having a custom fixed deposit.",
        link:"Safelock"
    },
    {
        image:build3,
        title:"Goal-oriented Savings",
        desc:"Reach all your savings goals faster. Save towards multiple goals on your own or with a group.",
        link:"Target Savings"
    },
    {
        image:build4,
        title:"Flexible Savings",
        desc:"Save, transfer, withdraw, manage and organise your money for free at any time.",
        link:"Flex Naira"
    }
    
]


// tweets 
const tweet1 = require('./piggy-image/home_page_images/tweet1.jpg')
const tweet2 = require('./piggy-image/home_page_images/tweet2.jpg')
const tweet3 = require('./piggy-image/home_page_images/tweet3.jpg')
const tweet4 = require('./piggy-image/home_page_images/tweet4.jpg')

export const Tweetdata= [
    {
        image: tweet1,
        date__time:"Thursday, 27th of October 2022 by 13:03 PM",
        name: "Rachael O",
        message:"My name is Rachael Joseph and I am here to testify that Piggyvest has helped me a lot. I had to spread the good news to my friends and tell them about the app and behold they are also using it. Thank you so much Pggyvest for saving me cause I am the type of person that spends lavishly. Thank you once again Piggyvest 💙",
    },
    {
        image:tweet2,
        date__time:"Thursday, 6th of October 2022 by 11:42 AM",
        name: "Tobenna A",
        message:"Thanks to piggyvest I've saved enough money to start up a really large business",
    },
    {
        image:tweet3,
        date__time:" Wednesday, 5th of October 2022 by 03:08 AM",
        name: "Micheal F",
        message:"I just joined tho and I believe piggyVest won't disappoint me 😊❤️",
    },
    {
        image:tweet4,
        date__time:"Monday, 24th of October 2022 by 23:27 PM",
        name: "Uchendu C",
        message:"Whenever money got into my hands, I never knew how I squandered it so fast without even saving a little. I got to hear about Piggy vest and it's various services and right now, I am totally enjoying this journey.",
    }
    
]

export const productsLink = [
    {
        name: 'Piggybank',
        link: '/piggybank'
    },
    {
        name: 'Invest',
        link: '/invest'
    },
    {
        name: 'Safelock',
        link: '/safelock'
    },
    {
        name: 'Target Savings',
        link: '/targets'
    },
    {
        name: 'Flex Naira',
        link: '/flex-naira'
    },
]

export const companyLink = [
    {
        name: 'About',
        link: '/about'
    },
    {
        name: 'FAQs',
        link: '/faq'
    },
    {
        name: 'Blog',
        link: '/blog'
    }
]
export const legalLink = [
    {
        name: 'Terms',
        link: '/terms'
    },
    {
        name: 'Privacy',
        link: '/privacy'
    },
    {
        name: 'Security',
        link: '/security'
    }
]
