

const adminMiddleware = async(req,res,next) =>{
  try {
    console.log("admin middleware :",req.user);
    //req.user se login user ka pura data milega and,, isAdmin = true || false;
    const isAdminRole = req.user.isAdmin;
    //ye bs true and false batayega based on loggedin user

    if(!isAdminRole){
        res.status(403).json({message: "Access denied , user is not an Admin"});
    }

    // res.status(200).json({message: " AdminMiddleware ", data:req.user.isAdmin});

    // agar Admin hai ==> isAdminRole = true hai toh next(); yani true wla data response me dhikhega
    // nhi toh above error : Access denied wla 
     next();
    //next() => mtlb ab ye authmiddleware and adminmiddleware pass karke , route ko accecpt kr sakta hai 


  } catch (error) {
    res.status(400).json({message: "Error from AdminMiddleware catch"});
  }


}

module.exports = adminMiddleware   