# progress

## Mar 31
* 

## Mar 27
* Completed tags add/edit/delete
* Deployed to Heroku
* Changed SERVERNAME to be configurable in env file
* Made the following changes. Thanks *Terry*
  * Replaced single letter variable names
  * Removed debug lines
  * Added password confirmation on registration page
## Mar 26
* Fixed the reminder id issue. Thanks *Terry*
* Display friends' reminders on the reminder list page, will not show tags and subtasks
* Display tags (list page, list one page)
* Display subtasks (summary on list page, details on list one page)
* Completed user registration
* Completed user logout
## Mar 25
* Completed reminder due date
* Made the following changes. Thanks *Terry*
  * change some `!=` to `!==` in ejs
  * show different navbar if not logged in
  * show welcome message in 2 lines instead of 1 line
## Mar 24
* Added reminder_module
* Authenticated users only accesses their own reminders (reminder_module)
* Refactored reminder_controller (uses reminder_module)
* Implemented 'edit'
* Implemented 'delete'
## Mar 23
* Added "Welcome user name" message
* Fixed `app.get("/reminder", reminderRouter)` => `app.use("/reminder", reminderRouter)`. Thanks *Terry*
* Fixed typo `Welcom` => `Welcome`. Thanks *Terry*


## Mar 22
* Implemented user_module
* Authenticated users have access to /reminder, otherwise redirect to login page with error message


## Mar 21
* grouped routers into reminder and auth
* auth
  * changed in-memory Database format
  * completed local login

## Mar 20
* add npm script start:dev
* add dotenv, morgan, express-session, connect-flash, passport, passport-local
