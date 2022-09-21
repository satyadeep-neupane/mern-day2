const express = require('express');
const mongoose = require('mongoose');
const app = express();

// dotenv
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.DATABSE_URL);

const db = mongoose.connection;
db.on('error', () => console.log('Error connecting to MongoDB'));
db.once('open', () => console.log('Connected..'))

// require
const logger = require('./app/middlewares/logger');
const bookRoute = require('./app/routes/route.book');

// middleware
app.use(logger);
app.use(express.json());

// routes
app.use('/books', bookRoute);


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});