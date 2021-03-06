import express, { Errback } from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes';
import cron from 'node-cron';

import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(cors());

app.use(express.json({
    limit: '50mb'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false,
    limit: '50mb'
}));

app.use(helmet());
app.use(morgan("dev"));
app.use('/', router);


const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`Server is connected to port ${PORT}`)
});

const uri = process.env.MONGODB_URI;

mongoose.connect(uri as string)
    .then(() =>
        console.log("Database is connected!"))

    .catch((err) => console.error(err))


//cron job for every 20 minutes
var task = cron.schedule('*/20 * * * *', () => {
  var request = require('request');
  var options = {
    'method': 'GET',
    'url': 'https://git.heroku.com/adg-rec-task.git'
  };
  request(options, function (error: string | undefined, response: { body: any; }) {
    if (error) throw new Error(error);
    console.log(response.body);
  });

});

task.start();

