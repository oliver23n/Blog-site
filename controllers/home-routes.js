const router = require('express').Router();
const { User, Post } = require('../models');

// render all posts on homepage 
router.get('/', async (req,res) => {
    try{
        const dbPostData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        });
        const posts = dbPostData.map((post) => post.get({plain: true}));
        console.log(posts);
  
        res.render('home', { posts, loggedIn: true });
    }catch (err){
        console.error(err);
    }

});

router.get('/post/:id', async (req,res) => {
    // if(!req.session.loggedIn){
    //     redirect('/');
    //     return;
    // }
    try{
        const postData = await Post.findByPk(req.params.id, {
            include: [ 
                {
                    model : User,
                }
            ]
        })
        const post = postData.get({plain: true});
        console.log(post);
        res.render('post',{
            post, loggedIn: true
        })
    }catch(err){
        console.error(err);
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