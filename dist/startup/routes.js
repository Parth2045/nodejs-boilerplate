"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const welcome_1 = require("../routes/welcome");
function startRoutes(app) {
    app.use(express.json()); // MIDDLEWARE TO PARSE RESPONSE IN JSON
    // ROUTES
    app.use('/api/welcome', welcome_1.default);
}
exports.default = startRoutes;
;
