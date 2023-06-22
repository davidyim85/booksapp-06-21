require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);


mongoose.connection
    // .on('error', (err) => console.log(err.message))
    // .on('connected', () => console.log('connected'))
    // .on('disconnected', () => console.log('disconnected'))

module.exports = mongoose;