/*const mongoose = require("mongoose");
const Student = require("./Student"); // Import the Student model

// Connect to MongoDB
mongoose
    .connect("mongodb://localhost:27017/your-database-name", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Database connected successfully!"))
    .catch((err) => {
        console.error("Database connection failed:", err.message);
        process.exit(1);
    });

// Function to update a student's information
async function updateStudent(rollNo, updateData) {
    try {
        const student = await Student.findOneAndUpdate(
            { roll_no: rollNo }, // Find by roll number
            updateData,          // Fields to update
            { new: true, runValidators: true } // Return updated document and validate
        );

        if (student) {
            console.log("Student information updated successfully:", student);
        } else {
            console.log("Student with the given roll number not found.");
        }
    } catch (error) {
        console.error("Error updating student information:", error.message);
    } finally {
        mongoose.connection.close(); // Close the connection after operation
    }
}

// Call the function to update a student
updateStudent(101, { 
    name: "Updated Name", 
    branch: "Updated Branch", 
    address: "Updated Address", 
    phone_no: "9876543210" 
});
*/
