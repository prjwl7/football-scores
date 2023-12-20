const express = require('express');
const Match = require('../Models/model');


const router = express.Router();

router.get('/matches', async (req, res) => {
  try {
    const matches = await Match.find();
    res.json(matches);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/matches', async (req, res) => {
    const match = new Match({
      team1: req.body.team1,
      team2: req.body.team2,
      score1: req.body.score1,
      score2: req.body.score2,
    });
  
    try {
      const newMatch = await match.save();
      res.status(201).json(newMatch);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
module.exports = router;