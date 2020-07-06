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
// user address for react index
app.use(express.static(__dirname + './client/public'));
// add uri addres of mongodb
const uri = process.env.URI;
// connect your database
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB connected');
});
// use user Router
const userRouter = require('./routes/user');
app.use('/user', userRouter);
// use authentication router
const authRouter = require('./routes/auth.js');
app.use('/auth', authRouter);
// use informations Router
const userinformationsRouter = require('./routes/userinformations.js');
app.use('/userinformations', userinformationsRouter);
// use appoitement Router
const appointementRouter = require('./routes/appointement.js');
app.use('/appointement', appointementRouter);
// check the user post is the same with token with the middleware
app.get('/posts', authenticateToken, (req, res) => {
  res.json(posts.filter((post) => post.username === req.user.name));
});
// middleware check
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
// use contact Router
const contactRouter = require('./routes/contact');
app.use('/contact', contactRouter);
// connect to the localhost with port
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
