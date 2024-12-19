import express from 'express';

import { getNewMovies, getMoviesById, postMovies, updateMovie, deleteMovie } from '../controllers/moviesController.js';

const movieRouter = express.Router();

movieRouter.get('/', getNewMovies); //Récupérer les nouveaux films
movieRouter.get('/:id', getMoviesById); //Récupérer un film par ID
movieRouter.post('/', postMovies); //Ajouter un film
movieRouter.put('/:id', updateMovie); //Mettre à jour un film par ID
movieRouter.delete('/:id', deleteMovie); //Supprimer un film par ID

export default movieRouter;
