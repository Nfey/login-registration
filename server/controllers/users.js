const User = require('../models/user');
var jwt = require('jsonwebtoken');
const ROLES = require('../config/roles');
module.exports = {
    getAll: (req, res) => {
        User.find()
            .then(users => res.json(users))
            .catch(e => res.status(422).json(e));
    },
    getUserByParamId: (req, res) => {
        User.findById(req.params.id)
            .then(user => res.json(user))
            .catch(e => res.status(422).json(e));
    },
    getUserByTokenId: (req, res) => {
        User.findById(req.user._id)
            .then(user => res.json(user))
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
    },
    deleteUser: (req, res) => {
        User.findByIdAndRemove(req.params.id, { useFindAndModify: false })
            .then(result => res.json(result))
            .catch(e => res.status(422).json(e));
    },
    checkIfUserIsAdmin: (req, res, next) => {
        User.findById(req.user._id)
            .then(user => {
                if (user.role == ROLES.ADMIN) {
                    next();
                }
                else {
                    return res.sendStatus(403);
                }
            })
            .catch(e => res.status(422).json(e));
        
    }
}
