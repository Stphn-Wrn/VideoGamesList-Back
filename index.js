import express from 'express';
import routes from './app/Routes/routes.js';
import dataBase from './app/Config/db.config.js';

// import jwt from 'jsonwebtoken';
import 'dotenv/config'


const app = express();

app.use(express.json());

app.use(routes)


dataBase.sync()
        .then((console.log("Connected to Database")))
        .catch(error => console.error(error))

app.listen(4000, () => console.log('Port 4000 connected'));


