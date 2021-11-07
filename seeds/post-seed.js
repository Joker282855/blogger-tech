const { Post } = require('../models');

const postData = [
    {
        title: 'Sport Site',
        text: 'This is a website for any sport lover that wants to increase their love of sports. This site also has other information a person might find useful if they want to know more about a sport',
        post_url: 'https://creatitive.com',
        user_id: 1
    },
    {
        title: 'Running Tips',
        text: 'This is a webiste that gives a runner tips on how to increase their overall perfomance. It contains tips on how to increase a persons stamina if they are training for a marathong',
        post_url: 'https://www.rei.com',
        user_id: 2
    },
    {
        title: 'Healthy Gaming',
        text: 'This is a website for gamers with tips to help them stay healthy even though they like to occasionally game from time to time.',
        post_url: 'https://hundredlifedesign.com',
        user_id: 3
    },
    {
        title: 'Speed Reading',
        text: 'This is a website for those that want to be able to speed read efficiently and retain some of the information that they try to glean from speed reading',
        post_url: 'https://www.mindtools.com',
        user_id: 4
    },
    {
        title: 'Tennis Tips',
        text: 'This article talks about tips a tennis professional play can use to increase their perfomrance on the court',
        post_url: 'https://www.hss.edu',
        user_id: 5
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;

