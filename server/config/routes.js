const path = require('path');
const users = require('../controllers/users');
module.exports = app => {
    app.get('/api/users', users.authenticateToken, (req, res) => users.getAll(req, res));
    app.get('/api/users/:id', users.authenticateToken, (req, res) => users.getUserByParamId(req, res));
    app.get('/api/user', users.authenticateToken, (req, res) => users.getUserByTokenId(req, res));
    app.all('*', (req, res, next) => {
        res.sendFile(path.resolve('../client/dist/client/index.html'));
    });
}
