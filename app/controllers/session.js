import User from '../models/user';
import * as bcrypt from 'bcryptjs'; 
import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth'

class SessionController {
  
  async auth(req, res, next) {
    await User.findOne({ email: req.body.email }, function(err, userInfo){
      if (err) {
        next(err);
      } else {
        if(!userInfo) {
         return res.status(400).json({ 
            status: "error", 
            message: "Invalid email/password.", 
            data:null
          });
        }
        if(bcrypt.compareSync(req.body.password, userInfo.password)) {
          const token = jwt.sign({ id: userInfo._id }, authConfig.secret, { 
            expiresIn: authConfig.expiresIn 
          });
          const { name, email } = userInfo;
          return res.json({ 
            status: "success", 
            message: "User authorized.", 
            data:{ 
              user: { name, email }, 
              token:token 
            }
          });
        }else{
         return res.status(400).json({ 
            status: "error", 
            message: "Invalid email/password.", 
            data:null
          });
        }
      }
    });
  }
  
}

export default new SessionController();
