var nodemailer = require('nodemailer');
const args = process.argv;
const keyphrase = args[2];

var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'sender@email.com',
    pass: ''
  }
});

var mailOptions = {
  from: 'sender@email.com',
  to: 'recipient@email.com',
  subject: `\'${keyphrase}\' found on Job Board`,
  text: `\'${keyphrase}\' found on Job Board: https://www.sis.us/jobs/requisitions`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});