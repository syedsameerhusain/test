const express = require('express');
const connectDB = require('./config/db');
const app = express();
connectDB();
app.get('/', (req, res, next) => res.send('api'));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {});
