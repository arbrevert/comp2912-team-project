const passport = require("../middleware/auth_passport");

let authController = {
  login: (req, res) => {
    res.render("auth/login", {error: req.flash('error'), navbarIdx: 2});
  },

  register: (req, res) => {
    console.log(req.flash('error'));
    res.render("auth/register", {error: req.flash('error'), navbarIdx: 2});
  },

  loginSubmit: (req, res) => {
    (passport.authenticate("local", {
      failureFlash:true,
      failureRedirect: "/auth/login",
      successRedirect:"/reminder",
    }))(req,res)
  },

  registerSubmit: (req, res) => {
    // implement
  },
};

module.exports = authController;
