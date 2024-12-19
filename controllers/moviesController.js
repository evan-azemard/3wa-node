import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const API_BASE_URL = process.env.API_BASE_URL;
const API_KEY = process.env.API_KEY;

let movies = [];


//Récupérer les nouveaux films
export const getNewMovies = async (req, res) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/movie/now_playing`, {
      params: {
        api_key: API_KEY,
        language: "fr-FR",
      }
    });

    res.status(200).json(response.data.results);
  }
  catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des films' });
  }
}


//Récupérer un film
export const getMoviesById = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await axios.get(`${API_BASE_URL}/movie/${id}`, {
      params: {
        api_key: API_KEY,
        language: "fr-FR",
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: `Erreur lors de la récupération du film avec l'ID ${id}` });
  }
}


//Ajouter un nouveau film
export const postMovies = async (req, res) => {

  let { title, genre } = req.body;

  try {
    if (!title || !genre) {
      return res.status(400).json({ message: 'All fields are required' })
    }

    const newMovie = {
      id: movies.length + 1,
      title,
      genre
    }

    movies.push(newMovie);

    return res.status(201).json({ movies });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' })
  }
}


//Mettre à jour un film
export const updateMovie = async (req, res) => {
  let { id } = req.params
  let { title, genre } = req.body;

  const movieByID = movies.find(movie => movie.id === parseInt(id))

  movieByID.title = title || movieByID.title;
  movieByID.genre = genre;

  return res.status(201).json(movieByID);
}


//Supprimer un film
export const deleteMovie = async (req, res) => {
  let { id } = req.params
  const movieByID = movies.find(movie => movie.id === parseInt(id));

  const index = movies.indexOf(movieByID);
  movies.splice(index, 1);

  return res.status(201).json(movieByID);

}
