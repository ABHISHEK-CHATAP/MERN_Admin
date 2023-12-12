const mongoose = require('mongoose');
const URI = "mongodb+srv://Abhishek:Abhishek@cluster0.lg986fx.mongodb.net/MERNAdmin?retryWrites=true&w=majority"

mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(()=> console.log("DataBase Connected..."))
  .catch((err)=> console.log("err aaya:",err));