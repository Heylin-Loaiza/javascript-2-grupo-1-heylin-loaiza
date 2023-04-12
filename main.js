const pokemonSelect = document.querySelector('#pokemonSelect')
const pokemonDetail= document.querySelector('#pokemon-detail')

async function listPokemons(){
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?offset=110&limit=100");
  const data = await response.json();

  pokeNames(data.results)
}

function pokeNames(names){
  pokemonSelect.innerHTML= `
  ${names.map(element => `<option value=${element.url.split('/')[6]}>${element.name}</option>`)}
  `;
}

pokemonSelect.addEventListener('click', function(){
  pokemonDetail.innerHTML= `<h1 id=text></h1>`
  option = pokemonSelect.options[pokemonSelect.selectedIndex].text;
  document.getElementById("text").innerHTML = option;

  pokemon(pokemonSelect.value)
})

async function pokemon(value){
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}/`);
  const data = await response.json();

  document.getElementById("text").insertAdjacentHTML(
    "afterend", 
    `<img class="image" src="${data.sprites.other.dream_world.front_default}" alt="">
    <div>
      <p>Height: ${data.height}</p>
      <p>Weight: ${data.weight}</p>
      <p>Abilities:</p>
      <ul>
        ${data.abilities.map(ability => `
          <li>${ability.ability.name}</li>`).join('')
        }
      </ul>
      <p>Stats:</p>
      <ul>
        ${data.stats.map(stat => `
          <li>${stat.stat.name} / base: ${stat.base_stat}</li>`).join('')
        }
      </ul>
    </div>`); 
}

listPokemons()