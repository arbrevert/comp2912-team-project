let database = require("../database");

let remindersController = {
  list: (req, res) => {
    console.log("reminderController list");
    res.render("reminder/index", { reminders: database.cindy.reminders });
  },

  new: (req, res) => {
    console.log("reminderController new");
    res.render("reminder/create");
  },

  listOne: (req, res) => {
    console.log("reminderController listOne");
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });
    if (searchResult != undefined) {
      res.render("reminder/single-reminder", { reminderItem: searchResult });
    } else {
      res.render("reminder/index", { uname: req.user.uname, reminders: database.cindy.reminders });
    }
  },

  create: (req, res) => {
    console.log("reminderController create");
    let reminder = {
      id: database.cindy.reminders.length + 1,
      title: req.body.title,
      description: req.body.description,
      completed: false,
    };
    database.cindy.reminders.push(reminder);
    res.redirect("/reminders");
  },

  edit: (req, res) => {
    console.log("reminderController create");
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });
    res.render("reminder/edit", { reminderItem: searchResult });
  },

  update: (req, res) => {
    console.log("reminderController update");
    // implement this code
  },

  delete: (req, res) => {
    console.log("reminderController delete");
    // Implement this code
  },
};

module.exports = remindersController;
