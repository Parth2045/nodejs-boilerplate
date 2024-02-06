import express from "express";
const { request, response } = express;

const welcome = async ( request, response ) => {
    const welcomeText = { welcomeText: "Welcome to the NodeJS boilderplate with ExpressJS." };
    response.send(welcomeText);
};

export { welcome };
