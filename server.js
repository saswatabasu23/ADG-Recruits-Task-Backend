import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import mongoose from 'mongoose';

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

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`Server is connected to port ${PORT}`)
});

const uri = process.env.MONGODB_URI;

mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() =>
        console.log("Database is connected!"))

    .catch((err) => console.error(err))


//error handling
app.use((err, req, res, next) => {
    console.log(err);
    if (typeof err == 'string') {
        return res.status(400).send({
            message: err,
        });
    }
    return res.status(400).send({
        message: err.message,
    });
});