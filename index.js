import dotenv from 'dotenv';
import express from 'express';

const app = express(); // START USING EXPRESS
dotenv.config(); // MAKE ACCESSIBLE ENV VARIABLES

import startRoutes from './startup/routes.js';
startRoutes(app); // PROVIDE REFERENCE OF "APP" OBJECT IN ROUTE MODULE

const port = process.env.PORT; // ENV VARIABLE
const server = app.listen(port, () => console.info(`Server live at http://127.0.0.1:${port}`));

export default server; // START THE SERVER
