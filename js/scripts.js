//establishing my pokemonList and important attributes//
//wrap in iife//
let pokemonRepository =(function(){
let pokemon = [
   {
     name: "Venusaur",
   Height: 2,
   Type: ["grass", "poison"],
   Abilities: ["chlorophyll", "overgrow"],
   Hp: 80,
   Attack: 82,
   Defense: 83,
   Speed: 80,
   Weight: "100kg"
 },
   {
     name: "Charizard",
   Height: 1.7,
   Type: ["fire", "flying"],
   Abilities: ["blaze", "solar-power"],
   Hp: 78,
   Attack: 84,
   Defense: 78,
   Speed: 100,
   Weight: "90.5kg"
 },
   {
     name: "Blastoise",
   Height: 1.6,
   Type: "water",
   Abilities: ["rain-dish", "torrent"],
   Hp: 79,
   Attack: 83,
   Defense: 100,
   Speed: 78,
   Weight: "85.5kg"
 },
   {
     name: "Pikachu",
   Height: 0.4,
   Type: "electric",
   Abilities: ["static", "lightningrod"],
   Hp: 35,
   Attack: 55,
   Defense: 40,
   Speed: 90,
   Weight: "6kg"
 },
   {
     name: "Jigglypuff",
   Height: 0.5,
   Type: ["fairy", "normal"],
   Abilities: ["cute-charm", "friendguard"],
   Hp: 115,
   Attack: 45,
   Defense: 20,
   Speed: 20,
   Weight: "5.5kg"
 },
   {
     name: "Machamp",
   Height: 1.6,
   Type: "fighting",
   Abilities: ["guts", "steadfast", "Noguard"],
   Hp: 90,
   Attack: 130,
   Defense: 80,
   Speed: 55,
   Weight: "130kg"
 },
   {
     name: "Mewtwo",
   Height: 2,
   Type: "psychic",
   Abilities: ["pressure", "unnerve"],
   Hp: 106,
   Attack: 110,
   Defense: 90,
   Speed: 130,
   Weight: "122kg"
 },
   {
     name: "Muk",
   Height: 1.2,
   Type: "poison",
   Abilities: ["stench", "sticky-hold", "poison-touch"],
   Hp: 105,
   Attack: 105,
   Defense: 75,
   Speed: 50,
   Weight: "30kg"
 },
   {
     name: "Meowth",
   Height: 0.4,
   Type: "normal",
   Abilities: ["pickup", "technician", "unnerve"],
   Hp: 90,
   Attack: 45,
   Defense: 35,
   Speed: 90,
   Weight: "4.2kg"
 },
   {
     name: "Snorlax",
   Height: 2.1,
   Type: "normal",
   Abilities: ["immunity", "thick-fat", "gluttony"],
   Hp: 160,
   Attack: 110,
   Defense: 65,
   Speed: 30,
   Weight: "460kg"
 },
];


//had to simplify my pokemon list in order to make a loop//
let pokemonList= [
 {name: "Venusaur", height: 2},
 {name: "Charizard", height: 1.7},
 {name: "Blastoise", height: 1.6},
 {name: "Pikachu", height: 0.4},
 {name: "Jiggypuff", height: 0.5},
 {name: "Machamp", height: 1.6},
 {name: "Mewtwo", height: 2},
 {name: "Muk", height: 1.2},
 {name: "Snorlax", height: 2.1}
 ];


/*creating a loop with names and heights*/
//nest array within an array//
for ( let i = 0; i < pokemonList.length; i++){
//set conditions to acknowledge pokemon taller than 2//
 if(pokemonList[i].height >= 2.1) {
   document.write(pokemonList[i].name + "(" + "height" + pokemonList[i].height + ") " + "- Wow thats big! <br />");
 }else{
   document.write(pokemonList[i].name + "(" + "height" + pokemonList[i].height + ") <br />");
 }
  }
  //suggested code to implement//
  let pokemonInfo = pokemonRepository.getAll();
  pokemonInfo.forEach (function(pokemon) {
    document.write(pokemon.name + "" + pokemon.type + "" + " (" + "height" + pokemon.height + ")"<br />);
  
    //establishing getAll and add function//
    function add(pokemon){
      pokemonList.push(pokemon);
    }
    function getAll(){
      return pokemonList;
    }
    return {
      add:add,
      getAll: getAll
    };
    });
    //this is practice trying to merge vs with github desktop and github///