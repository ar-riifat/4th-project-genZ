import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    firstname: {
        type: string ,
        required: true,
        trim: true,
        min: 5,
        max: 20
    },
    lastname: {
        type: string ,
        required: true,
        trim: true,
        min: 5,
        max: 20
    },
    username: {
        type: string ,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true
    },
    email: {
        type: string ,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    password : {
        type: string ,
        required: true,
    },
    phone: {
        type: string ,
        required: true,
    },

});
const user = mongoose.model('user', userSchema);

export default user;