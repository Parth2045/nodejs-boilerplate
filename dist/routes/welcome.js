"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const welcomeController = require("../controllers/welcome");
const express = require("express");
const router = express.Router();
router.get('/', welcomeController.welcome);
exports.default = router;
