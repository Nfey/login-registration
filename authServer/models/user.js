var mongoose = require('../config/mongoose');
var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        minlength: 7
    },
    username: {
        type: String,
        unique: true,
        required: true,
        minlength: 2
    },
    passwordHash: {
        type: String,
    }
});
UserSchema.methods.hashPassword = function (password) {
    return bcrypt.hash(password, 10)
};
UserSchema.methods.validatePassword = function (password) {
    return bcrypt.compare(password, this.passwordHash);
};
const User = mongoose.model("User", UserSchema);
module.exports = User;
