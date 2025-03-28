const express = require('express');
const router = express.Router();  

const    authMiddleware = require('../middleware/auth.middleware');
const captainController = require('../controllers/captain.controller'); 

const {body}=require('express-validator');

router.post('/register',[
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First name should be atleast 3 letters long'),
    body('password').isLength({min:5}).withMessage('Password should be atleast 5 letters long'),
    body('vehicle.color').isLength({min:3}).withMessage('Color should be atleast 3 letters long'),
    body('vehicle.plate').isLength({min:3}).withMessage('Plate should be atleast 3 letters long'),
    body('vehicle.capacity').isInt({min:1}).withMessage('Capacity should be atleast 1'),
    body('vehicle.vehicleType').isIn(['car','motorcycle','auto']).withMessage('Vehicle type should be car, motorcycle or auto')
],captainController.registerCaptain  )

router.post('/login',[

    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').isLength({min:5}).withMessage('Password should be atleast 5 letters long')
],captainController.loginCaptain)

router.get('/profile',authMiddleware.authCaptain,captainController.getCaptainProfile);
router.get('/logout',authMiddleware.authCaptain,captainController.logoutCaptain);

module.exports=router;
