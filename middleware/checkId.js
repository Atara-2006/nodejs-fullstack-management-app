const Painting = require('../models/Painting');

const checkPaintingExists = async (req, res, next) => {
    try {
        const painting = await Painting.findById(req.params.id).populate('artist');

        if (!painting) {
            return res.status(404).send("היצירה המבוקשת לא נמצאה בגלריה");
        }

        req.painting = painting;
        next();
    } catch (err) {
        res.status(400).send("פורמט מזהה (ID) לא תקין");
    }
};

module.exports = checkPaintingExists;