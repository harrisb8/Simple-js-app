//establishing my pokemonList and important attributes//
//wrap in iife//

let pokemonList = [
   {
     name: "Venusaur",
   height: 2,
   type: ["grass", "poison"]
 },
   {
     name: "Charizard",
   height: 1.7,
   type: ["fire", "flying"]
 },
   {
     name: "Blastoise",
   height: 1.6,
   type: "water"
 },
   {
     name: "Pikachu",
   height: 0.4,
   type: "electric"
 },
   {
     name: "Jigglypuff",
   height: 0.5,
   type: ["fairy", "normal"]
 },
   {
     name: "Machamp",
   height: 1.6,
   type: "fighting"
 },
   {
     name: "Mewtwo",
   height: 2,
   type: "psychic"
 },
   {
     name: "Muk",
   height: 1.2,
   type: "poison"
 },
   {
     name: "Meowth",
   height: 0.4,
   type: "normal"
 },
   {
     name: "Snorlax",
   height: 2.1,
   type: "normal"
 },
];

let pokemonRepository =(function(){

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
//added new function with buttons
  function addListItem(pokemon) {
    let list = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    let button = document.createElement("button");
    button.innertext = pokemon.name;
    button.classList.add("button");
    button.appendChild(li);
    listItem.appendChild(button);
    list.appendChild(listItem);
  }

 // Setting up the key and the value of the return 
  return {
    add: add,
    getAll: getAll 
    addListItem: addListItem,
  };
  })();

  //Trying get the array to display in browser
  console.log(pokemonRepository.getAll());
pokemonRepository.add({name: 'Charmander'});
//document.write(pokemonRepository.getAll());

//assinging pokemonInfo the value of pokemonRepository
let pokemonInfo= pokemonRepository.getAll();

//DOM manipulation practice
pokemonInfo.forEach(function(pokemon){
 
  //calling function
  pokemonInfo.addListItem(pokemon);
});

