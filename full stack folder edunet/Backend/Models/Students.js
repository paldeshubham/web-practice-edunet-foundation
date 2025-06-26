const mongoose = require("mongoose");

// Define Movie Schema
const StudentSchema = new mongoose.Schema({
    name:   String,      // Name of the movie, required field
    roll_no:  Number,   // Rating, required and should be a number
    branch:  String,     // Release year, required
    address:  String,      // Hero's name, required field
    phone_no: String,   // Heroine's name, required field
}, );

// Create and export Movie model
const Student = mongoose.model("Students", StudentSchema);
module.exports = Student;
