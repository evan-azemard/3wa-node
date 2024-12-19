import Post from "../models/Post.js"

export const getAllPosts = async (req, res) => {
    const posts = await Post.find().populate('user_id', '-password');
    return res.json(posts);
}

export const createPost = async (req, res) => {
    try {
        const newPost = new Post(req.body)
        newPost.save();
        return res.status(201).json({ newPost });

    } catch (error) {
        return res.status(500).json({ error: 'Server error' })
    }
}


export const deletePost = async (req, res) => {
    try {

        await Post.deleteOne({ _id: req.params.id });

        return res.status(203).json({ message: "Post has been deleted" });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
}

export const updatePost = async (req, res) => {
    try {
        const { title, author, content } = req.body;

        let updatePost = {};

        if (title) updatePost.title = title;
        if (author) updatePost.author = author;
        if (content) updatePost.content = content;

        try {
            const updatedPost = await Post.findByIdAndUpdate(req.params.id, updatePost, { new: true });
            if (!updatedPost)
                return res.status(404).json({ error: "Message not found" });

            return res.json({ updatedPost });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });

    }
}