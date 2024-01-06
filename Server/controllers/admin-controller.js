const User = require("../models/user-model")
const Contact = require("../models/contact-model")


// Admin User Data

const AdminUser = async(req,res) => {
    try {

        // postman me empty object [msg:{}] => toh promise hai toh [[[await]]] dena padega

         const AllAdminUser =await User.find({},{password : 0});
         //.. mtlb retun data me [password] object key : value nhi chahiye 
         
         if(!AllAdminUser || AllAdminUser.length === 0){
            res.status(404).json({message:"Admin user not found"})
         }
      
        res.status(201).json({message:"Admin USer", AllAdminUser})

        
    } catch (error) {
        res.status(401).json({msg: error})
    }
}


const GetUserByIdForUpdate = async(req,res) => {
    try {
        const id = req.params.id;
        const FindUser = await User.findOne({_id:id},{ password:0});
        //mtlb password ko chodke pura get id ka data de
        res.status(201).json({msg:"update id data",FindUser});
    } catch (error) {
        res.status(401).json({msg: error})
    }
}

const UpdateUserByIdForUpdate = async(req,res) => {
  try {
      const id = req.params.id;
      const data = req.body;
      //User.updateOne({filter}, {set})
      const updatedData  = await User.updateOne({_id: id}, {$set : data});
      res.status(200).json(updatedData);
  } catch (error) {
    res.status(401).json({msg: error})
  }
// first id get ki [req.params.id] ==> then data get kia [req.body] se jo update karna hai
//then updateOne(fiter_Object, set_object)
}


const DeleteUserById = async(req,res,next) => {
    try {
              const id = req.params.id;
              await User.deleteOne({_id : id});
        res.status(201).json({message:"user deleted successfully"})
    } catch (error) {
        res.status(401).json({msg: "Delete user failed", error: error}) 
    }
}

// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------

// Admin Contacts Data

const AdminContact = async(req,res) => {

    try {
          const AllAdminContacts = await Contact.find();

          if(!AllAdminContacts){
            res.status(200).json({msg:"Admin Contact not found"})
          }

        res.status(200).json({msg:"Admin contacts", AllAdminContacts})
    } catch (error) {
        res.status(401).json({msg:"Admin Contact error", error})
        
    }
}

const AdminContactDelete = async(req,res)=>{
    try {
        const id = req.params.id;
        await Contact.deleteOne({_id : id});
        res.status(200).json({msg:"Admin Contact deleted"});
    } catch (error) {
        res.status(404).json({msg:"Admin Contact delete error", error});
    }
}




module.exports = {AdminUser,GetUserByIdForUpdate,UpdateUserByIdForUpdate ,DeleteUserById, AdminContact,AdminContactDelete};