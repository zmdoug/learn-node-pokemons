import { Router } from 'express';
import UserController from '../app/controllers/users';
import UserPokemonController from '../app/controllers/userPokemon';
import PokemonController from '../app/controllers/pokemon';
import SessionController from '../app/controllers/session';
import authMiddlewares from '../app/middlewares/auth'
const routes = new Router();

/**
* @api {post} /users Create an user
* @apiGroup Users
* @apiParam {string} name User's Name
* @apiParam {string} email User's Email
* @apiParam {string} password User's Password
* @apiSuccess {Object[]} response User info
* @apiSuccessExample {json} Success
* HTTP/1.1 200 OK
* {
* "status": "success",
* "message": "New user created.",
* "data": {
*  "_id": "5ddc6cea4ba265169cb3925c",
*  "name": "Nome usuário",
*  "email": "email@gmail.com",
*  "password": "$2a$10$CC01vTbt6jq0.0hZ63Ex3usPwPE3QH3fdYd3Keh6H26RXtZ32sAVS",
*  "pokemons": [],
*  "__v": 0
*  }
* }
* @apiErrorExample {json} All fields are required
* HTTP/1.1 400 All fields are required
* { 
* "status: "error",
*  "message": "All fields are required."
* }
* @apiErrorExample {json} Not Found
*    HTTP/1.1 404 Not Found
*/
routes.post('/users', UserController.create);
/**
* @api {post} /auth Authenticate
* @apiGroup Users
* @apiParam {string} email User's Email
* @apiParam {string} password User's Password
* @apiSuccess {Object[]} response Access token
* @apiSuccessExample {json} Success
* HTTP/1.1 200 OK
* {
*  "status": "success",
*  "message": "User authorized.",
*  "data": {
*    "user": {
*      "name": "Nome usu[ario",
*      "email": "email@gmail.com"
*    },
*    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI..."
*  }
*}
* @apiErrorExample {json} Invalid email/password.
* HTTP/1.1 401 Invalid email/password.
* {
* "status": "error",
*  "message": "Invalid email/password.",
*  "data": null
* }
*/
routes.post('/auth', SessionController.auth);

routes.use(authMiddlewares);
/* routes that need authentication */

/**
* @api {put} /users Update an user
* @apiGroup Users
* @apiParam {string} name User's name
* @apiParam {string} email User's email
* @apiParam {string} password User's new password
* @apiParam {string} oldPassword User's current password
* @apiSuccess {Object[]} response Updated user info
* @apiSuccessExample {json} Success
* HTTP/1.1 200 OK
* {
*  "status": "success",
*  "message": "User updated.",
*  "data": {
*    "id": "5ddc5697e1ef8d0d2075144e",
*    "name": "Nome usuário",
*    "email": "email@gmail.com"
*  }
* }
* @apiErrorExample {json} Token validation error.
* HTTP/1.1 401 Token validation error.
* {
*  "status": "error",
*  "message": "Token validation error"
* }
* @apiErrorExample {json} Password does not match.
* HTTP/1.1 401 Password does not match.
* {
*  "status": "error",
*  "message": "Password does not match."
* }
*/
routes.put('/users', UserController.update);

/* user's Pokemon */

/**
* @api {get} /myPokemons List user's pokemons
* @apiGroup UserPokemon
* @apiSuccess {Object[]} response user's pokemons
* @apiSuccessExample {json} Success
* HTTP/1.1 200 OK
* [
*  {
*    "_id": "5ddc67fdb03d5014394c2b03",
*    "name": "picachu",
*    "habilities": {
*      "hability": "choque do trovão",
*      "damage": 20
*    },
*    "hp": 50,
*    "__v": 0
*  }
* ]
* @apiErrorExample {json} Token validation error.
* HTTP/1.1 401 Token validation error.
* {
*  "status": "error",
*  "message": "Token validation error"
* }
*/
routes.get('/myPokemons', UserPokemonController.get);
/**
* @api {get} /capture Capture a pokemon
* @apiGroup UserPokemon
* @apiParam {string} pokemonId Pokemon id to capture
* @apiSuccess {Object[]} response captured pokemon info
* @apiSuccessExample {json} Captured
* HTTP/1.1 200 OK
* [
*   {
*     "habilities": [
*       {
*         "hability": "chicotada",
*         "damage": 20
*       }
*     ],
*     "_id": "5ddc67fdb03d5014394c2b03",
*     "name": "bulbassaur",
*     "hp": 50,
*     "__v": 0
*   }
* ]
* @apiSuccessExample {json} Already have
* {
*  "status": "error",
*  "message": "You already have this pokemon."
* }
* @apiErrorExample {json} Token validation error.
* HTTP/1.1 401 Token validation error.
* {
*  "status": "error",
*  "message": "Token validation error"
* }
*/
routes.post('/capture', UserPokemonController.create);
/**
* @api {delete} /escape Delete a pokemon
* @apiGroup UserPokemon
* @apiParam {string} pokemonId Pokemon id to delete
* @apiSuccess {Object[]} response updated pokemon user's list
* @apiSuccessExample {json} Deleted
* HTTP/1.1 200 OK
* []
* @apiErrorExample {json} Token validation error.
* HTTP/1.1 401 Token validation error.
* {
*  "status": "error",
*  "message": "Token validation error"
* }
*/
routes.delete('/escape', UserPokemonController.delete);

