const jwt = require("jsonwebtoken")
const secret = process.env.SECRET_KEY
module.exports.secret = secret;
module.exports.authenticate = (req, res, next) => {
  jwt.verify(req.cookies.userToken, secret, (err, payload) =>{
    console.log(req.cookies)
    if(err) {
      console.log('authentication error')
      res.status(401).json({verified: false});
    }else {
      console.log('authenicated!')
      next();
    }
  });
}