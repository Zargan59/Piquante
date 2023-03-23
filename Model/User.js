require('dotenv').config
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
mongoose.set('strictQuery', true);


// //Connection à Atlas
// const uri = `mongodb+srv://Tristan:Dgar9M916dxGsCkf@piquante.w5bvmpz.mongodb.net/?retryWrites=true&w=majority`


// mongoose.connect(uri)
//     .then(()=>console.log("Connecté à MongoDB"))
//         .catch((err)=> console.log("Erreur de connexion à MogoDB", err))
// //Modèle utilisateur (utiliser mongoose)

const UserSchema = mongoose.Schema({
    email: { type: String, require: true,  unique : true  },
    password: { type: String, require: true }
})


UserSchema.plugin(uniqueValidator);
module.exports = mongoose.model("User", UserSchema)
