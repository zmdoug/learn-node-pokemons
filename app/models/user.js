import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
const saltRounds = 10;

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    trim: true,  
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true
  },
  password: {
    type: String,
    trim: true,
    required: true
  }
});

// hashing user's password before save
UserSchema.pre('save', function(next){
  this.password = bcrypt.hashSync(this.password, saltRounds);
  next();
});

UserSchema.pre('update', function(next){
  this.password = bcrypt.hashSync(this.password, saltRounds);
  next();
});

UserSchema.pre('findOneAndUpdate', function(next) {
  const update = this.getUpdate();
  if (update.password) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(update.password, salt, (err, hash) => {
        this.getUpdate().password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

export default mongoose.model('User', UserSchema);
