const express = require('express');
const router = express.Router();
//Rajouter le modele utilisateur
const userCtrl = require("../controllers/user")

// const passwordValidator = require('../Middleware/password-validator');


router.post ("/signup", userCtrl.signup)
router.post("/login",  userCtrl.login)

module.exports = router;