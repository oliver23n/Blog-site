const router = require('express').Router();
const userRoutes = require('./user');
const userPostsRoutes =require('./userposts');

router.use('/dashboard',userPostsRoutes);
router.use('/users', userRoutes);

module.exports = router;
