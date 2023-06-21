//? CONSUMIR LA POKEAPI: https://pokeapi.co/
//? ENDPOINT: https://pokeapi.co/api/v2/pokemon/

//* 1) TRAER AL PAQUETE QUE ACABAMOS DE INSTALAR

 const request = require('request')

 //* 2) CREAR/DECLARAR NUESTRA URI 

 const URI = 'https://pokeapi.co/api/v2/pokemon/'
 
 //* 3) CREAR UNA FUNCION QUE ME PIDA EL NOMBRE DE UN POKEMON Y ME DEVUELVA EL TIPO DE POKEMON

  function getPokemon(name) {
    request(URI + name, function (error, response, body) {
        //HACEMOS UNA VALIDACION 
        if(response.statusCode === 200){
            const dataEnFormatoJson = JSON.parse(body) // EL OBJETO EN FORMATO JSON, DEBO PASARLO A UN OBJETO DE JAVASCRIPT
            const typePokemon = dataEnFormatoJson.types.map((objeto)=>objeto.type.name)
            console.log(`EL TIPO DE POKEMON DE ${name} es : ${typePokemon}`)
        }else {
            console.log(`OCURRIO UN ERROR: ${response.statusCode} ${response.statusMessage}`)
                                                //   404                 NOT FOUND 
            }
      });
  }

  getPokemon('pikachu')
  getPokemon('charmander')
  getPokemon('bulbasaur')
  getPokemon('bulbasur')