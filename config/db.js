const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        const dbURI = process.env.MONGO_URI || 'mongodb://localhost:27017/artGalleryDB';
        
        await mongoose.connect(dbURI);
        console.log('MongoDB connected successfully to Art Gallery DB');
    } catch (err) {
        console.error('Database connection error:', err.message);
        process.exit(1); 
    }
};

module.exports = connectDB;