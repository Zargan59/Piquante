const User = require ("../Model/User")
const bcrypt = require ('bcrypt')
const jwt = require('jsonwebtoken')

 exports.signup = (req, res, next) =>{
 bcrypt.hash(req.body.password, 10)
     .then(hash => {
         const user = new User({
             email: req.body.email,
             password : hash
         })
         user.save()
             .then(()=>{
                console.log("Utilisateur créé");
                res.status(201).json({message: 'Utilisateur créer'})})
                 .catch(err => res.status(400).json({err}))
     })
         .catch(err => res.status(500).json({err}))
 }

 exports.login = (req, res, next) =>{
     User.findOne({email: req.body.email})
         .then(user =>{
             if(user === null){
                 res.status(401).json({message : 'Identifiant ou mot de passse incorect'})
             } else{
                 bcrypt.compare(req.body.password, user.password)
                 .then(valid => {
                     if(!valid) {
                         res.status(401).json({message : 'Identifiant ou mot de passse incorect'})
                     } else {
                         res.status(200).json({
                             userId: user._id,
                             token : jwt.sign(
                                {userId: user._id},
                                "RANDOM_TOKEN_SECRET",
                                {expiresIn: '24h'}
                             )
                         })
                     }
                 })
                 .catch(error =>{res.status(501).json({error})})
             }
         })
             .catch(err =>{res.status(502).json({err})})
 }