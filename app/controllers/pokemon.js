import User from '../models/user';
import Pokemon from '../models/pokemon';
import mongoose from 'mongoose';
import * as bcrypt from 'bcryptjs'; 
import jwt from 'jsonwebtoken';


class PokemonController {
  
  async list(req, res, next) {
    const pokemons = await Pokemon.find();
    return res.json(pokemons);
  }
  
  async get(req, res, next) {
    if(!req.body.pokemonId || !mongoose.Types.ObjectId.isValid(req.body.pokemonId)) {
      return res.status(400).json({
        status: "error",
        message: "Pokemon not found."
      });
    }
    const pokemon = await Pokemon.findById(req.body.pokemonId);
    if(!pokemon) {
      return res.status(400).json({
        status: "error",
        message: "Pokemon not found."
      });
    }
    return res.json(pokemon);
  }
  
  async create(req, res, next) {
    const pokemon = await Pokemon.create(req.body);
    return res.json(pokemon);
  }
  
  async update(req, res, next) {
    if(!req.body.pokemonId || !mongoose.Types.ObjectId.isValid(req.body.pokemonId)) {
      return res.status(400).json({
        status: "error",
        message: "Pokemon not found."
      });
    }
    const pokemon = await Pokemon.findOneAndUpdate({ _id: req.body.pokemonId}, req.body, {new: true});
    if(!pokemon) {
      return res.status(400).json({
        status: "error",
        message: "Pokemon not found."
      });
    }
    
    return res.json(pokemon);
  }
  
}

export default new PokemonController();