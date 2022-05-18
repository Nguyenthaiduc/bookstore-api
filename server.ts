import express from 'express'

import App from './app'
import HelloWorldController from './resources/helloworld/helloworld.controller'
import dotenv from 'dotenv'
dotenv.config()

const port : number = process.env.PORT ? parseInt(process.env.PORT.toString()) : 3000;

const app = new App(
    [new HelloWorldController()],
    port
    );
app.listen();

