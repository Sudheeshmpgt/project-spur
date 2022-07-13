const route = require('express').Router();
const {interviewerDetails, updateBlockStatus, deleteInterviewer, updateInterviewerData} = require('../controller/interviewerManagementController')

route.get('/', interviewerDetails)
route.put('/status/:id', updateBlockStatus)
route.put('/update/:id', updateInterviewerData)
route.delete('/delete/:id', deleteInterviewer)

module.exports = route 