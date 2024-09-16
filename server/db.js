 const mongoose = require('mongoose')

 const connectDB = async()=> { 
    try{
     await mongoose.connect(
     'mongodb+srv://samcoeur:Sberber2024@cluster0.km4j3.mongodb.net/POSTS?retryWrites=true&w=majority&appName=Cluster0'
    )
   }
    catch(error){
        console.log(error)
    }
 
 }

 module.exports = connectDB ; 