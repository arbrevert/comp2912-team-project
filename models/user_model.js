const database = require("../database")
const userModel = {
    validateLocalUser: (email, password) => {
        for (const id in database) {
            if (database[id].email == email && database[id].password == password) {
                return { id, uname: email };
            }
        }
        return null;
    },
    addLocaluser: (email, password) => {
        for (const id in database) {
            if (database[id].email === email) {
                return "user already exists";
            }
        }
        database[Object.keys(database).length + 1] = {
            email: email, src: "local", password: password,
            reminders: [
            ],
            friends: [],
        }
        console.log(database)
    },
    getUserById: (id) => {
        user = database[id];
        if (user) {
            return {
                id: id,
                uname: (user.email || user.githubName)
            }
        }
        return null;
    },
    getFriendsById: (id) => {
        user = database[id];
        if (typeof (user.friends) !== 'undefined' && Array.isArray(user.friends)) {
            return user.friends.map(userModel.getUserById);
        }
        return [];
    }
}

module.exports = userModel;