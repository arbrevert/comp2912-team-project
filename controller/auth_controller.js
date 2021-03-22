const passport = require("../middleware/auth_passport");

let authController = {
  login: (req, res) => {
    res.render("auth/login");
  },

  register: (req, res) => {
    res.render("auth/register");
  },

  loginSubmit: (req, res) => {
    console.log("login summit")
    console.log(req);
    passport.authenticate("local", {
      failureFlash:true,
      //failureRedirect: "/auth/login",
      successRedirect:"/reminder",
    })
  },

  registerSubmit: (req, res) => {
    // implement
  },
};

module.exports = authController;
