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

// carts
function fetchCartItems () {
  return instance.get('/carts')
}

function createCartItem (cartItem) {
  return instance.post('/carts', cartItem)
}

export {
  fetchPokemons,
  fetchPokemonById,
  fetchPokemonsByKeyword,
  fetchCartItems,
  createCartItem
}
