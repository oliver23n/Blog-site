const router = require('express').Router();
const userRoutes = require('./user');
const userPostsRoutes =require('./userposts');
const commentRoutes = require('./comments');

router.use('/dashboard',userPostsRoutes);
router.use('/users', userRoutes);
router.use('/comment',commentRoutes);

module.exports = router;
