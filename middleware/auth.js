const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    console.log("--- פנייה חדשה הגיעה לשרת ---");
    const authHeader = req.headers['authorization'] || req.headers['Authorization'];
    
    if (!authHeader) {
        console.log("חסימה: לא נשלח Header של Authorization");
        return res.status(401).send("גישה חסומה: לא נשלח טוקן");
    }

    const token = authHeader.split(' ')[1];
    try {
        const secret = process.env.JWT_SECRET || 'ArtWhisper_Super_Secret_998877';
        const decoded = jwt.verify(token, secret);
        req.user = decoded;
        console.log("אימות הצליח! משתמש:", decoded.role);
        next();
    } catch (err) {
        console.log("חסימה: הטוקן לא תקין:", err.message);
        res.status(401).send("טוקן לא תקף");
    }
};

const isArtist = (req, res, next) => {
    console.log("בודק הרשאת אמן/מנהל עבור:", req.user.role);
    if (req.user.role === 'artist' || req.user.role === 'admin') {
        next();
    } else {
        console.log("חסימה: למשתמש אין הרשאת אמן");
        res.status(403).send("אין לך הרשאה להוסיף יצירות");
    }
};


module.exports = { verifyToken, isArtist, isOwnerOrAdmin: (req,res,next)=>next(), isAdmin: (req,res,next)=>next() };