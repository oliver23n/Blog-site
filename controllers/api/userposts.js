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

router.put('/post/:id',async (req,res) => {
    try{
        const newPostData = await Post.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        
        res.status(200).json(newPostData);
    }catch(err){
        console.error(err);
    }
})

//delete post route
router.delete('/post/:id',async (req,res)=>{
    try{
        const postData = await Post.destroy({
            where:{
                id: req.params.id
            }
        });
        if (!postData) {
            res.status(404).json({ message: 'Post doesnt exist ' });
        } else {
            res.status(200).json(postData);
        }
    }catch(err){
        console.error(err);
    }
})



module.exports = router;