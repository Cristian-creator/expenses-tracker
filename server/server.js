const express = require('express');
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('Connected to DB'.cyan.underline.bold))

// Middlewares
app.use(express.json());
app.use(morgan('dev'));

const transactionsRoutes = require('./routes/transactions');
app.use('/transactions', transactionsRoutes);

app.listen(port, () => console.log(`Listening on port ${port}`.yellow.bold))