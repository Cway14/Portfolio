const result = require('dotenv').config();
const nodemailer = require('nodemailer');

console.log(result);
interface Contact {
  // TODO: figure out how to import from types
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

// async..await is not allowed in global scope, must use a wrapper
export class emailService {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing

  // create reusable transporter object using the default SMTP transport
  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  async sendMail(contact: Contact) {
    const mailOptions = {
      from: 'automatedcam@gmail.com', // sender address
      to: contact.email, // list of receivers
      subject: 'Hello ' + contact.firstName + '!', // Subject line
      text: contact.message, // plain text body
      html: contact.message, // html body
    };
    await this.transporter.sendMail(mailOptions, (error: any, data: any) =>
      console.log(error, data)
    );
  }
}
