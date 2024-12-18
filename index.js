import express from 'express';
import moviesRoutes from './routes/moviesRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (request, response) => {
    response.send('Hello')

});


app.use('/api/movies', moviesRoutes);


app.listen(PORT, () => {
console.log('Server is runnning at port:', PORT)
})