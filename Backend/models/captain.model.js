const mongoose = require('mongoose');
const { removeListener } = require('./user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const captianSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            min: [3, 'First name should be atleast 3 letters long'],
            max: 255
        },
        lastname: {
            type: String,
            min: [3, 'Last name should be atleast 3 letters long'],
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
        select: false

    },
    socketId: {
        type: String,

    },

    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },

    vehicle: {
        color: {
            type: String,
            required: true,
            min: [3, 'Color should be atleast 3 letters long'],
        },
        plate:{
            type: String,
            required: true,
            min: [3, 'Plate should be atleast 3 letters long'],


        },
        capacity: {
            type: Number,
            required: true,
            min:[1, 'Capacity should be atleast 1']
        },
        vehicleType: {
            type: String,
            required: true,
            enum: ['car', 'motorcycle', 'auto']
        },
    },

    location:{
      lat:{
        type:Number,
    },
    lng:{
        type:Number,
    }


    }

});

captianSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET,{ expiresIn:'24h' });
  return token;
}
captianSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}
captianSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

const captainModel = mongoose.model('Captain', captianSchema);

module.exports = captainModel;