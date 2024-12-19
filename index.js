import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import routes from './routes/index.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

app.use(cors());
app.use(express.json());
app.use('/api', routes);

mongoose.connect(MONGO_URI);
const db = mongoose.connection;
db.on("error", console.error.bind(console,"MongoDB connection error:"));


app.get('/', (request, response) => {
    response.send('Hello')

});


app.listen(PORT, () => {
console.log(`Server is runnning at port: ${PORT}`)
})