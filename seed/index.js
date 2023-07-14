const sequelize = require('../config/connection');
const seedPosts = require('./posts');
const seedUsers = require('./users');

const seedAll = async () => {
    await sequelize.sync({force: true});

    await seedUsers();
    await seedPosts();
}

seedAll();