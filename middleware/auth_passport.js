const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const userModel = require("../models/user_model");

const localLogin = new LocalStrategy(
    {
        usernameField: "email",
        passwordField: "password",
    },
    (email, password, done) => {
        console.log("local strategy")
        const user = userModel.validateLocalUser(email, password);
        console.log(user)
        return user
            ? done(null, user)
            : done(null, false, {
                message: "You login details are not valid. Please try again",
            })
    }
)

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    let user = userController.getUserById(id);
    if (user) {
        done(null, user);
    } else {
        done({ message: "User not found" }, null);
    }
});

console.log("auth_passport")

module.exports = passport.use(localLogin);