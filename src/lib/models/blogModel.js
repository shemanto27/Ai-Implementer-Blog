import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    publishedDate:{
        type:Date,
        required:true,
        default:Date.now(),
    },
    author:{
        type:String,
        required:true,
    },
    category:{
        type:[String],
        required:true,
    },

})

const blogModel = mongoose.models.blog || mongoose.model('blog',Schema);

export default blogModel;