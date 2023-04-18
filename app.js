const express = require('express');
const cors = require("cors")
const app = express()
const port = 3000
const bodyParser = require ("body-parser")
const path = require ("path")

const mongoose = require('mongoose')

const userRoutes = require('./routes/user')
const sauceRoutes = require('./routes/Sauces')

app.use(cors())
app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


app.use ((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Headers','Origin, X-Request-Width, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
    next();
})

//Connection à Atlas
const uri = `mongodb+srv://Tristan:Dgar9M916dxGsCkf@piquante.w5bvmpz.mongodb.net/?retryWrites=true&w=majority`


mongoose.connect(uri)
    .then(()=>console.log("Connecté à MongoDB"))
        .catch((err)=> console.log("Erreur de connexion à MogoDB", err))
//Routes
app.listen(port, ()=> console.log("Lecture sur le port : " + port))
app.use("/api/auth", userRoutes);
app.use("/api/sauces", sauceRoutes);
app.use("/images", express.static(path.join(__dirname, 'images')))

module.exports = app;

