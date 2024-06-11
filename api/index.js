import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.baseURL
})

function fetchPokemons () {
  return instance.get('/pokemon')
}

function fetchPokemonById (id) {
  return instance.get(`/pokemon/${id}`)
}

function fetchPokemonsByKeyword (keyword) {
  return instance.get('/pokemon', {
    params: {
      name_like: keyword
    }
  })
}

// favorite
function fetchFavoritePokemon () {
  return instance.get('/favorite')
}

function createFavoritePokemon (favorites) {
  return instance.post('/favorite', favorites)
}

export {
  fetchPokemons,
  fetchPokemonById,
  fetchPokemonsByKeyword,
  fetchFavoritePokemon,
  createFavoritePokemon
}
