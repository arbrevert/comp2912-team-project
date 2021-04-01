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
    getUserByEmail: (email) => {
        for (const id in database) {
            if (database[id].email === email) {
                return { id, uname: email };
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
    },
    addFriend: (uid1, friendEmail) => {
        const uid2 = userModel.getUserByEmail(friendEmail).id;
        if (uid1 && uid2) {
            if (typeof(database[uid1].friends) === 'undefined') {
                database[uid1].friends = [];
            }
            if (typeof(database[uid2].friends) === 'undefined') {
                database[uid2].friends = [];
            }
            const idx1 = database[uid1].friends.indexOf(uid2);
            const idx2 = database[uid2].friends.indexOf(uid1);
            if (idx1 === -1) {
                database[uid1].friends.push(uid2);
            }
            if (idx2 === -1) {
                database[uid2].friends.push(uid1);
            }
        }
    },
    removeFriend: (uid1, friendEmail) => {
        const uid2 = userModel.getUserByEmail(friendEmail).id;
        if (uid1 && uid2) {
            if (typeof(database[uid1].friends) === 'undefined') {
                database[uid1].friends = [];
            }
            const idx1 = database[uid1].friends.indexOf(uid2);
            if (typeof(database[uid2].friends) === 'undefined') {
                database[uid2].friends = [];
            }
            const idx2 = database[uid2].friends.indexOf(uid1);
            if (idx1 !== -1) {
                database[uid1].friends.splice(idx1, 1);
            }
            if (idx2 !== -1) {
                database[uid2].friends.splice(idx2, 1);
            }
        }

    },
}

module.exports = userModel;