// reminder routes

const reminderRouter = require("express").Router();
const reminderController = require("../controller/reminder_controller");
const { isAuthenticatedUser } = require("../middleware/auth_check");

reminderRouter.use(isAuthenticatedUser({ failureRedirect: "/auth/login", failureMessage: "login required" }));

reminderRouter.get("/", reminderController.list);

reminderRouter.get("/new", reminderController.new);

reminderRouter.get("/:id", reminderController.listOne);

reminderRouter.get("/:id/edit", reminderController.edit);

reminderRouter.post("/", reminderController.create);

reminderRouter.post("/update/:id", reminderController.update);

reminderRouter.post("/delete/:id", reminderController.delete);

reminderRouter.post("/addSubtask/:id", reminderController.addSubtask);

module.exports = reminderRouter;