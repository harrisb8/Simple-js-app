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
  let list = document.querySelector(".pokemon-list");
  let listPokemon = document.createElement("li");
  let button = document.createElement("button");
  button.innerText = pokemon.name;
  button.classList.add('pokebutton');
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
    console.log(pokemon);
    //adding Modal to the pokemon list that we already have//
    modalContainer.innerHTML ='';
    let modal = document. createElement('div');
    modal.classList.add('modal');
  
  //creating a close button for the modal
  let closeButtonElement = document.createElement('button');
  closeButtonElement.classList.add('modal-close');
  closeButtonElement.innerText= 'Close';
  closeButtonElement.addEventListener('click', hideModal);

  let image = document.createElement('img');
  image.src = pokemon.imageUrl;
  modal.appendChild(image);

  //attaching modal info to pokemonInfo
  let titleElement = document.createElement('h1');
  titleElement.innerText = pokemon.name;

  let contentElement = document.createElement('p');
  contentElement.innerText = "height" + pokemon.height;

  //attaching created elements to modal and adding modal to pokemon list
  modal.appendChild(closeButtonElement);
  modal.appendChild(titleElement);
  modal.appendChild(contentElement);
  modalContainer.appendChild(modal);

  modalContainer.classList.add('is-visible');
  })
}

  function hideModal() {
    modalContainer.classList.remove('is-visible');
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });


modalContainer.addEventListener('click', (e) => {
  let target = e.target;
  if(target === modalContainer){
    hideModal()
  }
});

document.querySelector('#show-modal').addEventListener('click', ()=> {
  showModal(pokemonInfo.name, pokemonInfo.height);
});

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
