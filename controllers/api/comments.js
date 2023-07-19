const router = require('express').Router();
const { Comment } = require('../../models');

//  /api/comment
//post route for add comment
router.post('/', async(req,res)=>{
    try{
        const newComment = await Comment.create({
            comment_text : req.body.comment,
            post_id : req.body.id,
            posted_by : req.session.username
        })
        console.log(newComment);
        res.status(200).json(newComment);
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;