const express = require('express');
const app = express();
const path = require("path");
const fs = require("fs");
const router = express.Router();
require('dotenv').config()

// server
const api = require("./components/run/api");
const jsondb_demo = require("./components/run/json-server");


app.use(express.static(path.join(__dirname, 'public')));


