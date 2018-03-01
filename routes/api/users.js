//example of creating multiple variables at once.
const mongoose = require("mongoose"),
    router = require("express").Router(),
    passport = require("passport"),
    User = mongoose.model("User");

//User Login
router.post("/users/login", function (req, res, next) {
    console.log(req.body);
    if (!req.body.user.email) {
        return res.status(422).json({ errors: { email: "can't be blank" } });
    }

    if (!req.body.user.password) {
        return res.status(422).json({ errors: { password: "can't be blank" } });
    }

    passport.authenticate("local", { session: false }, function (err, user, info) {
        if (err) {
            return next(err);
        }

        if (user) {
            user.token = user.generateJWT();
            return res.json({ user: user.toAuthJSON() });
        } else {
            return res.status(422).json(info);
        }
    })(req, res, next);
});

//User Sign up
router.post("/users", function (req, res, next) {
    var user = new User(); //---> create a new instance of our User model. Remember the `new` keyword?

    user.username = req.body.user.username; //---> get username
    user.email = req.body.user.email; //---> get email
    user.password = req.body.user.password; //---> DON'T SAVE PASSWORD TO DB!!!!!

    user
        .save() //---> save new user to db
        .then(function () {
            return res.json({ user: user.toAuthJSON() });
        })
        .catch(next);
});

module.exports = router;