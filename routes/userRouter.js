import express from 'express';

import { emailVerification, userCreation, userUpdateVerification, userExists } from '../middlewares/userValidation.js';
import { getAllUsers, createUser, getUserById, updateUser, deleteUser } from '../controllers/usersController.js';

const userRouter = express.Router();


userRouter.get('/', getAllUsers) //Récupérer tout les utilisateurs
userRouter.get('/:id', userExists, getUserById) //Récupérer un utilisateur pas son ID
userRouter.post('/', userCreation, emailVerification, createUser) //Créer un nouvelle utilisateur
userRouter.put('/:id', userUpdateVerification, updateUser) //Mettre à jour un utilisateur par son ID
userRouter.delete('/:id', deleteUser) //Supprimer un utilisateur par son ID




export default userRouter;
