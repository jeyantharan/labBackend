const express = require("express");
const app = express();
const mongoose = require("mongoose");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static("public"));

// app.post('/register',(req,res)=>{
    
// })

const labRoute = require("./Route/Lab");
const userRoute = require("./Route/User");
const slotRoute = require("./Route/TimeSlot");



app.use("/lab", labRoute);
app.use("/user", userRoute);
app.use("/slot", slotRoute);



const uri = "mongodb://localhost:27017/LabReservation";
const PORT = process.env.PORT || 8080;
let connection = mongoose.connect(uri);

connection
  .then(() => {
    app.listen(PORT, () => {
      console.log("Database connection established");

      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("connection failed", err);
  });