const express = require('express'); 
const router = express.Router(); 
const {body}= require ('express-validator')  // This will import the express-validator module
const userController = require('../controllers/user.controller') // This will import the user controller
const authMiddleware = require('../middleware/auth.middleware')



router.post('/register',[ // This will post the register route
    body('email').isEmail().withMessage('Invalid Email'), // This will check if the email is valid
    body('fullname.firstname').isLength({ min:3 })
    .withMessage('Firstname should be 3 at least 3 characters'),
     body('password').isLength({ min:6 })
     .withMessage("The password must be 6 character long")
],
 userController.registerUser  // This will call the registerUser function in the user controller
)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min:6 })
    .withMessage("The password must be 6 character long")
],
userController.loginUser
)

router.get('/profile',authMiddleware.authUser,userController.getUserProfile)


router.get('/logout',authMiddleware.authUser,userController.logoutUser)


module.exports=router;