const captainModel = require('../models/captain.model');




module.exports.createCaptain = async({         // This function will create a new user
    firstname,lastname,email,password,color,plate,capacity,vehicleType})=>{  // These are the parameters that the function will take
            
        if(!firstname || !email || !password||!color || !plate ||!capacity || !vehicleType){  // This will check if all the fields are provided
            throw new Error("All fields are required");
        }
        const captain = await captainModel.create({  // This will create a new captain
            fullname:{
                firstname,   // This will set the firstname
                lastname
            },
            email,
            password,
            vehicle:{
                color,
                plate,
                capacity,
                vehicleType
            }
        }) 
    
        return captain;  // This will return the captain
    } 