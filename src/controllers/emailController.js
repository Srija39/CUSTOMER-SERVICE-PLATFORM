const { sendEmail } = require('../services/postmarkService');
const Communication = require('../models/communication');

module.exports = {
  send: async (req, res) => {
    try {
      const { email, subject, message } = req.body;
      await sendEmail(email, subject, message);

      // Save communication history
      const newComm = new Communication({
        userId: req.user._id, // req.user must be populated
        email,
        subject,
        message,
        timestamp: new Date()
      });
      await newComm.save();

      res.status(200).send('Email sent and recorded');
    } catch (err) {
      res.status(500).send('Error sending email');
    }
  }
};