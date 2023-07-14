const sequelize = require('../config/connection');
const {Post} = require('../models');

const postData = [
{
    title:" First post",
    text : "this is first post",
    user_id: 1

},
{
    title: " Second post",
    text: "this is second post",
    user_id: 2
}

];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;