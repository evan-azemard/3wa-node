import mongoose from "mongoose";

const userShema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true
    },
    lastname: String,
    password:{
        type: String,
        required: true,
        minlenght: 4,
    }
})

export default mongoose.model('User', userShema);