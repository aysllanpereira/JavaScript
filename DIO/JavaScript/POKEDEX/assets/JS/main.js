

function converterPokemonToLi (pokemon) {
    
    return `
            <li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        <li class="type">Grass</li>
                        <li class="type">Poison</li>
                    </ol>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
                </div>
            </li>

    `
}

const pokemonList = document.getElementById("pokemonList");

    /* a função map irá fazer um mapeamento na lista html e a função join irá juntar a lista */

    Pokeapi.getPokemons().then((pokemons = []) => {
        pokemonList.innerHTML = pokemons.map(converterPokemonToLi).join('');
    })
       /* const listItems = [];

        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            listItems.push(converterPokemonToLi(pokemon))
            
        }

        console.log(listItems);
    }) */
    
       

/* const x = 10 + 10;
console.log(x); */