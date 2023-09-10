const idPokemon = document.getElementById('idPokemon')
const boton = document.getElementById('botonBusqueda')
const container = document.getElementById('pokeContainer')

const requestPokemon = async (id) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        const data = await response.json()
        pokemonData(data)
        return data;
    } catch (error) {
        console.log('error', error)
    }
}


const mostrarPokemon = async () => {
    const id = idPokemon.value;
    if (id) {
        const data = await requestPokemon(id);
        if (data) {
            // Llama a pokemonData solo si se obtuvieron datos
            pokemonData(data);
        } else {
            // Manejar caso de error o falta de datos
        }
    }
}






const pokemonData = (data) => {
    container.innerHTML = ''
    const pokemon = data.name
    const tipo = data.types[0].type.name;
    const altura = data.height
    const peso = data.weight
    const imagen = data.sprites.front_default


    const pokemonNombre = document.createElement("h1")
    pokemonNombre.textContent = pokemon

    const types = document.createElement("h2")
    types.textContent = `el tipo de ${pokemon} es : ${tipo} `

    const alturaPokemon = document.createElement("p")
    alturaPokemon.textContent = `la altura de ${pokemon} es ${altura / 10} de metros`

    const pesoPokemon = document.createElement("p")
    pesoPokemon.textContent = `el peso de ${pokemon} es ${peso / 10} kilogramos`

    const fotoPokemon = document.createElement("img")
    fotoPokemon.src = imagen

    container.appendChild(pokemonNombre)
    container.appendChild(types)
    container.appendChild(alturaPokemon)
    container.appendChild(pesoPokemon)
    container.appendChild(fotoPokemon)

}

const init = () => {
    boton.addEventListener("click", mostrarPokemon)
}
init()