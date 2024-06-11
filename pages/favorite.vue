<template>
  <div class="container">
    <h1 class="list-title">즐겨찾기한 포켓몬 목록</h1>
    <div class="list-wrapper">
      <ul>
        <li v-for="pokemon in favorites" :key="pokemon.id" class="list-item">
          <img class="thumbnail" :src="pokemon.img" :alt="pokemon.name" />
          <div class="description">
            <p>{{ pokemon.name }}</p>
            <span>{{ pokemon.num }}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="extra-panel">
      <button>선택하기</button>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ store }) {
    await store.dispatch('setFavorites')
  },

  computed: {
    favorites () {
      return this.$store.state.favorites
    }
  }
}
</script>

<style scoped>
.container {
  margin: 2rem 10rem;
}
.list-title {
  font-weight: 700;
  font-size: 1.4rem;
}
.list-wrapper {
  margin: 0.4rem 0;
}
.list-item {
  display: flex;
}
.thumbnail {
  width: 100px;
  height: 100px;
}
.description {
  padding: 2rem 1rem;
}
.extra-panel {
  text-align: right;
  padding: 0.2rem 0;
}
</style>
