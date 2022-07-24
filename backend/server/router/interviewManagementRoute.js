const route = require('express').Router()
const {manageInterviewerFee, getInterviews} = require('../controller/interviewManagementController')

route.get('/', getInterviews)
route.put('/:id',manageInterviewerFee)

module.exports = route;