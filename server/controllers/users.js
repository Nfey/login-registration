const User = require('../models/user');
var jwt = require('jsonwebtoken');
module.exports = {
    getAll: (req, res) => {
        User.find()
            .then(users => res.json(users))
            .catch(e => res.status(422).json(e));
    },
    authenticateToken: (req, res, next) => {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (token == null) return res.sendStatus(401);
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) return res.sendStatus(401);
            req.user = user;
            next();
        });
    }
}
