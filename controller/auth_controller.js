const passport = require("../middleware/auth_passport");

let authController = {
  login: (req, res) => {
    res.render("auth/login", {error: req.flash('error')});
  },

  register: (req, res) => {
    console.log(req.flash('error'));
    res.render("auth/register");
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
