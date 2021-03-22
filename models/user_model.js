const database = require("../database")
const userModel = {
    validateLocalUser: (email, password) => {
        for (const id in database) {
            if (database[id].email == email && database[id].password == password) {
                return { id, uname: email };
            }
        }
        return null;
    }

}

module.exports = userModel;