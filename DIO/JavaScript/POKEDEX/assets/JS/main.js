const pokemonList = document.getElementById("pokemonList")
const loadMoreButton = document.getElementById("LoadMoreButton")

const maxRecords = 150;
const limit = 15;
let offset = 0;

/* function converterPokemonTypesToLi (pokemonTypes) {
    return pokemonTypes.map((typesSlot) => `<li class="type">${typesSlot.type.name}</li>`)
} */



function converterPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                    alt="${pokemon.name}">
            </div>
        </li>
    
    `
} 

function loadPokemnonItens(offset, limit) {
    Pokeapi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(converterPokemonToLi).join("")
        pokemonList.innerHTML += newHtml
    })
}

// buttonPokemonItens(offset, limit)

loadPokemnonItens(offset, limit)

loadMoreButton.addEventListener("click", () => {
    offset += limit

    const qtRecordNewPage = offset + limit;

    if(qtRecordNewPage >= maxRecords) {
        const newLimit = maxRecords - offset;
        buttonPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {

        buttonPokemonItens(offset, limit)

    }

    
})