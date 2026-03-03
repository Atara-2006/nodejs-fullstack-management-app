const mongoose = require('mongoose');

const paintingSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, default: "אין תיאור זמין ליצירה זו" }, 
    price: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    artist: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Painting', paintingSchema);