// let Database = {
//     cindy: {
//         reminders: [{id: 1, title: "abc", description: "abcabc", completed: false}]
//     },
//     alex: {
//         reminders: []
//     } 
// }

let Database = {
    cindy: {
        email:"cindy@gmail.com", src:"local", password:"cindy",
        reminders: [{id: 1, title: "abc", description: "abcabc", completed: false}]
    },
    2: {
        email:"alex@gmail.com", src:"local",
        reminders: []
    } 
}

module.exports = Database;