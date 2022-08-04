const mongoose = require('mongoose')

const connectDB = async() => {
    try {
       const cnx = await mongoose.connect(process.env.MONGO_URI)
       console.log(`MongoDB connected: ${cnx.connection.host}`)
    } catch (error) {
        console.error(error)
        process.exit(1)
    }

}

module.exports = connectDB