// reminder routes

const reminderRouter = require("express").Router();
const reminderController = require("../controller/reminder_controller");


reminderRouter.get("/", reminderController.list);

reminderRouter.get("/new", reminderController.new);

reminderRouter.get("/:id", reminderController.listOne);

reminderRouter.get("/:id/edit", reminderController.edit);

reminderRouter.post("/", reminderController.create);

// Implement this yourself
reminderRouter.post("/update/:id", reminderController.update);

// Implement this yourself
reminderRouter.post("/delete/:id", reminderController.delete);

module.exports = reminderRouter; 