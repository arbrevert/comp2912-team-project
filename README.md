# comp2912-team-project

## Links
* Deployment: https://comp2912-reminder.herokuapp.com/
* Trello board \[Jason\]: https://trello.com/b/i2tUrcdA
* Change log/progress journal \[Jason\]: https://github.com/arbrevert/comp2912-team-project/blob/main/Changelog.MD
* Breakdown \[Terry\]: https://github.com/arbrevert/comp2912-team-project/blob/main/breakdownOfWork.MD

## .env template
```
# server name and app port
SERVERNAME=localhost
PORT=8000
# morgan format combined|common|dev|short|tiny
MORGAN_FORMAT=tiny
```

## notes
* new registered users do not need to login again
* user uniq identifier is id, it is not necessarily a number (we will keep 'cindy')
* use connect-flash message to show errors
* user_model handles user data, reminder_model handles reminder data
* show user name on navigation bar
* show reminders of friends on 'Reminder List' page
* show number of subtasks on list page, details in list one page
* Add a user as friend on list page
* Add subtask on list one page