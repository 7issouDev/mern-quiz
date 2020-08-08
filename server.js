const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// TODO: Routes
const Quiz = require('./routes/Quiz');
const Participant = require('./routes/Participant');

const app = express();

// TODO: some configuration
app.use(express.json());
app.use(cors());

// TODO: connect to the mongoDB Provider
mongoose.connect('mongodb://localhost:27017/Quiz', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// TODO: Check the API
app.get('/', (req, res) => {
  res.send({ status: 'API Working !!!' });
});

// TODO: Routes in here
app.use('/quiz', Quiz);
app.use('/participant', Participant);

// TODO: server PORT Listening
app.listen(5000, () => {
  console.log(`The Server is running on PORT ${5000}`);
});
