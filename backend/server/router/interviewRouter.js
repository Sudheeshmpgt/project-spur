const route = require("express").Router();
const {
  interviewRequest,
  getRequest,
  interviewSchedule,
  cancelInterview,
  getNotification,
  userConfirmation,
  userCancellation,
  getRequestData,
  getUpcommingData,
  getInterUpcommingData
} = require("../controller/interviewController"); 

route.post("/", interviewRequest);
route.get("/:id", getRequest);
route.put("/schedule", interviewSchedule);
route.post("/cancel", cancelInterview);
route.get("/user/:id", getNotification);
route.put("/user/confirm", userConfirmation);
route.put("/user/cancel", userCancellation);
route.get("/user/request/:id", getRequestData);
route.get("/user/upcomming/:id", getUpcommingData)
route.get("/interviewer/upcomming/:id", getInterUpcommingData)

module.exports = route;
