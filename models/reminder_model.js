const database = require("../database");
const userModel = require("./user_model");

const reminderModel = {
    getRemindersByUserId: (id) => {
        user = database[id];
        if (user) {
            return user.reminders;
        }
        return null;
    },
    getReminderByUserIdReminderId: (uid, rid) => {
        reminders = reminderModel.getRemindersByUserId(uid);
        reminder = reminders.find((reminder) => {
            return reminder.id == rid
        });
        if (reminder) return reminder;
        return null;
    },
    addReminderToUserId: (id, reminder) => {
        reminders = reminderModel.getRemindersByUserId(id);
        //reminder.id = reminders.length + 1;
        reminder.id = Math.max(...(reminders.map(r => { return r.id }))) + 1;
        reminder.completed = false;
        reminders.push(reminder);
    },
    updateReminderByUserIdReminderId: (uid, rid, newReminder) => {
        reminders = reminderModel.getRemindersByUserId(uid);
        idx = reminders.findIndex(r => r.id == rid);
        reminders[idx] = newReminder;
    },
    deleteReminderByUserIdReminderId: (uid, rid) => {
        reminders = reminderModel.getRemindersByUserId(uid);
        idx = reminders.findIndex(r => r.id == rid);
        reminders.splice(idx, 1);
    },
    getFriendsRemindersList: (uid) => {
        friendsRemindersList = userModel.getFriendsById(uid).map((u) => {
            reminder = reminderModel.getRemindersByUserId(u.id);
            return { user: u, reminders: reminder };
        })
        return friendsRemindersList;
    },
    addSubtaskByUserIdReminderId: (uid, rid, newSubtask) => {
        try {
            if (newSubtask) {
                reminders = reminderModel.getRemindersByUserId(uid);
                idx = reminders.findIndex(r => r.id == rid);
                if (typeof (reminders[idx].subTasks) === 'undefined') {
                    reminders[idx].subTasks = [];
                }
                reminders[idx].subTasks.push(newSubtask);
            }
        } catch (error) {

        }
    },
}

module.exports = reminderModel;