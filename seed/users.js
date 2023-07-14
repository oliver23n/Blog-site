const sequelize = require('../config/connection');
const { User } = require('../models');


const usersData = [
    {
        username: "toni",
        email: "tonisoprano@gmail.com",
        password: "pass1234"

    },
    {
        username: "nikola",
        email: "nikolatesla@gmail.com",
        password: "pass1234" 
    }
];

const seedUsers = () => User.bulkCreate(usersData);

module.exports = seedUsers;