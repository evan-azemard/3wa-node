import axios from 'axios';

const API_BASE_URL = process.env.API_BASE_URL;
export const getMovies = async (req,res) => {
    try {
        const params = {
          language: "fr-FR",
        };
  
        const response = await axios.get(`${API_BASE_URL}/movie/now_playing`, { params });

        res.status(200).json(response.data.results);
      }
      catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des films' });
      }
}

