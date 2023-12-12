const express = require("express");
const router = express.Router();


// importing the home controller
const {Home} = require("../controllers/auth-controller")


router.get("/", function (req, res) {
  res.status(200).send("this in mine router route..");
});




// --------------------------------------------------------------------------------------
// router.route("/register").get((req,res)=>{
//     res.status(200).send("this in register route...");
// })

//OR    

// router.route("/register").get(Home)
// --------------------------------------------------------------------------------------

router.route("/register").post(Home)











module.exports = router;