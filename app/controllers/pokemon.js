import User from '../models/user';
import Pokemon from '../models/pokemon';
import * as bcrypt from 'bcryptjs'; 
import jwt from 'jsonwebtoken';


class PokemonController {
  
  async list(req, res, next) {
    const pokemons = await Pokemon.find();
    return res.json(pokemons);
  }
  
  async get(req, res, next) {
    const pokemon = await Pokemon.findById(req.body._id);
    return res.json(pokemon);
  }
  
  async create(req, res, next) {
    const pokemon = await Pokemon.create(req.body);
    return res.json(pokemon);
  }
  
  async update(req, res, next) {
    const pokemon = await Pokemon.findOneAndUpdate({ _id: req.body._id}, req.body, {new: true});
    return res.json(pokemon);
  }
  
}

export default new PokemonController();