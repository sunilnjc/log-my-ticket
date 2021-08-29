const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    content: { type: String, required: true },
    imagePath: { type: String, required: true }
});

module.exports = mongoose.model("Post", postSchema);
