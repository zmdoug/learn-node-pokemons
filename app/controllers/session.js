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
        if(bcrypt.compareSync(req.body.password, userInfo.password)) {
          const token = jwt.sign({ id: userInfo._id }, authConfig.secret, { 
            expiresIn: authConfig.expiresIn 
          });
          const { name, email } = userInfo;
          res.json({ status: "success", message: "User authorized.", data:{ user: { name, email }, token:token }});
        }else{
          res.json({ status: "error", message: "Invalid email/password.", data:null});
        }
      }
    });
  }
  
}

export default new SessionController();
