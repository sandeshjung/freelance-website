require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');

const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const becomeHirer= require("./routes/becomeHirer")
const freelancer = require("./routes/freelancer");
const postJob = require('./routes/job');


// database connection
mongoose.connect("mongodb://localhost:27017/merolancer", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/update", becomeHirer);
app.use("/api/category", freelancer);
app.use("/api/post", postJob);

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Listening on port ${port}...`));



// import express from "express"
// import cors from "cors"
// import mongoose from "mongoose"
// import userRoutes from './routes/users.js'
// import authRoutes from './routes/auth.js'
// import Jwt from "jsonwebtoken"

// const app = express()
// app.use(express.json())
// app.use(express.urlencoded({extended: true}))
// app.use(cors())

// // database connection
// mongoose.connect("mongodb://localhost:27017/merolancer", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }, () => {
//     console.log("DB connected")
// })



// // routes
// app.use("/api/users", userRoutes);
// app.use("/api/auth", authRoutes);

// const port = process.env.PORT || 5000;
// app.listen(port, console.log(`Listening on port ${port}...`));





