const express = require("express");
const router = express.Router();


// importing the Registration controller
const {Registration} = require("../controllers/auth-controller")


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






module.exports = router;