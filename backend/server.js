import express from "express"; //importing express
import dotenv from "dotenv"; //importing dotenv
const app = express(); //creating an express app

dotenv.config(); //configuring the dotenv

const PORT = process.env.PORT || 5000; //port number

app.get("/", (req, res) => {
  //root route http://localhost:5000/
  res.send("API is running......");
});

app.listen(PORT, () => console.log("Server is running on port", PORT));
