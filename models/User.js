const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'נא להזין שם משתמש'],
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, 'נא להזין סיסמה'],
        minlength: 6
    },
    role: {
        type: String,
        enum: ['customer', 'artist', 'admin'], 
        default: 'customer'
    }
});

module.exports = mongoose.model('User', userSchema);