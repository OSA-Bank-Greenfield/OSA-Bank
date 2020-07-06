const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');

// const db = require("./db/database");

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + './client/public'));

const uri = process.env.URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB connected');
});

const userRouter = require('./routes/user');
app.use('/user', userRouter);
const authRouter = require('./routes/auth.js');
app.use('/auth', authRouter);
const userinformationsRouter = require('./routes/userinformations.js');
app.use('/userinformations', userinformationsRouter);

const appointementRouter = require('./routes/appointement.js');
app.use('/appointement', appointementRouter);

app.get('/posts', authenticateToken, (req, res) => {
  res.json(posts.filter((post) => post.username === req.user.name));
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.secret_token, (err, user) => {
    console.log(err);
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

const contactRouter = require('./routes/contact');
app.use('/contact', contactRouter);

app.post('/api/forma', (req, res) => {
  let smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    port: 465,
    auth: {
      user: 'osa.bank.test@gmail.com',
      pass: 'oussemasiwarahmed',
    },
  });

  let mailOptions = {
    from: 'osa.bank.test@gmail.com',
    to: `${req.body.email}`,
    subject: 'Your Credit Simulator Details',
    html: `
      
      <h3>Your Credit Details:</h3>
      <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
      </ul>
      <h3>Message</h3>
      <p> ${req.body.message}</p>
      `,
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.send(error);
    } else {
      res.send('Success');
    }
    smtpTransport.close();
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
