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

