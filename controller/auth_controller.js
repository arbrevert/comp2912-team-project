const passport = require("passport");

let authController = {
  login: (req, res) => {
    res.render("auth/login");
  },

  register: (req, res) => {
    res.render("auth/register");
  },

  loginSubmit: (req, res) => {
    passport.
  },

  registerSubmit: (req, res) => {
    // implement
  },
};

module.exports = authController;
