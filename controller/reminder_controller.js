const reminderModel = require("../models/reminder_model");
const userModel = require("../models/user_model");

const remindersController = {
  list: (req, res) => {
    console.log("reminderController list");
    const user = userModel.getUserById(req.user.id);
    const reminders = reminderModel.getRemindersByUserId(req.user.id);
    const friendsRemindersList = reminderModel.getFriendsRemindersList(req.user.id);
    res.render("reminder/index", { uname: user.uname, reminders: reminders, friendsRemindersList: friendsRemindersList });
  },

  new: (req, res) => {
    console.log("reminderController new");
    user = userModel.getUserById(req.user.id);
    res.render("reminder/create", { uname: user.uname });
  },

  listOne: (req, res) => {
    console.log("reminderController listOne");
    const user = userModel.getUserById(req.user.id);
    const reminder = reminderModel.getReminderByUserIdReminderId(req.user.id, req.params.id);
    if (reminder) {
      res.render("reminder/single-reminder", { uname: user.uname, reminderItem: reminder });
    } else {
      res.render("reminder/index", { uname: user.uname, reminders: reminders });
    }
  },

  create: (req, res) => {
    console.log("reminderController create");
    const user = userModel.getUserById(req.user.id);
    const reminder = {
      title: req.body.title,
      description: req.body.description,
      dueDate: req.body.dueDate,
    };
    reminderModel.addReminderToUserId(req.user.id, reminder);
    res.redirect("/reminder");
  },

  edit: (req, res) => {
    console.log("reminderController create");
    const user = userModel.getUserById(req.user.id);
    const reminder = reminderModel.getReminderByUserIdReminderId(req.user.id, req.params.id);
    res.render("reminder/edit", { uname: user.uname, reminderItem: reminder });
  },

  update: (req, res) => {
    console.log("reminderController update");
    const newReminder = {
      id: req.params.id,
      title: req.body.title,
      description: req.body.description,
      completed: (req.body.completed != 'false'),
      dueDate: req.body.dueDate,
      tags: req.body.tags.split(',').map(t => t.trim())
    };
    reminderModel.updateReminderByUserIdReminderId(req.user.id, req.params.id, newReminder);
    res.redirect("/reminder");
  },

  delete: (req, res) => {
    console.log("reminderController delete");
    reminderModel.deleteReminderByUserIdReminderId(req.user.id, req.params.id)
    res.redirect("/reminder");
  },
};

module.exports = remindersController;
