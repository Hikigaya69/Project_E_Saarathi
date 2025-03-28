const userModel = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookie = require('cookie-parser')
const blacklistedTokenModel = require('../models/blacklistToken.model')
const captainModel = require('../models/captain.model')

module.exports.authUser= async(req,res,next)=>{   //this is a middleware that will check if the user is authenticated   
 const token =req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];  // This will get the token from the request headers
 if(!token){
    return res.status(401).json({message:'Unauthorized no token found'}); // This will return an error if there is no token

 }

 const isBlacklisted = await blacklistedTokenModel.findOne({token:token});

 if(isBlacklisted){
   return res.status(401).json({message:"Token expired"});
 }

 try {
    const decoded =jwt.verify(token,process.env.JWT_SECRET);
    const user =await userModel.findById(decoded._id)

    req.user = user;
    
    return next();
    
 } catch (error) {
    return res.status(401).json({message:'Unauthorizedjjj'});

 }
  
}
module.exports.authCaptain=async(req,res,next)=>{  

   const token =req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];  // This will get the token from the request headers
   if(!token){
      return res.status(401).json({message:'Unauthorized no token found'}); // This will return an error if there is no token
  
   }
  
   const isBlacklisted = await blacklistedTokenModel.findOne({token:token});
  
   if(isBlacklisted){
     return res.status(401).json({message:"Token expired"});
   }
  
   try {
      const decoded =jwt.verify(token,process.env.JWT_SECRET);
      const captain =await captainModel.findById(decoded._id)
  
      req.captain = captain;
      
      return next();
      
   } catch (error) {
      return res.status(401).json({message:'Unauthorizedjjj'});
  
   }



} //this is a middleware that will check if the captain is authenticated