//const express = require ("express");
import express from "express";
import connectDB from "./config/database.js"; // "Import the default function connectDB from the file database.js inside the config folder.”

const app = express();
const PORT = process.env.PORT; //“Get the PORT value from environment settings and store it in a variable.”
connectDB();
app.listen(3000, () => {// call back function
    console.log(`server is running on port ${PORT}`);  // string interpolation ,injecting of dynamic value in static variable.
});
