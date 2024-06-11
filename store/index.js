import { fetchFavoritePokemon } from '~/api'

export const state = () => ({
  favorites: []
})

export const mutations = {
  addPokemonToFavorites (state, pokemon) {
    state.favorites.push(pokemon)
  },
  setFavorites (state, favorites) {
    state.favorites = favorites
  }
}

export const actions = {
  async fetchFavorite (context) {
    const { data } = await fetchFavoritePokemon()
    const items = data.map(item => ({
      ...item
    }))
    context.commit('setFavorites', items)
  }
}
