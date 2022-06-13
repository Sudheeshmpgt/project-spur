const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
require('dotenv').config;

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required:true
    },
    password:{
        type: String,
        required: true
    },
    interviewer:{
        type:Boolean
    }, 
    profileImg: {
        type: String
    },
    experience:{
        type: String,
    },
    block:{
        type:Boolean,
        default:false
    },
})

// userSchema.methods.generateAuthToken = async function() {
//     try {
//         let token = jwt.sign({_id:this._id, role:'user'}, process.env.SECRET_KEY);
//         return token;
//     } catch (error) {
//         console.log(error);
//     }
// }

module.exports = UserModel = mongoose.model('user', userSchema);
