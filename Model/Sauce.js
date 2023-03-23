const mongoose = require('mongoose')


//Création du modèle de sauce 
const SauceSchema = mongoose.Schema({
    userid :{type : String, require : true},
    name : {type: String, require : true},
    manufacturer : {type: String, require : true},
    description : {type: String, require : true},
    mainPepper : {type: String, require : true},
    imageUrl: {type: String, require : true},
    heat : {type: Number, require : true, min:0, max: 10},
    likes: {type: Number, require : true, default : 0},
    dislikes: {type: Number, require : true, default : 0},
    usersLiked : {type:[String], require : true, default : [] },
    usersDisliked : {type:[String], require : true, default : []} ,
})
module.exports = mongoose.model("Sauce", SauceSchema)