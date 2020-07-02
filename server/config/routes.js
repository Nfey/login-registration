const path = require('path');
const users = require('../controllers/users');
module.exports = app => {
    app.get('/api/users', users.authenticateToken, (req, res) => users.getAll(req, res));
    app.all('*', (req, res, next) => {
        res.sendFile(path.resolve('../client/dist/client/index.html'));
    });
}
