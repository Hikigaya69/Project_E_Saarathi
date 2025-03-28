const { LEGAL_TLS_SOCKET_OPTIONS } = require('mongodb');
const userModel = require('../models/user.model');
const userService = require('../services/user.services');
const {validationResult} = require('express-validator');
const cookie = require('cookie-parser')
const blacklistedTokenModel = require('../models/blacklistToken.model')


module.exports.registerUser = async(req,res,next)=>{  // This function will register a new user
    
    const errors = validationResult(req);     // This will check if there are any validation errors
    if(!errors.isEmpty()){
         return res.status(400).json({errors:errors.array()});
    }

    console.log(req.body) 

    const {fullname,email,password}=req.body; // This will get the fullname, email and password from the request body
    
    const isUserAlreadyExist = await userModel.findOne({email}); // This will check if the user already exists
    if(isUserAlreadyExist){
        return res.status(400).json({message:'User already exists'}); // This will return an error if the user already exists
    }
    
    
    const hashedPassword= await userModel.hashPassword(password);   // This will hash the password
    
    const user = await userService.createUser({ // This will create a new user
       firstname:fullname.firstname,
       lastname:fullname.lastname,
       email,
       password:hashedPassword


    }); 
    const token = user.generateAuthToken();  // This will generate a JSON Web Token for the user
    res.status(201).json({token,user});  // This will return the token and the user


}


module.exports.loginUser = async (req,res,next)=>{
    const errors =validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()}) // This will return an error if there are any validation errors
    }

    const {email,password}=req.body; // This will get the email and password from the request body
    
    const user = await userModel.findOne({email}).select('+password');  // This will find the user by the email
    
    if(!user){
        return res.status(401).json({message:'Invalidd user or password'}); //`This will return an error if the user is not found
    }

    const isMatch = await user.comparePassword(password); // This will compare the password

    if(!isMatch){
        return res.status(401).json({message:'Invalid user or password'}); // This will return an error if the password is incorrect
    }

    const token = user.generateAuthToken();

    res.cookie('token',token);
    return res.status(200).json({user,token}) // This will return the user and the token
       

}


module.exports.getUserProfile = async(req,res,next)=>{
    res.status(200).json(req.user);
}

module.exports.logoutUser = async(req,res,next)=>{
const token =req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];
await blacklistedTokenModel.create({token});
res.clearCookie('token');

res.status(200).json({message:'Logged out'});

}

