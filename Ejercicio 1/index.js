const select = document.querySelector('#character-list')

const getAllCharacters = async () => {
  try {
    const characters = await (
      await fetch('https://thronesapi.com/api/v2/Characters')
    ).json()

    setCharacterList(characters)
  } catch (error) {
    console.log(
      `Se ha producido un error al intentar obtener todos los personajes de "Juego de Tronos": ${error.message}`
    )
  }
}

const setCharacterList = (characters) => {
  characters.forEach((character) => {
    select.innerHTML += `<option value="${character.id}">${character.fullName}</option>`
  })
}

const getCharacterById = () => {
  select.addEventListener('change', async function () {
    const idCharacter = select.value

    try {
      const character = await (
        await fetch(`https://thronesapi.com/api/v2/Characters/${idCharacter}`)
      ).json()

      document.querySelector('.character-image').src = character.imageUrl
    } catch (error) {
      console.log(
        `Se ha producido un error al intentar obtener el personaje de "Juego de Tronos" con el ID ${idCharacter} : ${error.message}`
      )
    }
  })
}

getAllCharacters()
getCharacterById()
