// In express.js application , a "controller" refers to a part of your code that is responsible for handelling the application's logic .
// controllers are typically used to process incoming requests, interact with model (data sources), and send responses back to clients. 
// They help organize your application by separating concerns and following the MVC (Model view Controller) design pattern. 

const Home  = async(req, res)=>{
 try {
   console.log(req.body)
    res.status(201).json({message: "welcome to register page...", data: req.body});
 } catch (error) {
  console.log("controller error: " + error)  
 }
}






module.exports = {Home}
// agar yaha export currly bracket me kia hai toh import bhi currly bracket me he karna hoga  {{vice-versa}}