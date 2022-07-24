const route = require('express').Router()
const {getWalletBalance, setWalletBalance} = require('../controller/walletController')

route.get('/:id', getWalletBalance)   
route.post('/:id', setWalletBalance)

module.exports = route 