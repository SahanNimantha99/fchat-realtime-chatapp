import mongoose from "mongoose"; // Importing mongoose to connect to MongoDB

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI); // Connecting to MongoDB
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB", error.message);
  }
};

export default connectToMongoDB; // Exporting the function to be used in the server.js file
