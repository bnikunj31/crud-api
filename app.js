// Packages
const express = require('express');
const dotenv = require('dotenv').config();
const methodOverride = require('method-override');

// Files Imported
const connectDB = require('./config/db');
const routes = require('./routes/User');


// Server Details
const app = express();
connectDB();
const PORT = process.env.PORT || 4000;    //Port

// Middlewares
app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.set('view engine', 'ejs');   //Setting view Engine


// Routes
app.use('/',routes);

app.listen(PORT,()=>console.log(`Server is Running on ${PORT}`));