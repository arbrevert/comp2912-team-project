const passport = require("../middleware/auth_passport");
const userModel = require("../models/user_model");

const authController = {
  login: (req, res) => {
    res.render("auth/login", { error: req.flash('error'), navbarIdx: 2 });
  },
  logout: (req, res) => {
    req.logout();
    res.redirect("/");
  },

  register: (req, res) => {
    res.render("auth/register", { error: req.flash('error'), navbarIdx: 2, email: req.query.email });
  },

  loginSubmit: (req, res) => {
    (passport.authenticate("local", {
      failureFlash: true,
      failureRedirect: "/auth/login",
      successRedirect: "/reminder",
    }))(req, res)
  },

  registerSubmit: (req, res) => {
    if (req.body.password === req.body.passwordConfirmation) {
      err = userModel.addLocaluser(req.body.email, req.body.password);
      if (err) {
        req.flash('error', err);
        res.redirect("/auth/register");
      } else {
        authController.loginSubmit(req, res);

      }
    } else {
      req.flash('error', 'passwords did not match!');
      res.render("auth/register", { error: req.flash('error'), navbarIdx: 2, email: req.body.email });
    }
  },
  manageFriendship: (req, res) => {
    const action = req.body.action;
    const friendEmail = req.body.friendEmail;
    try {
      if (friendEmail) {
        switch (action) {
          case "add":
            userModel.addFriend(req.user.id, friendEmail);
            break;
          case "remove":
            userModel.removeFriend(req.user.id, friendEmail);
          default:
            break;
        }
      }
    } catch (error) {
    }
    res.redirect("/reminder/")
  },

};

module.exports = authController;
