import express from 'express';

import { createPost, getAllPosts } from "../controllers/postController.js";

const postRouter = express.Router();

postRouter.get('/', getAllPosts);
postRouter.post('/', createPost)

export default postRouter