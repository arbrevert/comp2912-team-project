// auth routes

const authRouter=require("express").Router();
const authController = require("../controller/auth_controller");

authRouter.get("/register", authController.register);
authRouter.get("/login", authController.login);
authRouter.get("/logout", authController.logout);
authRouter.post("/register", authController.registerSubmit);
authRouter.post("/login", authController.loginSubmit);

module.exports = authRouter;