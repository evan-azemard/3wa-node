import mongoose from "mongoose";

const messageShema = new mongoose.Schema({
    user_id:{
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true,
        unique: true
    },
    date:{
        type: Date,
        default: Date.now
    }
})

export default mongoose.model('Message', messageShema);