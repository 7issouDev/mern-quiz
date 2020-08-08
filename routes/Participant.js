const express = require('express');
const router = express.Router();
const Participant = require('../models/Participant');

// TODO: Show all participants
router.get('/', async (req, res) => {
  const participants = await Participant.find({});
  res.send({
    message: 'show all the participants',
    participants,
  });
});

// TODO: Add a new participant
router.post('/', async (req, res) => {
  const { fullname, email, password } = req.body;
  const data = { fullname, email, password };
  const participant = new Participant(data);
  const returnedParticipant = await participant.save();
  res.send({
    message: 'new participant has been added.',
    returnedParticipant,
  });
});

module.exports = router;
