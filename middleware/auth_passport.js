const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const userModel = require("../models/user_model");

const localLogin = new LocalStrategy(
    {
        usernameField: "email",
        passwordField: "password",
    },
    (email, password, done) => {
        const user = userModel.validateLocalUser(email, password);
        return user
            ? done(null, user)
            : done(null, false, {
                message: "You login details are not valid. Please try again",
            })
    }
)

passport.serializeUser(function (user, done) {
    //done(null, user.id)s
    done(null, 'cindy');
});

passport.deserializeUser(function (id, done) {
    // let user = userController.getUserById(id);
    // if (user) {
    //     done(null, user);
    // } else {
    //     done({ message: "User not found" }, null);
    // }
    done(null, {id:'cindy'})
});

module.exports = passport.use(localLogin);