const route = require('express').Router()
const {interviewerRevenue} = require('../controller/chartController')

route.get('/interviewer/:id', interviewerRevenue) 

module.exports = route;