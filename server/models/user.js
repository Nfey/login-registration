var mongoose = require('../config/mongoose');

var UserSchema = new mongoose.Schema({
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
const User = mongoose.model("User", UserSchema);
module.exports = User;
