const express = require('express');
const bodyParser = require('body-parser')
const expHbs = require('express-handlebars');
const nodemailer = require('nodemailer');
// let poolConfig = "smtps://username:password@smtp.example.com/?pool=true";

// let transporter = nodemailer.createTransport(transport[defaults])


// transporter -- is going to be an object that is able to send mail
// transport -- is the transport configuration object, connection url or a transport plugin instance
// defaults ---  is an object that defines default values for mail options
// let transporter = nodemailer.createTransport(transport[sentMail, defaults])




const app = express();

// // View engine support
// app.engine('handlebars', expHbs());
// app.set('view engine', 'handlebars');

// // Static folder
// app.use('/pages', express.static(path.join(__dirname, 'pages')));


app.get('/',(req, res) => {
  res.send('Hello from Nodemailer');
});

app.listen(3001, () => console.log('Server Started on port 3001...'))
