const express = require('express');
const router = express.Router();
const paintingController = require('../controllers/paintingController');
const { verifyToken, isArtist, isOwnerOrAdmin, isAdmin } = require('../middleware/auth');
const upload = require('../middleware/upload');
const checkPaintingExists = require('../middleware/checkId'); 

router.get('/', paintingController.getAllPaintings);
router.get('/add', (req, res) => res.render('add-painting'));
router.get('/details/:id', checkPaintingExists, (req, res) => res.render('painting-details'));
router.get('/edit/:id', checkPaintingExists, (req, res) => res.render('edit-painting', { id: req.params.id }));


router.get('/api/:id', checkPaintingExists, paintingController.getPaintingById);

router.post('/add', verifyToken, isArtist, upload.single('image'), paintingController.createPainting);

router.put('/:id', verifyToken, isOwnerOrAdmin, checkPaintingExists, paintingController.updatePainting);

router.delete('/:id', verifyToken, isAdmin, checkPaintingExists, paintingController.deletePainting);

module.exports = router;