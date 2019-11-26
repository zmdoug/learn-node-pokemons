import User from '../models/user';
import Pokemon from '../models/pokemon';
import { ObjectId } from 'bson';

class UserPokemonController {
  async get(req, res, next) {
    const user = await User.findById(req.userId);
    res.json(user.pokemons)
  }
  
  async create(req, res, next) {
    const user = await User.findById(req.userId);
    const pokemon = await Pokemon.findById(req.body.pokemonId);
    
   const userPokemons = await User.findOne({ _id: req.userId}, 
    {'pokemons':{$elemMatch: {'_id': new ObjectId(req.body.pokemonId)}}});
   
    if(userPokemons.pokemons.length > 0) {
      return res.json({
        status: "error",
        message: "You already have this pokemon."
      })
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