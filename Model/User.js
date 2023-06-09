require('dotenv').config
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
mongoose.set('strictQuery', true);


const UserSchema = mongoose.Schema({
    email: { type: String, require: true,  unique : true  },
    password: { type: String, require: true }
})


UserSchema.plugin(uniqueValidator);
module.exports = mongoose.model("User", UserSchema)
