const router = require('express').Router();
const { Post } = require('../../models');

//  api/dashboard/
//create post post route
router.post('/new',async (req,res)=>{
    try{
        const userPost = await Post.create({
            title: req.body.title,
            text: req.body.content,
            user_id: req.session.userID
        });
       
        res.status(200).json(userPost);
    }catch(err){
        console.error(err);
    }
} );
//edit post route


module.exports = router;