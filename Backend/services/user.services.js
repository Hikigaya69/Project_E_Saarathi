const userModel=require('../models/user.model'); // This will import the user model

module.exports.createUser = async({         // This function will create a new user
firstname,lastname,email,password})=>{  // These are the parameters that the function will take
        
    if(!firstname || !email || !password){  // This will check if all the fields are provided
        throw new Error("All fields are required");
    }
    const user = userModel.create({  // This will create a new user
        fullname:{
            firstname,   // This will set the firstname
            lastname
        },
        email,
        password
    }) 

    return user;  // This will return the user
} 