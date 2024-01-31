const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://admin:2GDz9pddchpSNPb7@cluster0.1gk0os9.mongodb.net/businesscard')
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
