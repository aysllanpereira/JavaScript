function converterPokemonTypesToLi (pokemonTypes) {
    return pokemonTypes.map((typesSlot) => `<li class="type">${typesSlot.type.name}</li>`)
}

function converterPokemonToLi (pokemon) {
    
    return `
            <li class="pokemon">
                <span class="number">#${pokemon.order}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${converterPokemonTypesToLi(pokemon.types).join('')}
                    </ol>
                    <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
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