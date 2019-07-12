const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const sgMail = require('@sendgrid/mail');
const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));

const transporter = nodemailer.createTransport(
  sgTransport({
    auth: {
      api_key: process.env.SENDGRID_API_KEY,
    },
  })
);

const send = ({ email, name, subject, text }) => {
  const from = name && email ? `${name} <${email}>` : `${name || email}`;
  const message = {
    from,
    to: 'erikguntner@outlook.com',
    subject,
    html: `
      <b>${subject}</b>
      <p>${text}</p>
    `,
    replyTo: from,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    );
  });
};

app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  send({ email, name, subject, text: message })
    .then(() => {
      res.status(200).send({ message: 'success' });
    })
    .catch(error => {
      res.status(400).send({ message: 'error' });
    });
});
// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));
  app.use('*', express.static('client/build')); // Added this

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

//Server Setup
const port = process.env.PORT || 3090;
app.listen(port, () => console.log(`listening on port ${port}`));
