import express from 'express';
import { getNewMovies, getMoviesById, postMovies, updateMovie, movieDelete } from '../controllers/moviesController.js';

const router = express.Router();

router.get('/', getNewMovies); //Récupérer les nouveaux films
router.get('/:id', getMoviesById); //Récupérer un film par ID
router.post('/', postMovies); //Ajouter un film
router.put('/:id', updateMovie); //Mettre à jour un film par ID
router.delete('/:id', movieDelete); //Supprimer un film par ID

export default router;
