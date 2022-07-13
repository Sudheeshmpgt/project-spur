const route = require('express').Router();
const {updateBlockStatus, userDetails, deleteUser, updateUserData} = require('../controller/userManagementController')

route.get('/', userDetails)
route.put('/status/:id', updateBlockStatus)
route.put('/update/:id', updateUserData)
route.delete('/delete/:id', deleteUser)

module.exports = route 