const Service = require("../models/service-model")


const services = async(req,res)=>{
try {
    
const response = await Service.find();

if(!response){
    //Handle the case where No Document is found
res.status(400).json({msg : "No Service found"})
}

res.status(201).json({data: response})
} catch (error) {
    res.status(500).json({ message: `error from server ${error}` });
}
}

module.exports = {services};