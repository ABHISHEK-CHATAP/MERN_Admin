const express = require("express");
const router = express.Router();


// importing the Registration controller
const {Registration, Login} = require("../controllers/auth-controller")

// Zod validation in user registration
// const signupSchema = require("../validatorsZod/auth-validator.js")
// const Validate = require("../middlewares/validate-middleware.js")




router.get("/", function (req, res) {
  res.status(200).send("this in mine router route..");
});

// --------------------------------------------------------------------------------------
// router.route("/register").get((req,res)=>{
//     res.status(200).send("this in register route...");
// })

//OR    

// router.route("/register").get(Registration)
// --------------------------------------------------------------------------------------

router.route("/register").post(Registration)
router.route("/login").post(Login)








module.exports = router;