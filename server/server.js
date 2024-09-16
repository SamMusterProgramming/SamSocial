const express = require('express')
const connectDB = require('./db.js')
const postModel = require ('./post.js')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())


connectDB();

app.get('/',async(req,res)=>{
    const posts = await postModel.find();
    res.json(posts)
})


app.listen(8080,()=>{
    console.log('running on port 8080')
})