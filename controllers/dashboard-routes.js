const router = require('express').Router();
const { User, Post } = require('../models');
const { removeAttribute } = require('../models/User');

//check if its logged in middleware
router.get('/', async(req,res) => {
    try{
        const postData = await Post.findAll({
          
            where: {
                
                user_id: req.session.userID
                
            },
        });
        const userposts = postData.map( (post) => post.get({plain: true}));

        console.log(userposts);

        res.render('dashboard', { userposts, loggedIn: req.session.loggedIn });
    }catch(err){
        console.error(err);
    }
});

//render editpost page
router.get('/post/:id', async (req,res)=>{
    //get all the data from the specific post
    //render data 
    try{
        const postData = await Post.findByPk(req.params.id);
        const selectedPost = postData.get({plain: true});
        console.log(selectedPost)
        res.render('editpost',{ selectedPost, loggedIn : req.session.loggedIn});
    }catch(err){
        console.error(err);
    }
})


//render createpost page
router.get('/new', (req,res) => {
    res.render('createpost', { loggedIn: req.session.loggedIn, loggedUser: req.session.userID });
})
module.exports = router;