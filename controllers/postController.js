import Post from "../models/Post.js"


export const getAllPosts = async (req, res) => {
    const posts = await Post.find().populate('user_id','-password');
    return res.json(posts);
}

export const createPost = async (req, res) => {
    try {
        const newPost = new Post(req.body)
        newPost.save();
        return res.status(201).json({ newPost });

    } catch (error) {
        return res.status(500).json({error: 'Server error'})
    }
}


export const deletePost = async (req,res) => {
    
}