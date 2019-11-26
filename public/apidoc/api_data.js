define({ "api": [  {    "type": "get",    "url": "/pokemonList",    "title": "List all existing pokemon's",    "group": "Pokemon",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object[]",            "optional": false,            "field": "response",            "description": "<p>existing pokemon's list</p>"          }        ]      },      "examples": [        {          "title": "Success",          "content": "HTTP/1.1 200 OK\n[\n{\n   \"habilities\": [\n     {\n       \"hability\": \"chicotada\",\n       \"damage\": 20\n     }\n   ],\n   \"_id\": \"5ddc67fdb03d5014394c2b03\",\n   \"name\": \"bulbassaur\",\n   \"hp\": 50,\n   \"__v\": 0\n }\n]",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Token validation error.",          "content": "HTTP/1.1 401 Token validation error.\n{\n \"status\": \"error\",\n \"message\": \"Token validation error\"\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "./src/routes.js",    "groupTitle": "Pokemon",    "name": "GetPokemonlist"  },  {    "type": "get",    "url": "/pokemonList",    "title": "List pokemon by id",    "group": "Pokemon",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "string",            "optional": false,            "field": "pokemonId",            "description": "<p>Pokemon id to get info</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object[]",            "optional": false,            "field": "response",            "description": "<p>existing pokemon</p>"          }        ]      },      "examples": [        {          "title": "Success",          "content": "HTTP/1.1 200 OK\n{\n   \"habilities\": [\n     {\n       \"hability\": \"chicotada\",\n       \"damage\": 20\n     }\n   ],\n   \"_id\": \"5ddc67fdb03d5014394c2b03\",\n   \"name\": \"bulbassaur\",\n   \"hp\": 50,\n   \"__v\": 0\n }",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Token validation error.",          "content": "HTTP/1.1 401 Token validation error.\n{\n \"status\": \"error\",\n \"message\": \"Token validation error\"\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "./src/routes.js",    "groupTitle": "Pokemon",    "name": "GetPokemonlist"  },  {    "type": "post",    "url": "/newPokemon",    "title": "Create an pokemon",    "group": "Pokemon",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "string",            "optional": false,            "field": "name",            "description": "<p>Pokemon's name</p>"          },          {            "group": "Parameter",            "type": "Object[]",            "optional": false,            "field": "habilities",            "description": "<p>Pokemon's habilities</p>"          },          {            "group": "Parameter",            "type": "number",            "optional": false,            "field": "atack",            "description": "<p>Pokemon's atack force</p>"          },          {            "group": "Parameter",            "type": "number",            "optional": false,            "field": "defense",            "description": "<p>Pokemon's defense power</p>"          },          {            "group": "Parameter",            "type": "number",            "optional": false,            "field": "hp",            "description": "<p>Pokemon's vitality</p>"          }        ]      },      "examples": [        {          "title": "Input",          "content": "{\n \"name\": \"bulbassaur\",\n  \"habilities\": [{\n  \"hability\": \"chicotada\",\n \"damage\": 20\n }],\n \"atack\": 20,\n \"defense\": 15,\n \"hp\": 50\n}",          "type": "json"        }      ]    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object[]",            "optional": false,            "field": "response",            "description": "<p>created pokemon info</p>"          }        ]      },      "examples": [        {          "title": "Success",          "content": "HTTP/1.1 200 OK\n{\n   \"habilities\": [\n     {\n       \"hability\": \"chicotada\",\n       \"damage\": 20\n     }\n   ],\n   \"_id\": \"5ddc67fdb03d5014394c2b03\",\n   \"name\": \"bulbassaur\",\n   \"hp\": 50,\n   \"__v\": 0\n }",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Token validation error.",          "content": "HTTP/1.1 401 Token validation error.\n{\n \"status\": \"error\",\n \"message\": \"Token validation error\"\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "./src/routes.js",    "groupTitle": "Pokemon",    "name": "PostNewpokemon"  },  {    "type": "put",    "url": "/updatePokemon",    "title": "Update a pokemon info",    "group": "Pokemon",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "string",            "optional": false,            "field": "pokemonId",            "description": "<p>Pokemon id to update</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object[]",            "optional": false,            "field": "response",            "description": "<p>updated pokemon</p>"          }        ]      },      "examples": [        {          "title": "Success",          "content": "HTTP/1.1 200 OK\n{\n   \"habilities\": [\n     {\n       \"hability\": \"chicotada\",\n       \"damage\": 20\n     }\n   ],\n   \"_id\": \"5ddc67fdb03d5014394c2b03\",\n   \"name\": \"bulbassaur\",\n   \"hp\": 50,\n   \"__v\": 0\n }",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Token validation error.",          "content": "HTTP/1.1 401 Token validation error.\n{\n \"status\": \"error\",\n \"message\": \"Token validation error\"\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "./src/routes.js",    "groupTitle": "Pokemon",    "name": "PutUpdatepokemon"  },  {    "type": "delete",    "url": "/escape",    "title": "Delete a pokemon",    "group": "UserPokemon",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "string",            "optional": false,            "field": "pokemonId",            "description": "<p>Pokemon id to delete</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object[]",            "optional": false,            "field": "response",            "description": "<p>updated pokemon user's list</p>"          }        ]      },      "examples": [        {          "title": "Deleted",          "content": "HTTP/1.1 200 OK\n[]",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Token validation error.",          "content": "HTTP/1.1 401 Token validation error.\n{\n \"status\": \"error\",\n \"message\": \"Token validation error\"\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "./src/routes.js",    "groupTitle": "UserPokemon",    "name": "DeleteEscape"  },  {    "type": "get",    "url": "/capture",    "title": "Capture a pokemon",    "group": "UserPokemon",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "string",            "optional": false,            "field": "pokemonId",            "description": "<p>Pokemon id to capture</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object[]",            "optional": false,            "field": "response",            "description": "<p>captured pokemon info</p>"          }        ]      },      "examples": [        {          "title": "Captured",          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"habilities\": [\n      {\n        \"hability\": \"chicotada\",\n        \"damage\": 20\n      }\n    ],\n    \"_id\": \"5ddc67fdb03d5014394c2b03\",\n    \"name\": \"bulbassaur\",\n    \"hp\": 50,\n    \"__v\": 0\n  }\n]",          "type": "json"        },        {          "title": "Already have",          "content": "{\n \"status\": \"error\",\n \"message\": \"You already have this pokemon.\"\n}",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Token validation error.",          "content": "HTTP/1.1 401 Token validation error.\n{\n \"status\": \"error\",\n \"message\": \"Token validation error\"\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "./src/routes.js",    "groupTitle": "UserPokemon",    "name": "GetCapture"  },  {    "type": "get",    "url": "/myPokemons",    "title": "List user's pokemons",    "group": "UserPokemon",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object[]",            "optional": false,            "field": "response",            "description": "<p>user's pokemons</p>"          }        ]      },      "examples": [        {          "title": "Success",          "content": "HTTP/1.1 200 OK\n[\n {\n   \"_id\": \"5ddc67fdb03d5014394c2b03\",\n   \"name\": \"picachu\",\n   \"habilities\": {\n     \"hability\": \"choque do trovão\",\n     \"damage\": 20\n   },\n   \"hp\": 50,\n   \"__v\": 0\n }\n]",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Token validation error.",          "content": "HTTP/1.1 401 Token validation error.\n{\n \"status\": \"error\",\n \"message\": \"Token validation error\"\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "./src/routes.js",    "groupTitle": "UserPokemon",    "name": "GetMypokemons"  },  {    "type": "post",    "url": "/auth",    "title": "Authenticate",    "group": "Users",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "string",            "optional": false,            "field": "email",            "description": "<p>User's Email</p>"          },          {            "group": "Parameter",            "type": "string",            "optional": false,            "field": "password",            "description": "<p>User's Password</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object[]",            "optional": false,            "field": "response",            "description": "<p>Access token</p>"          }        ]      },      "examples": [        {          "title": "Success",          "content": "HTTP/1.1 200 OK\n{\n \"status\": \"success\",\n \"message\": \"User authorized.\",\n \"data\": {\n   \"user\": {\n     \"name\": \"Nome usu[ario\",\n     \"email\": \"email@gmail.com\"\n   },\n   \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI...\"\n }\n}",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Invalid email/password.",          "content": "HTTP/1.1 401 Invalid email/password.\n{\n\"status\": \"error\",\n \"message\": \"Invalid email/password.\",\n \"data\": null\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "./src/routes.js",    "groupTitle": "Users",    "name": "PostAuth"  },  {    "type": "post",    "url": "/users",    "title": "Create an user",    "group": "Users",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "string",            "optional": false,            "field": "name",            "description": "<p>User's Name</p>"          },          {            "group": "Parameter",            "type": "string",            "optional": false,            "field": "email",            "description": "<p>User's Email</p>"          },          {            "group": "Parameter",            "type": "string",            "optional": false,            "field": "password",            "description": "<p>User's Password</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object[]",            "optional": false,            "field": "response",            "description": "<p>User info</p>"          }        ]      },      "examples": [        {          "title": "Success",          "content": "HTTP/1.1 200 OK\n{\n\"status\": \"success\",\n\"message\": \"New user created.\",\n\"data\": {\n \"_id\": \"5ddc6cea4ba265169cb3925c\",\n \"name\": \"Nome usuário\",\n \"email\": \"email@gmail.com\",\n \"password\": \"$2a$10$CC01vTbt6jq0.0hZ63Ex3usPwPE3QH3fdYd3Keh6H26RXtZ32sAVS\",\n \"pokemons\": [],\n \"__v\": 0\n }\n}",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "All fields are required",          "content": "HTTP/1.1 400 All fields are required\n{ \n\"status: \"error\",\n \"message\": \"All fields are required.\"\n}",          "type": "json"        },        {          "title": "Not Found",          "content": "HTTP/1.1 404 Not Found",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "./src/routes.js",    "groupTitle": "Users",    "name": "PostUsers"  },  {    "type": "put",    "url": "/users",    "title": "Update an user",    "group": "Users",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "string",            "optional": false,            "field": "name",            "description": "<p>User's name</p>"          },          {            "group": "Parameter",            "type": "string",            "optional": false,            "field": "email",            "description": "<p>User's email</p>"          },          {            "group": "Parameter",            "type": "string",            "optional": false,            "field": "password",            "description": "<p>User's new password</p>"          },          {            "group": "Parameter",            "type": "string",            "optional": false,            "field": "oldPassword",            "description": "<p>User's current password</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object[]",            "optional": false,            "field": "response",            "description": "<p>Updated user info</p>"          }        ]      },      "examples": [        {          "title": "Success",          "content": "HTTP/1.1 200 OK\n{\n \"status\": \"success\",\n \"message\": \"User updated.\",\n \"data\": {\n   \"id\": \"5ddc5697e1ef8d0d2075144e\",\n   \"name\": \"Nome usuário\",\n   \"email\": \"email@gmail.com\"\n }\n}",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Token validation error.",          "content": "HTTP/1.1 401 Token validation error.\n{\n \"status\": \"error\",\n \"message\": \"Token validation error\"\n}",          "type": "json"        },        {          "title": "Password does not match.",          "content": "HTTP/1.1 401 Password does not match.\n{\n \"status\": \"error\",\n \"message\": \"Password does not match.\"\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "./src/routes.js",    "groupTitle": "Users",    "name": "PutUsers"  }] });
