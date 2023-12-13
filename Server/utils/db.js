const mongoose = require('mongoose');

require("dotenv").config()
const URI = process.env.MONGODB_URI;


mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(()=> console.log("DataBase Connected..."))
  .catch((err)=> console.log("err aaya:",err));