import User from '../models/user';
import Pokemon from '../models/pokemon';
import mongoose from 'mongoose';
import { ObjectId } from 'bson';

class UserPokemonController {
  async get(req, res, next) {
    const user = await User.findById(req.userId);
    res.json(user.pokemons)
  }
  
  async create(req, res, next) {
    const user = await User.findById(req.userId);
        
    if(!mongoose.Types.ObjectId.isValid(req.body.pokemonId)) {
      return res.status(400).json({
        status: "error",
        message: "Pokemon not found."
      });
    }
    
    const pokemon = await Pokemon.findById(req.body.pokemonId);
    
    if(!user) {
      return res.status(401).json({
        status: "error",
        message: "User not found."
      });
    }
    
    if(!pokemon) {
      return res.status(400).json({
        status: "error",
        message: "Pokemon not found."
      });
    }
    
    const userPokemons = await User.findOne({ _id: req.userId}, 
      {'pokemons':{$elemMatch: {'_id': new ObjectId(req.body.pokemonId)}}});
      
      if(userPokemons.pokemons.length > 0) {
        return res.json({
          status: "error",
          message: "You already have this pokemon."
        });
      }
      
      user.pokemons.push(pokemon);
      await User.findOneAndUpdate({ _id: req.userId }, user);
      res.json(user.pokemons)
    }
    
    async delete(req, res, next) {
      let user = await User.findById(req.userId);
      
      user.pokemons = user.pokemons.filter(function(item) { 
        return String(item._id) !== req.body.pokemonId;  
      });
      
      await User.findOneAndUpdate({ _id: req.userId }, user);
      res.json(user.pokemons)
    }
    
    
  }
  
  export default new UserPokemonController();