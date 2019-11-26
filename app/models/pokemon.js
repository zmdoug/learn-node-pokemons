import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PokemonSchema = new Schema({
  name: {
    type: String,
    trim: true,  
    required: true,
  },
  habilities: {
    type: Array
  },
  Atack: {
    type: Number
  },
  Defense: {
    type: Number
  },
  hp: {
    type: Number
  }
});


export default mongoose.model('Pokemon', PokemonSchema);
