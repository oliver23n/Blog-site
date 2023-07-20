const router = require('express').Router();
const { User } = require('../../models');

// CREATE new user
router.post('/signup', async (req, res) => {
    try {
        const dbUserData = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });


        req.session.save(() => {
            req.session.userID = dbUserData.id;
            req.session.loggedIn = true;
            req.session.username = dbUserData.username;
            console.log(req.session.loggedIn, req.session.username, req.session.userID)
            res.status(200).json(dbUserData);

        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const dbUserData = await User.findOne({
            where: {
                email: req.body.email,
            },
        });
        console.log(dbUserData);

        if (!dbUserData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password. Please try again!' });
            return;
        }

        const validPassword = await dbUserData.checkPass(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password. Please try again!' });
            return;
        }

        req.session.save(() => {

            req.session.loggedIn = true;
            //get the username and id
            req.session.username = dbUserData.username;
            req.session.userID = dbUserData.id;
            console.log(req.session.loggedIn, req.session.username, req.session.userID)
            res
                .status(200)
                .json({ user: dbUserData, message: 'You are now logged in!' });
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Logout
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(200).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;
