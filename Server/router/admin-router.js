const express = require('express');
const router = express.Router();
const authMiddleware = require("../middlewares/auth-middleware")
const adminMiddleware = require("../middlewares/admin-middleware");


//Destructure kia hai ==> jaise mongoose ka [Schema , model] destructure karte hai
const {AdminUser,GetUserByIdForUpdate,UpdateUserByIdForUpdate , DeleteUserById, AdminContact} = require("../controllers/admin-controller")

//Users CRUD methods
router.route("/users").get(authMiddleware, adminMiddleware , AdminUser);

router.route("/users/update/:id").get(authMiddleware, adminMiddleware , GetUserByIdForUpdate);

router.route("/users/edited/:id").patch(authMiddleware, adminMiddleware , UpdateUserByIdForUpdate);

router.route("/users/delete/:id").delete(authMiddleware, adminMiddleware , DeleteUserById);



//Contacts CRUD methods
router.route("/contacts").get(authMiddleware,adminMiddleware, AdminContact);

// first user will logged in and verify a token using [authmiddleware] then
//pass through [adminMiddleware] and verify [isAdmin = true or false] if false will throw error => token is not provide means looged in use is not admin
//if true => then pass through [[AdminUser and AdminContact controllers ]] means now loggedin user is Admin and now he can access this API == Route


module.exports = router;