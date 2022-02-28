import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import userRoutes from './routes/users.js'
import authRoutes from './routes/auth.js'


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

// database connection
mongoose.connect("mongodb://localhost:27017/merolancer", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})



// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Listening on port ${port}...`));





