const mongoose = require('mongoose');

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

// define the model or collection name 
const User = new mongoose.model("User", userSchema);

module.exports = User;