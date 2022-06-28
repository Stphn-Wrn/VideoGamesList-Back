import express from 'express';
import router from './app/Routes/routes.js';
import connection from './app/Config/db.config.js';
import cors from 'cors';
import 'dotenv/config';
 
const app = express();

app.use(express.json());
app.use(cors());
app.options('*', cors());
app.use(router);

        connection.connect(function(err) {
                if (err) {
                  console.error('error connecting: ' + err.stack);
                  return;
                }
               
                console.log('MySQL connected');
              });
        

app.listen(process.env.PORT, () => console.log('Port '+ process.env.PORT +' connected'));


