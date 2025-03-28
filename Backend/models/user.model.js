const mongoose = require('mongoose');   // This is the library that allows us to connect to MongoDB
const bcrypt = require('bcrypt'); // This is the library that allows us to hash passwordscon
const jwt = require('jsonwebtoken'); // This is the library that allows us to create and verify JSON Web Tokens
const userSchema = new mongoose.Schema({  // This is the schema that defines the shape of the documents in the collection
    fullname: {
        firstname: {
            type: String,
            required: true,
            min: [6, 'First name should be atleast 3 letters long'],
            max: 255
        },
        lastname: {
            type: String,
            min: [6, 'Last name should be atleast 3 letters long'],
            max: 255
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
        min: [5, 'Email should be atleast 5 letters long']

    },
    password: {
        type: String,
        required: true,
        select: false  // This will make sure that the password is not returned when we query the database

    },
    socketId: { // This is the unique identifier for the user's socket connection
        type: String,


    },

})

userSchema.methods.generateAuthToken = function () { 
 const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET,{ expiresIn:'24h' }); // This is a method that generates a JSON Web Token for the user
 return token;

}

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password); // This is a method that compares the password entered by the user with the hashed password in the database
} 

userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10); // This is a method that hashes the password before saving it to the database
}

const userModel = mongoose.model('User', userSchema);// This is the model that we will use to interact with the database


module.exports= userModel; // This will export the model so that we can use it in other files