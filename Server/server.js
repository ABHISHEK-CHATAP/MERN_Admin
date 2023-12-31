require("dotenv").config()
const PORT = process.env.PORT || 3000;
const cors = require("cors");

require("./utils/db.js") // yaha require hone ke baad he .then database conected ka meg aayega console me 

const express = require('express');
const app = express();


const corsOptions = {
    origin:"http://localhost:5173",
    methods : "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials : true,
}
app.use(cors(corsOptions));
//data post kia registration ke liye toh data dikha nhi response me so solution we need to use middleware
//middleware & ye beginning me he hona chahiye warna kaam nhi karega ..
app.use(express.json());
// matlab express ko help karo json data read karne me // {req.body} me jo data aata hai woh read karne me


// importing auth-router.js file module
const authRoute = require("./router/auth-router.js") 
const contactRoute = require("./router/contact-router.js")
const serviceRoute = require("./router/service-router.js")

const adminRoute = require("./router/admin-router.js")

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);

// Admin Routes
app.use("/admin",adminRoute)




// app.get('/', function(req, res){
// res.status(200).send('Welcome to the Backend');
// });
app.listen(PORT, ()=>{
    console.log("server is running on port 3000...");
});

// hey abhi 