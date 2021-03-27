require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const path = require("path");
const ejsLayouts = require("express-ejs-layouts");
const session=require("express-session");
const flash=require("connect-flash");
const passport=require("./middleware/auth_passport");
const reminderRouter = require("./routes/reminderRoute")
const authRouter = require("./routes/authRoute")

const port=process.env.PORT || 8000;
const app = express();
app.use(morgan(process.env.MORGAN_FORMAT || "tiny"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(ejsLayouts);
app.set("view engine", "ejs");
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

// Reminder
app.use("/reminder", reminderRouter);

// Auth
app.use("/auth", authRouter);

// start
app.listen(port, function () {
  console.log(
    `Server running. Visit: bcit.compu-ters.ca:${port} in your browser 🚀`
  );
});
