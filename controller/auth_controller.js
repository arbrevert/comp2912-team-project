const passport = require("../middleware/auth_passport");

let authController = {
  login: (req, res) => {
    res.render("auth/login");
  },

  register: (req, res) => {
    res.render("auth/register");
  },

  loginSubmit: (req, res) => {
    console.log("auth");
    (passport.authenticate("local", {
      //failureFlash:true,
      //failureRedirect: "/auth/login",
      failureRedirect: "/",
      successRedirect:"/reminder",
    }))(req,res)
  },

  registerSubmit: (req, res) => {
    // implement
  },
};

module.exports = authController;
