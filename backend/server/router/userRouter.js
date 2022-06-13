const route = require('express').Router();
const userController = require('../controller/userController')

route.post('/api/registration', userController.registration)
route.post('/api/login', userController.login)
route.post('/api/otplogin', userController.otpLogin)
route.post('/api/otpsubmit', userController.otpVerify) 

module.exports= route;