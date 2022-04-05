import express, { Errback } from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import mongoose from 'mongoose';
import router from './routes';

import dotenv from 'dotenv';
dotenv.config();

const app = express();

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
app.use('router', router);


const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`Server is connected to port ${PORT}`)
});

const uri = process.env.MONGODB_URI;

mongoose.connect(uri as string)
    .then(() =>
        console.log("Database is connected!"))

    .catch((err) => console.error(err))