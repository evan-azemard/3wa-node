import express, { request, response } from 'express';

const app = express();



app.get('/', (request, response) => {
    response.send('Hello')

});

app.listen(5000, () => {
console.log('Server is runnning')
})