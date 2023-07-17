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

router.get('/new', (req,res) => {
    res.render('createpost', { loggedIn: req.session.loggedIn, loggedUser: req.session.userID });
})
module.exports = router;