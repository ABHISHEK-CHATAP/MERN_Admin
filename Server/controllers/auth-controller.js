// In express.js application , a "controller" refers to a part of your code that is responsible for handelling the application's logic .
// controllers are typically used to process incoming requests, interact with model (data sources), and send responses back to clients.
// They help organize your application by separating concerns and following the MVC (Model view Controller) design pattern.

const User = require("../models/user-model");
// const bcrypt = require('bcryptjs');

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
        userId : registerData._id.toString(),
      });
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
};

module.exports = { Registration };
// agar yaha export currly bracket me kia hai toh import bhi currly bracket me he karna hoga  {{vice-versa}}
