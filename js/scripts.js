//establishing my pokemonList and important attributes//
//wrap in iife//
let pokemonRepository =(function(){
let pokemonList = [
   {
     name: "Venusaur",
   Height: 2,
   Type: ["grass", "poison"]
 },
   {
     name: "Charizard",
   Height: 1.7,
   Type: ["fire", "flying"]
 },
   {
     name: "Blastoise",
   Height: 1.6,
   Type: "water"
 },
   {
     name: "Pikachu",
   Height: 0.4,
   Type: "electric"
 },
   {
     name: "Jigglypuff",
   Height: 0.5,
   Type: ["fairy", "normal"]
 },
   {
     name: "Machamp",
   Height: 1.6,
   Type: "fighting"
 },
   {
     name: "Mewtwo",
   Height: 2,
   Type: "psychic"
 },
   {
     name: "Muk",
   Height: 1.2,
   Type: "poison"
 },
   {
     name: "Meowth",
   Height: 0.4,
   Type: "normal"
 },
   {
     name: "Snorlax",
   Height: 2.1,
   Type: "normal"
 },
];

//Declaring the add function
  function add(pokemon) {
    if (typeof pokemon === 'object'){
    return pokemonList.push(pokemon);
  }else{
   document.write("Charmander");
  }
  }
  //declaring the getAll function
  function getAll(){
    return pokemonList;
  }
 // Setting up the key and the value of the return 
  return {
    add: add,
    getAll: getAll 
  };
  })();

  //Trying get the array to display in browser
  console.log(pokemonRepository.getAll());
pokemonRepository.add({name: 'Charmander'});
document.write(pokemonRepository.getAll());

//assinging pokemonInfo the value of pokemonRepository
let pokemonInfo= pokemonRepository.getAll();

//Trying to display the array
pokemonInfo.forEach(function(pokemon){
  document.write(pokemon.name + "" + pokemon.type + "" + "("+ "height" + ")<br />");
});