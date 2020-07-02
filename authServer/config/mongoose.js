const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/login_registration", { useNewUrlParser: true });
module.exports = mongoose;