const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/DevStaffingdb',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Conected to Developer Staffing DB")
}).catch((err)=>{
    console.log(err)
})