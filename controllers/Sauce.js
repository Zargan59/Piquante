const Sauce = require("../Model/Sauce")
const express = require("express")
const app = express()
app.use(express.json())

//Route post 
exports.newSauce = (req, res, next) => {

    console.log("req.body");
    const sauceObject = JSON.parse(req.body.sauce);
    delete sauceObject._id;

    const sauce = new Sauce({
        ...sauceObject,
        likes: 0,
        dislikes: 0,
        usersLiked: [],
        usersDisliked: [],
        // imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`
    })

    sauce.save()
        .then(() => { 
            console.log('Nouvelle sauce sauvegardé')
            res.status(201).json({ message: "Sauce enregistré ! " }) })
           
        .catch(error => { res.status(400).json({ error }) })


}

//GET
exports.allSauces = (req, res, next) => {


    const test = [
        {
            userid :'64182b8b7e2d0adacd6b12e5',
            name : 'Kipik',
            manufacturer : 'Diablo',
            description : 'Qui pique fort',
            mainPepper : 'Poivre',
            imageUrl: "Poet",
            heat : 4,
            likes: 0,
            dislikes: 0,
        }
    ]
    // Sauce.find()
    //     .then(() => res.status(200).json({ message: 'Sauce enregistré' }))
    //     .catch((error) => res.status(400).json({ error }))
}
