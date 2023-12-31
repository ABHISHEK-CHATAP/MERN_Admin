// In express.js application , a "controller" refers to a part of your code that is responsible for handelling the application's logic .
// controllers are typically used to process incoming requests, interact with model (data sources), and send responses back to clients.
// They help organize your application by separating concerns and following the MVC (Model view Controller) design pattern.

const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const Registration = async (req, res) => {
  try {
    //    console.log(req.body)
    //get the data using req.body
    const { username, email, phone, password } = req.body;
    // check the email exist or not
    const userExist = await User.findOne({ email: email });
    // if exist then show error
    if (userExist) {
      return res.status(400).json({ message: "User/email already exists" });
    }
    //hash the password
    //  const saltRound = 10;
    //  const hash_password =await bcrypt.hash( password, saltRound )
    //(ye above 2 lines {{pre method}}) me use kia hai [ schema ke niche & model k uper ]

    // if not , then create and store
    const registerData = await User.create({
      username,
      email,
      phone,
      password,
    });

    res.status(201).json({
      message: "USer data created on register page...",
      data: registerData,
      token: await registerData.generateToken(),
      userId: registerData._id.toString(),
    });
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
};

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const DbUserExists = await User.findOne({ email });
    // console.log("login data exists", DbUserExists);
    if (!DbUserExists) {
      res.status(400).json({ msg: "Invalid Credentials" });
    }
    //login me email toh find kr liya jo DB me hai ab password bhi compare karna hoga

    // const isPasswordValid = await bcrypt.compare( password,DbUserExists.password);
    const isPasswordValid = await DbUserExists.comparePassword( password ); // above commented code also can be written as with help of function method

    if (isPasswordValid) {
      res.status(200).json({
        msg: "login successful",
        token: await DbUserExists.generateToken(),
        userId: DbUserExists._id.toString(),
      });
    } else {
      res.status(401).json({ msg: "Invalid email or password" });
    }

  } catch (error) {
    res.status(500).json({ message: "internal login error" });
  }
};

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// To send USer Data -- VAlidUSer logic 

const ValidUser = async(req, res) => {
try {
  const userData = req.user;
  console.log("userdata:",userData);

  return res.status(200).json({ userData});
} catch (error) {
  console.log("error from user Route :", error);
}
}


module.exports = { Registration, Login , ValidUser};
// agar yaha export currly bracket me kia hai toh import bhi currly bracket me he karna hoga  {{vice-versa}}
