const Painting = require('../models/Painting');

exports.getAllPaintings = async (req, res, next) => {
    try {
        const paintings = await Painting.find().populate('artist', 'username');
        res.status(200).render('index', { paintings });
    } catch (err) {
        next(err); 
    }
};

exports.createPainting = async (req, res, next) => {
    try {
        const { title, description, price } = req.body;
        const newP = new Painting({
            title, 
            description, 
            price,
            imageUrl: `/images/${req.file.filename}`,
            artist: req.user.id
        });
        await newP.save();
        res.status(201).json(newP);
    } catch (err) {
        next(err);
    }
};

exports.updatePainting = async (req, res, next) => {
    try {
        const painting = req.painting; 
        Object.assign(painting, req.body);
        const updated = await painting.save();
        res.status(200).json(updated);
    } catch (err) {
        next(err);
    }
};

exports.deletePainting = async (req, res, next) => {
    try {
        await req.painting.deleteOne(); 
        res.status(200).send("היצירה נמחקה בהצלחה");
    } catch (err) {
        next(err);
    }
};

exports.getPaintingById = async (req, res) => {

    res.status(200).json(req.painting);
};