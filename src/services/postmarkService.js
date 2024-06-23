const postmark = require('postmark');
const client = new postmark.ServerClient('fb9aef5f-5774-4087-a891-93a39b05153b');

module.exports = {
  sendEmail: (email, subject, message) => {
    return client.sendEmail({
      From: 'srijakreddy3113@gmail.com',
      To: email,
      Subject: subject,
      TextBody: message
    });
  }
};