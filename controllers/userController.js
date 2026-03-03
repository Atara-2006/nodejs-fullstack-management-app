const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res, next) => {
    try {
        const { username, password, role } = req.body;
        const userExists = await User.findOne({ username });
        
        if (userExists) {
            const error = new Error("שם המשתמש כבר קיים");
            error.statusCode = 400;
            return next(error); 
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            password: hashedPassword,
            role: role || 'customer'
        });

        await newUser.save();
        res.status(201).send("המשתמש נוצר בהצלחה!");
    } catch (err) {
        next(err);
    }
};

exports.login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            const error = new Error("פרטי התחברות שגויים");
            error.statusCode = 401;
            return next(error);
        }

        const secret = process.env.JWT_SECRET || 'ArtWhisper_Super_Secret_998877';
        const token = jwt.sign(
            { id: user._id, role: user.role }, 
            secret, 
            { expiresIn: '1h' }
        );
        res.json({ token }); 
    } catch (err) {
        next(err);
    }
};