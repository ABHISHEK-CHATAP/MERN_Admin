require("dotenv").config()
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY

const User = require("../models/user-model")


// Tokan verification logic 

const jwt = require("jsonwebtoken");

//middleware me ek extra parameter aata hai [[next]] jb tk next call nhui karte tb tk [[user]] route pr nhi jayega

// ye sb  woh [[Authorization : Bearer token]] ke liye hai..

const authMiddleware=async(req, res, next)=>{

const token = req.header("Authorization");

if(!token){
    res.status(401).json({message: "Unauthorized HTTP, Token not provided !token"})
}

//Assuming tokan is in the format "Bearer <jwtToken>", Removing the "Bearer" prefix    
const jwtToken = token.replace("Bearer", "").trim();
console.log("token from auth middleware :::", jwtToken);

try {
    
const isVarified = jwt.verify(jwtToken,JWT_SECRET_KEY);
// console.log("varification from auth middleware:", isVarified)

const DataFromDb = await User.findOne({ email : isVarified.email }).select({password : 0}); //select :0 (mtlab password nhi dhikhega/milega )
console.log("varify Data from Database :", DataFromDb)

//To above consoles, we just see {} empty object in postman 
//ye niche custom code se ab postman me data dekh sakte hai

req.user = DataFromDb;
req.token = token;
req.userID = DataFromDb._id;

next();

} catch (error) {
    res.status(401).json({message: "Unauthorized HTTP, Token not provided , from catch"})
}


}

module.exports = authMiddleware;