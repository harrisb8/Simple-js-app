//establishing my pokemonList and important attributes//
//wrap in iife//




let pokemonRepository =(function() {
  let pokemonList = [];
  //add url for data to be pull from
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  let modalContainer = document.querySelector('#modal-container');

  //Declaring the add function
  function add(pokemon) {
    if (typeof pokemon === 'object'){
      return pokemonList.push(pokemon);
    } else {
  //document.write("Charmander");
    }
  }
 //declaring the getAll function
  function getAll(){
     return pokemonList;
 }  
 
 function addListItem(pokemon) {
  let list = document.querySelector(".list-group");
  let listPokemon = document.createElement('li');
  listPokemon.classList.add('group-list-item');
  let button = document.createElement("button");
  button.innerText = pokemon.name;
  button.classList.add('pokebutton');
  button.classList.add('btn', 'btn-secondary');
  button.setAttribute('data-target', '#pokemonModal');
  button.setAttribute('data-toggle', 'modal');
  
  //Adding and eventListener to my button, Once user click on button details of pokemon will display//
  button.addEventListener("click", function(){
     console.log(pokemon)
     showDetails(pokemon);
  });
  listPokemon.appendChild(button);
  list.appendChild(listPokemon);
 }

 //add fetch to load list from url
 async function loadList() {
  try {
     const response = await fetch(apiUrl);
     const json = await response.json();
     json.results.forEach(function (item) {
       let pokemon = {
         name: item.name,
         detailsUrl: item.url
       };
       add(pokemon);
     });
   } catch (e) {
     console.error(e);
   }
}
//add details fetched from api
  async function loadDetails(item) {
    let url = item.detailsUrl;
      return fetch(url)
        .then(response => response.json())
        .then(details =>{
           // Now we add the details to the item
          item.imageUrl = details.sprites.front_default;
          item.height = details.height;
          item.types = details.types;
        })
}

function showDetails(pokemon) {
  loadDetails(pokemon)
  .then(function () {
    showModal(pokemon);
  
  })
}

 function showModal(pokemon){
   let modalBody= $(".modal-body");
   let modalTitle= $(".modal.title");
   let modalHeader= $(".modal-header")

   modalTitle.empty();
   modalBody.empty();

   let nameElement = $("<h>" + pokemon.name + "</h>");
   let imageElementFront= $('<img class="modal-img" style="width:50%">');

   imageElementFront.attr("src", pokemon.imageUrl);
   let heightElement= $("<p>" + "height: " + pokemon.height + "</p>");

   let weightElement= $("<p>" + "weight : " + pokemon.weight + "</p>");
   let typesElement= $("<p>" + "types: " + pokemon.types + "</p>");
   let abilitiesElement= $("<p>" + "abilities: " + pokemon.abilities + "</p>");

   modalTitle.append(nameElement);
   modalBody.append(imageElementFront);
   modalBody.append(heightElement);
   modalBody.append(weightElement);
   modalBody.append(typesElement);
   modalBody.append(abilitiesElement);
 }

$('#pokemonModal').hide('modalContainer');




// Setting up the key and the value of the return 
 return {
   add: add,
   getAll: getAll,
   addListItem: addListItem,
   loadList: loadList,
   loadDetails: loadDetails,
   showDetails: showDetails
  };
 })();



 //Trying get the array to display in browser
   console.log(pokemonRepository.getAll());
//pokemonRepository.add({name: 'Charmander'});
//document.write(pokemonRepository.getAll());

//assinging pokemonInfo the value of pokemonRepository
  let pokemonInfo= pokemonRepository.getAll();

  pokemonRepository.loadList().then(function() {
  // Now the data is loaded!

//Trying to display the array
  pokemonInfo.forEach(function(pokemon){
  pokemonRepository.addListItem(pokemon);
  });
});
