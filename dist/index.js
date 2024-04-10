"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const express = require("express");
const app = express(); // START USING EXPRESS
dotenv.config(); // MAKE ACCESSIBLE ENV VARIABLES
const routes_js_1 = require("./startup/routes.js");
(0, routes_js_1.default)(app); // PROVIDE REFERENCE OF "APP" OBJECT IN ROUTE MODULE
const port = process.env.PORT; // ENV VARIABLE
const server = app.listen(port, () => console.info(`Server live at http://127.0.0.1:${port}`));
exports.default = server; // START THE SERVER
