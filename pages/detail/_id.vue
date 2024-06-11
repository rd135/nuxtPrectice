<template>
  <div>
    <div class="container">
      <div class="main-panel">
        <img
          class="pokemon-image"
          :src="pokemon.img"
          :alt="pokemon.name"
        />
      </div>
      <div class="side-panel">
        <p class="name">{{ pokemon.name }}</p>
        <p class="price">{{ pokemon.num }}</p>
        <button type="button" @click="addTofavorite">Add to favorite</button>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchPokemonById, createFavoritePokemon } from '~/api'
export default {
 async asyncData ({ params }) {
    const response = await fetchPokemonById(params.id)
    return { pokemon: response.data }
  },
  methods: {
    async addTofavorite () {
      await createFavoritePokemon(this.pokemon)
      this.$store.commit('addPokemonToFavorites', this.pokemon)
      this.$router.push('/favorite')
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}
.pokemon-image {
  width: 500px;
  height: 375px;
}
.side-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 220px;
  text-align: center;
  padding: 0 1rem;
}
</style>
