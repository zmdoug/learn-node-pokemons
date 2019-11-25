import User from '../models/user';
import * as bcrypt from 'bcryptjs'; 
import jwt from 'jsonwebtoken';


class UserController {
  async create(req, res, next) {
    
    if(!req.body.name || !req.body.email || !req.body.password) {
      res.status(400).json({
        status: "error",
        message: "All fields are required."
      })
    }
    
    const userExists = await User.findOne({
      email: req.body.email
    });
    
    if(userExists) {
      return res.status(400).json({
        status: "error",
        message: "User already exists."
      });
    }
    
    await User.create({ 
      name: req.body.name, 
      email: req.body.email, 
      password: req.body.password 
    }, function (err, result) {
      if (err) next(err);
      else
      return res.json({
        status: "success", 
        message: "New user created.", 
        data: result
      });   
    });
  }
  
  async update(req, res) {
    const { email, oldPassword } = req.body;
    
    const user = await User.findById(req.userId);
    
    if(email !== user.email) {
      const userExists = await User.findOne({ email });
      
      if(userExists) {
        return res.status(400).json({
          status: "error", 
          message: "User already exists."
        });   
      }
    }
    
    if(!(await bcrypt.compareSync(req.body.oldPassword, user.password))) {
      return res.status(401).json({
        status: "error", 
        message: "Password does not match."
      }); 
    }
    
    const { id, name } = await User.findOneAndUpdate({ _id: req.userId }, req.body, {new: true});
    
    return res.json({
      status: "success",
      message: "User updated.",
      data: { id, name, email }
    });
    
  }
  
}

export default new UserController();