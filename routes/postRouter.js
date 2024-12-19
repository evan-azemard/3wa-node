import express from 'express';

import { createPost, getAllPosts,deletePost,updatePost } from "../controllers/postController.js";

const postRouter = express.Router();

postRouter.get('/', getAllPosts);
postRouter.post('/', createPost)
postRouter.delete('/:id', deletePost)
postRouter.put('/:id', updatePost)

export default postRouter