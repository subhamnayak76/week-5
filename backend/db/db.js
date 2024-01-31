const mongoose = require("mongoose");
mongoose.connect
const userSchema = new mongoose.Schema({
    Name : String,
    Description : String,
    Intrest : String,

})
// const admin
const User = mongoose.model('User',userSchema)

module.exports = {
    User
}
