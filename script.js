const pokeContainer = document.getElementById('poke_container')
const pokemons = 150;
const colors = {
	fire: '#FDDFDF',
	grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
};

const mainTypes = Object.keys(colors)

const fetchPokemons = async () =>{
  for(let i = 1 <= pokemons; i++;){
    await getPokemon(i)
  }
}


const getPokemon = async id =>{
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const res = await fetch(url)
  const pokemon = await res.json()
  createPokemonCard(pokemon)
  
}



function createPokemonCard(pokemon){
  const pokemonEl = document.createElement('div')
  pokemonEl.classList.add('pokemon')

  const pokeTypes = pokemon.types.map(element => element.type.name)
  const type = mainTypes.find(type => pokeTypes.indexOf(type)> -1)
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
  const color = colors[type]

  pokemonEl.style.backgroundColor = color

  const pokerInnerHTML = ` 
  <div class="img-container">
            <img src="https://pokeres.bastionbot.org/images/pokemon/${
							pokemon.id
						}.png" alt="${name}" />
        </div>
        <div class="info">
            <span class="number">#${pokemon.id
							.toString()
							.padStart(3, '0')}</span>
            <h3 class="name">${name}</h3>
            <small class="type">Type: <span>${type}</span></small>
        </div>
  `;

  pokemonEl.innerHTML = pokerInnerHTML
  pokeContainer.appendChild(pokemonEl)
}
fetchPokemons();