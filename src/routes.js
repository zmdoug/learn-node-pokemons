import { Router } from 'express';
import UserController from '../app/controllers/users';
import UserPokemonController from '../app/controllers/userPokemon';
import PokemonController from '../app/controllers/pokemon';
import SessionController from '../app/controllers/session';
import authMiddlewares from '../app/middlewares/auth'
const routes = new Router();

routes.post('/users', UserController.create);
routes.post('/auth', SessionController.auth);

routes.use(authMiddlewares);
/* routes that need authentication */
routes.put('/users', UserController.update);

/* user's Pokemon */
routes.get('/myPokemons', UserPokemonController.get);
routes.post('/capture', UserPokemonController.create);
routes.delete('/escape', UserPokemonController.delete);

/* Pokemons */
routes.get('/pokemonList', PokemonController.list);
routes.get('/pokemonById', PokemonController.get);
routes.post('/newPokemon', PokemonController.create);
routes.put('/updatePokemon', PokemonController.update);


export default routes;