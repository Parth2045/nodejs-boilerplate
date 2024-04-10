import * as express from "express";
const { request, response } = express;

const welcome = async (request: any, response: any) => {
    const welcomeText = { welcomeText: "Welcome to the NodeJS boilderplate with ExpressJS." };
    response.send(welcomeText);
};

export { welcome };
