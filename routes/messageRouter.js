import express from 'express';

import { getMessages, createMessage, getMessageByUserId, updateMessage, deleteMessage } from '../controllers/messagesController.js';
import { userExists } from '../middlewares/userValidation.js';

const messageRouter = express.Router();

messageRouter.get('/', getMessages) //Récupérer tout les messages
messageRouter.get('/:user_id', getMessageByUserId) //Récupèrer tout les messages par l'ID d'un utilisateur
messageRouter.post('/', userExists, createMessage) //Créer un message par l'ID utilisateur
messageRouter.put('/:id', updateMessage) //Mettre à jour un message par son ID
messageRouter.delete('/:id', deleteMessage) //Supprimer un message par son ID

export default messageRouter;
