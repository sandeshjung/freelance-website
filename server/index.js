import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import userRoutes from './routes/users.js'
import authRoutes from  './routes/auth.js'

const app= express();

//middlewares
app.use(express.json());
app.use(cors());

app.use('/api/users', userRoutes)
app.use('/api/auth', authRoutes)




const CONNECTION_URL ='mongodb+srv://merolancer:merolancer123@merolancer.y7fbo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) =>console.log(error.message));


