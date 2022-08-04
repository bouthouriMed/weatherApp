const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.port
const connectDB = require('./config/db')

connectDB()

const app = express()


app.use(express.json())
app.use('/api/city', require('./routes/cityRoute'))

app.listen(port, () => console.log(`Server running on port ${port}`))