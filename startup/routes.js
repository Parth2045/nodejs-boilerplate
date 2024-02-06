import express from 'express';
import welcome from '../routes/welcome.js';

export default function startRoutes (app) {
    app.use(express.json()); // MIDDLEWARE TO PARSE RESPONSE IN JSON

    // ROUTES
    app.use('/api/welcome', welcome);
};
