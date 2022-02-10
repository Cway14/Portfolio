"use strict";
exports.__esModule = true;
var EmailService_1 = require("../Services/EmailService");
var express = require('express');
var emailService = new EmailService_1.emailService();
var app = express();
app.use(express.json());
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.post('/', function (req, res) {
    try {
        emailService.sendMail(req.body);
        res.send('Message sent!');
    }
    catch (error) {
        res.status(500).send(error);
    }
});
app.listen(3001, function () { return console.log('Form API is running on port 3001.'); });
