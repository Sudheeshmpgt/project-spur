const InterviewModel = require("../model/interviewSchema");

const interviewRequest = async (req, res) => {
  try {
    const { userId, interviewerId, request } = req.body;
    const createRequest = new InterviewModel({
      userId,
      interviewerId,
      request,
      date: new Date(),
      time: new Date(),
      link: "Nill",
    });
    const newRequest = await createRequest.save();
    res.send({ message: "Request send succefully" });
  } catch (error) {
    res.status(500).send(error);
  }
};

const getRequest = async (req, res) => {
  try {
    const requests = await InterviewModel.find({
      interviewerId: req.params.id,
    });
    if (requests.length !== 0) {
      const requestData = await InterviewModel.populate(requests, {
        path: "userId",
        select: [
          "name",
          "about",
          "profileImg",
          "_id",
          "interviewer",
          "email",
          "phone",
        ],
      });
      requestData.sort((dateA, dateB) => {
        return dateB.createdAt - dateA.createdAt;
      });
      res.send({ message: "OK", requests: requestData });
    } else {
      res.send({ message: "No requests found" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const interviewSchedule = async (req, res) => {
  try {
    const { requestId, date, time, link } = req.body;
    const request = await InterviewModel.findById(requestId);
    if (request) {
      request.userId = request?.userId;
      request.interviewerId = request?.interviewerId;
      request.date = date;
      request.time = time;
      request.link = link;
      request.confirmed = true;

      const scheduled = await request.save();
    }
    res.status(200).send({ message: "ok" });
  } catch (error) {
    res.status(500).send(error);
  }
};

const cancelInterview = async (req, res) => {
  try {
    const { requestId } = req.body;
    const request = await InterviewModel.findById(requestId);
    if (request) {
      request.userId = request?.userId;
      request.interviewerId = request?.interviewerId;
      request.date = new Date();
      request.time = new Date();
      request.link = "Nill";
      request.cancelled = true;

      const newScheduled = await request.save();
    }
    res.status(200).send({ message: "Interview Cancelled" });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const getNotification = async (req, res) => {
  try {
    const requests = await InterviewModel.find({ userId: req.params.id });
    if (requests.length !== 0) {
      const requestData = await InterviewModel.populate(requests, {
        path: "interviewerId",
        select: [
          "name",
          "about",
          "profileImg",
          "_id",
          "interviewer",
          "email",
          "phone",
        ],
      });
      requestData.sort((dateA, dateB) => {
        return dateB.createdAt - dateA.createdAt;
      });
      res.send({ message: "OK", requests: requestData });
    } else {
      res.send({ message: "No requests found" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const userConfirmation = async (req, res) => {
  try {
    const { requestId } = req.body;
    const confirm = await InterviewModel.findByIdAndUpdate(
      { _id: requestId },
      { userConfirmation: true, paid:true }
    );
    if (confirm) {
      res.status(200).send({ message: "Confirmed" });
    } else {
      res.status(401).send({ message: "Unauthorized" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const userCancellation = async (req, res) => {
  try {
    const { requestId } = req.body;
    const confirm = await InterviewModel.findByIdAndUpdate(
      { _id: requestId },
      { userCancellation: true }
    );
    if (confirm) {
      res.status(200).send({ message: "Cancelled" });
    } else {
      res.status(401).send({ message: "Unauthorized" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const getRequestData = async (req, res) => {
  try {
    const requests = await InterviewModel.findById(req.params.id);
    if (requests.length !== 0) {
      const requestData = await InterviewModel.populate(requests, {
        path: "interviewerId",
        select: [
          "name",
          "about",
          "profileImg",
          "_id",
          "interviewer",
          "email",
          "phone",
        ],
      });
      res.send({ message: "OK", requests: requestData });
    } else {
      res.send({ message: "No requests found" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  interviewRequest,
  getRequest,
  interviewSchedule,
  cancelInterview,
  getNotification,
  userConfirmation,
  userCancellation,
  getRequestData
};