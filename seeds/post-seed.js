const { Post } = require('../models');

const postData = [
    {
        title: 'Sport Site',
        text: 'This is a website for any sport lover that wants to increase their love of sports. This site also has other information a person might find useful if they want to know more about a sport',
        post_url: 'https://creatitive.com/sports-marketing/athlete-branding/athlete-website/?utm_term=sports%20websites&utm_campaign=Website+traffic-Search-1&utm_source=adwords&utm_medium=ppc&hsa_acc=1657865507&hsa_cam=10878079878&hsa_grp=107975904380&hsa_ad=545685311172&hsa_src=g&hsa_tgt=kwd-299865234208&hsa_kw=sports%20websites&hsa_mt=p&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAjwhuCKBhADEiwA1HegOZTuW4ID38UBvKGNnZ3IXj-mO5CsJaNFMnv1oo7GS-xUo5u1fPApihoCKMEQAvD_BwE',
        user_id: 1
    },
    {
        title: 'Running Tips',
        text: 'This is a webiste that gives a runner tips on how to increase their overall perfomance. It contains tips on how to increase a persons stamina if they are training for a marathong',
        post_url: 'https://www.rei.com/learn/expert-advice/training-for-your-first-marathon.html#:~:text=Most%20marathon%20training%20plans%20range%20from%2012%20to,runs%20should%20be%20done%20at%20a%20relaxed%20pace.',
        user_id: 2
    },
    {
        title: 'Healthy Gaming',
        text: 'This is a website for gamers with tips to helpl them stay healthy even though they like to occasionally game from time to time.',
        post_url: 'https://hundredlifedesign.com/the-healthy-way-to-play-video-games/',
        user_id: 3
    },
    {
        title: 'Speed Reading',
        text: 'This is a website for those that want to be able to speed read efficiently and retain some of the information that they try to glean from speed reading',
        post_url: 'https://pathtoreading.com/early-childhood-parenting-institute-ecpi-2/?utm_source=google&utm_medium=cpc&utm_campaign=search_ads&gclid=CjwKCAjwhuCKBhADEiwA1HegOYpw-BFwKVRctdqT31UHqxe6oapYPwbVX1REuFpcWgLgcCPIWJj5pRoCIEEQAvD_BwE',
        user_id: 4
    },
    {
        title: 'Tennis Tips',
        text: 'This article talks about tips a tennis professional play can use to increase their perfomrance on the court',
        post_url: 'https://www.hss.edu/conditions_tips-tennis-optimizing-performance-health.asp',
        user_id: 5
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;

