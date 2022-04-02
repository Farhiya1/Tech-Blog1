// Dependencies
const path = require("path");
const express = require("express");
// Sets cookie and user authentification
const session = require("express-session");
const exphbs = require("express-handlebars");

// Creating an express application
const app = express();
const PORT = process.env.PORT || 3001;

// Connecting database to server
const sequelize = require("./config/connection.js");

// Authenticating database and connects to sessions
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  // Secret code between server and user
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// As soon as server is contacted, session is started.  Session generates a cookie.
app.use(session(sess));

