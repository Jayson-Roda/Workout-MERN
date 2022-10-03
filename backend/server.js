if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express = require('express');
const mongoose = require('mongoose');

const workoutRoutes = require('./routes/workoutRoutes');
const userRoutes = require('./routes/userRoutes');

// express app
const app = express();

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)


// connect to mongodb
mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Listening on port ${process.env.PORT}`)
        })
    })
    .catch((err) => {
        console.log(err)
    })