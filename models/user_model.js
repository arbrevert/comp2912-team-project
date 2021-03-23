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
    getUserById: (id) => {
        u = database[id];
        if (u) {
            return {
                id: id,
                uname: (u.email || u.githubName)
            }
        }
        return null;
    }
}

module.exports = userModel;