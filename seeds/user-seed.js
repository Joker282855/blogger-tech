const { User } = require('../models');

const userData = [
    {
        username: 'HappyBun23',
        email: 'WeBounce#@gmail.com',
        password: 'fluffy45#'
    },
    {
        username: 'starwars12',
        email: 'Rouge45plan',
        password: 'Deathplan67&'
    },
    {
        username: 'weLove27^',
        email: 'Happyboy@gmail.com',
        password: 'Valentine43!'
    },
    {
        username: 'Ifeelcool32',
        email: 'golfswing34@gmail.com',
        password: 'Holiday34@'
    },
    {
        username: 'Holypets34',
        email: 'gotfaires35!@gmail.com',
        password: 'Tailingit65!'
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;

