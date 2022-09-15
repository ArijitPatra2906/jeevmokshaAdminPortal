const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String,
        required: true,
        unique: true
    },
    photo: {
        type: String,
        required: false,
    },
    username: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Blog = mongoose.model("Blog", BlogSchema)
module.exports = Blog;