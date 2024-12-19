import express from 'express';
import userRouter from './userRouter.js';
import postRouter from './postRouter.js';
import messageRouter from './messageRouter.js';
import movieRouter from './movieRouter.js';

const router = express.Router();

router.use('/users', userRouter);
router.use('/posts', postRouter);
router.use('/messages', messageRouter);
router.use('/movies', movieRouter);

export default router;
