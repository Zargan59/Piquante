const express = require('express');
const router = express.Router();

// const auth = require('auth')
const auth = require("../Middleware/auth")
const multer = require("../Middleware/multer-config")

const sauceCtrl = require("../controllers/Sauce");

router.post('/', auth, multer, sauceCtrl.createSauce);
router.put('/:id', auth, multer, sauceCtrl.modifySauce);
router.delete('/:id', auth,multer, sauceCtrl.deleteSauce);
router.post('/:id/like', auth,multer, sauceCtrl.likeOrNot);

router.get('/', auth, sauceCtrl.getAllSauces);
router.get('/:id', auth, sauceCtrl.getOneSauce);

module.exports = router;