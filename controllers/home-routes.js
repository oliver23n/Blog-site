const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const authentication = require('../utils/auth');

// render all posts on homepage 
router.get('/', async (req, res) => {
    try {
        const dbPostData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        });
        const posts = dbPostData.map((post) => post.get({ plain: true }));

        res.render('home', { posts, loggedIn: req.session.loggedIn });
    } catch (err) {
        res.status(500).json(err);
    }

});
//need authentication
router.get('/post/:id', authentication, async (req, res) => {

    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                },
                {
                    model: Comment
                }
            ]
        })
        const post = postData.get({ plain: true });
        res.render('post', {
            post, loggedIn: req.session.loggedIn
        })
    } catch (err) {
        res.status(500).json(err);
    }
})
//login route
router.get('/login', (req, res) => {

    res.render('login');
});
//signup route
router.get('/signup', (req, res) => {

    res.render('signup');
});


module.exports = router;