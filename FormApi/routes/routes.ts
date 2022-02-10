import { Request, Response } from 'express';
import { Contact } from './Types/Contact';
import { emailService as EmailService } from '../Services/EmailService';
const express = require('express');
var cors = require('cors');

const emailService = new EmailService();
const app = express();
app.use(cors());
app.use(express.json());

interface ContactRequest extends Request {
  body: Contact;
}

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.post('/', (req: ContactRequest, res: Response) => {
  try {
    emailService.sendMail(req.body);
    res.send('Message sent!');
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(3001, () => console.log('Form API is running on port 3001.'));
