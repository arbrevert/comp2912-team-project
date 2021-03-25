# progress

## Pending
* error handling
## Mar 25
* Completed reminder due date
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
