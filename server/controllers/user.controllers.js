const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET_KEY



module.exports = {
  registerUser: async (req, res) => {
      try {
        const newUser = await User.create(req.body)
        const userToken = jwt.sign({ _id: newUser._id, Email: newUser.Email }, SECRET)
        res.status(201).cookie('userToken', userToken, { httpOnly: true, expires: new Date(Date.now() + 9000) }).json({successMessage:"User Created",user:newUser})
      } catch (err) {
        res.status(500).send({err})
      }
    },

  loginUser: async (req, res) => {
    const user = await User.findOne({Email:req.body.Email})
    console.log(user)
    if(!user){
      res.status(500).json({message:"Invalid email/password"})
    }
    try{
      const ispasswordvalid = await bcrypt.compare(req.body.password, user.password)
      console.log(ispasswordvalid)
      if(!ispasswordvalid){
        res.status(400).json({message:"Invalid email/password"})
      }else{
        const userToken = jwt.sign({ _id: user._id, email: user.Email }, SECRET)
        res.status(201).cookie('userToken', userToken, { httpOnly: true, expires: new Date(Date.now() + 9000) }).json({successMessage:"User logged in",user:user})
      }
    }catch(err){
      res.status(404)
      return;
    }
  },
  logoutuser: (req,res) => {
    try{
    res.clearCookie('userToken')
    res.json({sucess:'User logged out'})
    } catch{
      res.status(501).json({message: 'failed to logout'})
    }
  },
  getallusers: (req, res)=>{
    User.find()
    .then((result)=>{
      res.json(result)
    }).catch((err)=>{
      res.status(400).send({err})
    })
  },
  getOneUser: (req, res) => {
    User.findById(req.params.id)
        .then((result) => {
            res.json(result)
        })
        .catch((err) => {
            console.log(err)
        })
},
//
deleteuser: (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then((result) => {
            res.json(result)
        })
        .catch((err) => {
            console.log(err)
            res.status(400).json({ err });

        })
},
//
updateuser: (req, res) => {
    User.updateOne({ _id: req.params.id }, req.body, {runValidators:true})
        .then((result) => {
            res.json(result)
        })
        .catch((err) => {
            console.log(err)
        })
}
  }
