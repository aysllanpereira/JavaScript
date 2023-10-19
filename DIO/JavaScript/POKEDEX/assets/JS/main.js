function converterPokemonTypesToLi (pokemonTypes) {
    return pokemonTypes.map((typesSlot) => `<li class="type">${typesSlot.type.name}</li>`)
}

function converterPokemonToLi (pokemon) {
    
    return `
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class"type ${type}">${type}</li>`).join("")}
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
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