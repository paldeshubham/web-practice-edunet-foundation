const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const Stud = require('./Models/Students');
//const updateStudent = require('./Models/updateStudent');
const mongodb = require('mongodb');
const Movie = require('./Models/Movies');


const app = express();
app.use(express.json());
app.use(cors());

const port = 4000;

// Connect to MongoDB
mongoose.connect("mongodb+srv://Maratha:shubham123@maratha.oc5mv.mongodb.net/test", {
    
})
    .then(() => console.log("Mongodb Connected"))
    .catch((err) => console.error("MongoDB connection error:", err));

// Default Route
app.get('/', (req, res) => {
    res.send('Hello World!');
});
//Post method
app.post("/postmoviedata",async(req,res)=>{
  try {
    const newData = new Movie(req.body);
    await newData.save()
    res.status(201).json(newData);    
  } catch (err) {
    console.error("Error Creating  movie data:",err);
    res.status(500).send("Internal Server Error");

    
  }
})

// //Get Movies Route
app.get('/getmovies', async (req, res) => {
    try {
        const newData = await Movie.find({});
        res.status(200).json(newData);
        console.log(newData);
    } catch (error) {
        console.error("Error fetching movies:", error);
        res.status(500).send("Internal Server Error");
    }
});

// 

// Start the server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
