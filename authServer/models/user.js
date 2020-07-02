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
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    passwordHash: {
        type: String,
    }
});
UserSchema.methods.setPassword = function (password) {
    bcrypt.hash(password, 10)
        .then(hashed_password => {
            this.passwordHash = hashed_password;
            this.save();
        })
        .catch(error => {
            console.log(error);
        });
};
UserSchema.methods.validatePassword = function (password) {
    return bcrypt.compare(password, this.passwordHash);
};
const User = mongoose.model("User", UserSchema);
module.exports = User;
