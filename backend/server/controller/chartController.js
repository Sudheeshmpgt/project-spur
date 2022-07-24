const InterviewModel = require("../model/interviewSchema");

const interviewerRevenue = async (req, res) => {
  try {
    const interviewData = await InterviewModel.find({
      interviewerId: req.params.id,
    });
    if (interviewData.length !== 0) {
      const order = interviewData.map((data) => data.status);
      const uniqueOrder = [...new Set(order)];
      const data = [];
      for (const unique of uniqueOrder) {
        let count = 0;
        for (const ord of order) {
          if (unique === ord) {
            count++;
          }
        }
        data.push(count);
      }

      const walletStatus = interviewData
        .filter((data) => data.userConfirmation)
        .map((data) => data.creditStatus);
      const uniqueWalletStatus = [...new Set(walletStatus)];
      const walletData = [];
      for (const unique of uniqueWalletStatus) {
        let count = 0;
        for (const wallet of walletStatus) {
          if (unique === wallet) {
            count++;
          }
        }
        walletData.push(count);
      }

      const requests = interviewData.length
      const completedInterviews = interviewData.filter((data)=>(data.status === 'Completed'))
      const interviews = completedInterviews.length
      const revenew = completedInterviews.map((data)=>data.interviewerFee).reduce((acc, cur)=>{return acc + cur},0)

      res.send({
        message: "Ok",
        orderStatus: uniqueOrder,
        orderStatusValue: data,
        walletStatus: uniqueWalletStatus,
        walletStatusValue: walletData,
        requests:requests,
        interviews:interviews,
        revenew:revenew,
      });
    } else {
      res.status(400).send({ message: "Data not found" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { interviewerRevenue };
