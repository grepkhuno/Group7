const express = require('express')
const app =express()
const PORT = 8000
const cors = require('cors')

require('./config/mongoose.config')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors({
    origin  : 'http://localhost:3000',
}))
const DeveloperRoutes = require('./routes/developers.routes')
DeveloperRoutes(app)
const ContactRoutes = require('./routes/contactTb.routes')
ContactRoutes(app)

app.listen(PORT,()=>{
    console.log(`Server is up and running on ${PORT}`)
})