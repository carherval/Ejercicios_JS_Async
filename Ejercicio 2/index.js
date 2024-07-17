const idPokemon = Math.floor(Math.random() * 151) + 1

const getPokemon = async () => {
  try {
    const pokemon = await (
      await fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
    ).json()

    document.querySelector('.random-image').src =
      pokemon.sprites.other['official-artwork'].front_default
  } catch (error) {
    console.log(
      `Se ha producido un error al intentar obtener el pokémon con el ID ${idPokemon} : ${error.message}`
    )
  }
}

getPokemon()
