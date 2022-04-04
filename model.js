import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Blog", blogSchema);