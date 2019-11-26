import User from '../app/models/user';
import Pokemon from '../app/models/pokemon';
import mongoose from 'mongoose';

class Database {
  constructor() {
    this.mongo();
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      'mongodb://192.168.99.100:27017/pokeapi',
      { useNewUrlParser: true, useFindAndModify: true }
    )
  }
}

export default new Database();