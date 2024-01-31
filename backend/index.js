const express = require("express")
const app = express()
const cors = require('cors');
// const {User} = require('./db/db.js')
const userRouter = require('./routes/user')
// const adminRouter = require('./routes/admin')
app.use(express.json())
app.use(cors())
app.use('/user',userRouter)
// app.use('/admin',adminRouter)

app.listen(3000,() =>{
    console.log("serving in the port 3000");
});