const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username : {
        type : String ,
        require : true,
    },
    email : {
        type : String ,
        require : true,
    },
    phone : {
        type : String ,
        require : true,
    },
    password : {
        type : String ,
        require : true,
    },
    isAdmin : {
        type : Boolean,
        default : false, // kyuki  hr ek ko Admin nhi bna sakte
    },
});

// secure the password with the pre method // (pre) matlab pehle database me add karne se pahle
userSchema.pre("save", async function(next){
// console.log("pre method :", this) // ye pura ka pura json data de raha hai 
 const user = this;
 
  if(!user.isModified("password")){
    next();
  }

  try {
    const saltRound = await bcrypt.genSalt(10);
    const hash_password =await bcrypt.hash( user.password, saltRound )
    user.password = hash_password;
  } catch (error) {
    next(error);
  }

});


// define the model or collection name 
const User = new mongoose.model("User", userSchema);

module.exports = User;