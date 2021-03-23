# progress

## Mar 22
* Authenticated users have access to /reminder, otherwise redirect to login page with error message
* Authenticated users only accesses their own reminders
## Mar 21
* grouped routers into reminder and auth
* auth
  * changed in-memory Database format
  * completed local login

## Mar 20
* add npm script start:dev
* add dotenv, morgan, express-session, connect-flash, passport, passport-local