const sequelize = require('../config/connection');
const {Post} = require('../models');

const postData = [
{
    title:" First post",
    text : "this is first post",

},
{
    title: " Second post",
    text: "this is second post",
}

];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;