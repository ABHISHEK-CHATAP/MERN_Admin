const express = require("express");
const router = express.Router();


// importing the Registration controller
const {Registration, Login, ValidUser} = require("../controllers/auth-controller")
const authMiddleware = require("../middlewares/auth-middleware")

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
router.route("/user").get(authMiddleware, ValidUser)
// authmiddleware ===> to check bande ne token apne pass rakha hai ya nhi ===> user loggin hai ya nhi ===> to verify user






module.exports = router;