const express = require('express');
const router = express.Router();

// const auth = require('auth')
const auth = require("../Middleware/auth")
const multer = require("../Middleware/multer-config")
const sauceCtrl = require("../controllers/Sauce");
// const upload = multer().single("image")

router.get('/', sauceCtrl.allSauces)
// router.get('/:id', auth, sauceCtrl.selectedSauce )
router.post('/', auth,multer, sauceCtrl.newSauce)
// router.put('/:id', auth, multer, sauceCtrl.modifSauce)
// router.delete('/:id', auth, sauceCtrl.deleteSauce)
// router.post('/:id/like',auth, sauceCtrl.likeSauce)


module.exports = router;