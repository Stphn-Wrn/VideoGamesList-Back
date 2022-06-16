import express from 'express';
import routes from './Routes/routes.js'
import dataBase from './Config/db.config.js'
const app = express();

app.use(express.json());

app.use(routes)


dataBase.sync()
        .then((console.log("Connected to Database")))
        .catch(error => console.error(error))

app.listen(5000, () => console.log('Port 5000 connected'));