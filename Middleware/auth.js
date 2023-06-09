const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]; 
        const decodedToken = jwt.verify(token, 'UkFORE9NX1RPS0VOX1NFQ1JFVA=='); 
        const userId = decodedToken.userId;      
        req.auth = {
            userId: userId,
          };   
        if (req.body.userId && req.body.userId !== userId) {
            throw 'User id non valable !';
        } else {
            next();
        }
    } catch(error){
        res.status(401).json({ error: new Error('Invalid request !')});
    }
};
