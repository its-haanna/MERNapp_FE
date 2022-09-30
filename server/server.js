require('dotenv').config()
const express = require("express")
const mongoose = require('mongoose')
const app = express()
const workoutsRoutes = require('./routes/workouts')

app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

app.use('/api/workouts', workoutsRoutes)

mongoose.connect(process.env.MONGO_URI).then(() => {
      app.listen(process.env.$PORT || PORT, () => {
      console.log('connected to db and listening on port 4000')
        })
    })
    .catch((error) => {
  console.log(error)
})