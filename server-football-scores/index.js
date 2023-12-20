const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const Match = require('./Models/model');
const matchRoutes = require('./Routes/matchRoutes');
const cors = require('cors');
const app = express();
app.use(bodyparser.json());
app.use(cors());
mongoose.connect('mongodb+srv://prajwal123:4I0Vi8thu7rkNV6b@cluster0.guhnsfm.mongodb.net/?retryWrites=true&w=majority');

app.listen(5000, ()=>{
    console.log("Server running on 5000");
})

app.use('/api', matchRoutes);