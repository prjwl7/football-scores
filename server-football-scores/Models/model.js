const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
    team1 : String,
    team2 : String,
    score1 : Number,
    score2 : Number,
})

module.exports = mongoose.model('Match', matchSchema);