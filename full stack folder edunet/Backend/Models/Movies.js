const mongoose = require("mongoose");

// Define Movie Schema
const MovieSchema = new mongoose.Schema({
    name: { type: String, required: true },      // Name of the movie, required field
    rating: { type: Number, required: true },   // Rating, required and should be a number
    year: { type: Number, required: true },     // Release year, required
    hero: { type: String, required: true },     // Hero's name, required field
    heroine: { type: String, required: true },  // Heroine's name, required field
}, {
    timestamps: true,  // Automatically adds `createdAt` and `updatedAt` fields
});

// Create and export Movie model
const Movie = mongoose.model("Movie", MovieSchema);
module.exports = Movie;
