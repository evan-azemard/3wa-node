import mongoose from "mongoose";

const postShema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    content: String,
    date: { type: Date, default: Date.now },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})


export default mongoose.model('Post', postShema)