const pokemonList = document.getElementById("pokemonList")
const loadMoreButton = document.getElementById("LoadMoreButton")

const maxRecords = 150;
const limit = 15;
let offset = 0;

function converterPokemonTypesToLi (pokemonTypes) {
    return pokemonTypes.map((typesSlot) => `<li class="type">${typesSlot.type.name}</li>`)
}



function buttonPokemonItens(offset, limit) {
    Pokeapi.getPokemons(offset, limit).then((pokemons = []) => {
        const newhtml = pokemons.map((pokemon) => `
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

`).join('')
        pokemonList.innerHTML += newhtml
    })

}   

buttonPokemonItens(offset, limit)

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