/* Pokemons */

/**
* @api {get} /pokemonList List all existing pokemon's
* @apiGroup Pokemon
* @apiSuccess {Object[]} response existing pokemon's list
* @apiSuccessExample {json} Success
* HTTP/1.1 200 OK
* [
* {
*    "habilities": [
*      {
*        "hability": "chicotada",
*        "damage": 20
*      }
*    ],
*    "_id": "5ddc67fdb03d5014394c2b03",
*    "name": "bulbassaur",
*    "hp": 50,
*    "__v": 0
*  }
* ]
* @apiErrorExample {json} Token validation error.
* HTTP/1.1 401 Token validation error.
* {
*  "status": "error",
*  "message": "Token validation error"
* }
*/
routes.get('/pokemonList', PokemonController.list);

/**
* @api {get} /pokemonList List pokemon by id
* @apiGroup Pokemon
* @apiParam {string} pokemonId Pokemon id to get info
* @apiSuccess {Object[]} response existing pokemon
* @apiSuccessExample {json} Success
* HTTP/1.1 200 OK
* {
*    "habilities": [
*      {
*        "hability": "chicotada",
*        "damage": 20
*      }
*    ],
*    "_id": "5ddc67fdb03d5014394c2b03",
*    "name": "bulbassaur",
*    "hp": 50,
*    "__v": 0
*  }
* @apiErrorExample {json} Token validation error.
* HTTP/1.1 401 Token validation error.
* {
*  "status": "error",
*  "message": "Token validation error"
* }
*/
routes.get('/pokemonById', PokemonController.get);

/**
* @api {post} /newPokemon Create an pokemon
* @apiGroup Pokemon
* @apiParam {string} name Pokemon's name
* @apiParam {Object[]} habilities Pokemon's habilities
* @apiParam {number} atack Pokemon's atack force
* @apiParam {number} defense Pokemon's defense power
* @apiParam {number} hp Pokemon's vitality
* @apiParamExample {json} Input
* {
*  "name": "bulbassaur",
*   "habilities": [{
*   "hability": "chicotada",
*  "damage": 20
*  }],
*  "atack": 20,
*  "defense": 15,
*  "hp": 50
}
* @apiSuccess {Object[]} response created pokemon info
* @apiSuccessExample {json} Success
* HTTP/1.1 200 OK
* {
*    "habilities": [
*      {
*        "hability": "chicotada",
*        "damage": 20
*      }
*    ],
*    "_id": "5ddc67fdb03d5014394c2b03",
*    "name": "bulbassaur",
*    "hp": 50,
*    "__v": 0
*  }
* @apiErrorExample {json} Token validation error.
* HTTP/1.1 401 Token validation error.
* {
*  "status": "error",
*  "message": "Token validation error"
* }
*/
routes.post('/newPokemon', PokemonController.create);

/**
* @api {put} /updatePokemon Update a pokemon info
* @apiGroup Pokemon
* @apiParam {string} pokemonId Pokemon id to update
* @apiSuccess {Object[]} response updated pokemon
* @apiSuccessExample {json} Success
* HTTP/1.1 200 OK
* {
*    "habilities": [
*      {
*        "hability": "chicotada",
*        "damage": 20
*      }
*    ],
*    "_id": "5ddc67fdb03d5014394c2b03",
*    "name": "bulbassaur",
*    "hp": 50,
*    "__v": 0
*  }
* @apiErrorExample {json} Token validation error.
* HTTP/1.1 401 Token validation error.
* {
*  "status": "error",
*  "message": "Token validation error"
* }
*/
routes.put('/updatePokemon', PokemonController.update);


export default routes;