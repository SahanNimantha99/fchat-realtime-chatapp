import express from "express"; // Importing express
import dotenv from "dotenv"; // Importing dotenv

import authRoutes from "./routes/auth.routes.js"; // Importing the authRoutes
import connectToMongoDB from "./db/connectToMongoDB.js"; // Importing the connectToMongoDB function

const app = express(); // Creating an express app
const PORT = process.env.PORT || 5000; // Port number

dotenv.config(); // Configuring the dotenv

app.use(express.json()); // Middleware to parse JSON

// Routes
app.use("/api/auth", authRoutes); // Using the authRoutes

// Root route
// app.get("/", (req, res) => {
//   //http://localhost:5000/
//   res.send("API is running...");
// });

app.listen(PORT, () => {
  connectToMongoDB(); // Connecting to MongoDB
  console.log(`Server is running on port ${PORT}`);
});
