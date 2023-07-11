const router = require('express').Router();
const { User, Post } = require('../models');

// render all posts on homepage 
router.get('/', async (req,res) => {
    try{
        const dbPostData = await Post.findAll();
        const posts = dbPostData.map((post) => post.get({plain: true}));
        console.log(posts);
        res.render('home', {posts});
    }catch (err){
        console.error(err);
    }

});

router.get('/post/:id', async (req,res) => {
    try{
        const postData = await Post.findByPk(req.params.id, {
            include: [ 
                {
                    model : User,
                    attributes: [
                        'username'
                    ]
                }
            ]
        })
        const post = postData.get({plain: true});
        res.render('post',{
            post
        })
    }catch(err){
        console.error(err);
    }
})

module.exports = router;