const mongoose = require('mongoose');

// Connect to the db
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });

    // Log to the console that the db is connected
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
  } catch (error) {
    // Log error messages and exit
    console.log(`Error: ${error.message}`.red);
    process.exit(1);
  }
}

module.exports = connectDB;