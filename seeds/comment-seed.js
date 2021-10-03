const { Commment } = require('../models');

const commentData = [
    {
        comment_text: 'I feel like this article was more geared toward a specific type of sport instead of.',
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: 'After reading this article I was able to increase my overall running performance and helped me train for my marathon',
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: 'I found these tips very insightful since I like to game occasionly or whenever I have time to game. Staying healthy is a very important thing to a gamer',
        user_id: 3,
        post_id: 3
    },
    {
        comment_text: 'This article has improved my skills as a speedreader and I love to read a lot too so I can enjoy a hobby a little more',
        user_id: 4,
        post_id: 4
    },
    {
        comment_text: 'My tennis game has actually improved a lot since reading this article and I have been able to win a few more games. This aticle might need to be adjusted for tennis amaturs in the future.',
        user_id: 5,
        post_id: 5
    },
];

const seedCommnets = () => Comment.bulkCreate(commentData);

module.exports = seedCommnets;