const mongoose = require('mongoose')

const postSchema = new mongoose.Schema(
    {
        id : Number ,
        description : String,
        link : String ,
        user_id : Number
    }
    )

const postModel = mongoose.model("posts",postSchema)

module.exports = postModel ; 