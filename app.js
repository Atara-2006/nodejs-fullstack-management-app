const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
require('dotenv').config();

const connectDB = require('./config/db'); 
const userRoutes = require('./routes/userRoutes');
const paintingRoutes = require('./routes/paintingRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

connectDB();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); 
app.use(methodOverride('_method'));


app.use('/users', userRoutes);
app.use('/paintings', paintingRoutes);
app.use(errorHandler);

app.get('/', (req, res) => {
    res.redirect('/paintings');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});