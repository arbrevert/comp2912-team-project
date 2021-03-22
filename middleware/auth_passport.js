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
    done(null, user.id)
});

passport.deserializeUser(function (id, done) {
    let user = userModel.getUserById(id);
     if (user) {
         done(null, user);
     } else {
         done({ message: "User not found" }, null);
     }
});

module.exports = passport.use(localLogin);