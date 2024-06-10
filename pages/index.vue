<template>
  <div class="app">
    <div>
      <SearchInput
        v-model="inputText"
        @search="filterItemsBySearchText"></SearchInput>
    </div>
    <main>
      <ul>
        <li v-for="mon in pokemon" :key="mon.id" class="item flex" @click="detail(mon.id)">
          <img class="product-image" :src="mon.img" :alt="mon.name"/>
          <p>{{ mon.num }}</p>
          <p>{{ mon.name }}</p>
            <div v-for="type in mon.type" :key="type">
              <p>{{ type }}</p>
            </div>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import axios from 'axios'
import SearchInput from '../components/SearchInput.vue'
import { fetchPokemonsByKeyword } from '~/api'

export default {
  components: { SearchInput },
  async asyncData () {
        const response = await axios.get('http://localhost:3000/pokemon')
        const pokemon = response.data
        return { pokemon }
  },
  data () {
        return {
            inputText: '',
            products: []
        }
    },
  methods: {
    async filterItemsBySearchText () {
      const { data } = await fetchPokemonsByKeyword(this.inputText)
      this.pokemon = data.map(mon => ({
        ...mon
      }))
// 이 코드의 의미는 다음과 같습니다:
// data.map(mon => ({ ...mon })): data 배열의 각 요소를 mon 변수로 받아, 각 요소에 대해 새로운 객체를 생성합니다.
// { ...mon }: 스프레드 문법을 사용하여 mon 객체의 모든 속성을 새로운 객체로 복사합니다. 이 새로운 객체는 원래 mon 객체와 동일한 속성을 갖습니다.
// 즉, data 배열의 각 객체를 새로운 객체로 복사하여 this.pokemon 배열에 저장하는 역할을 합니다. 이렇게 하면 this.pokemon 배열의 각 요소는 data 배열의 각 요소와 동일한 속성을 가지지만, 서로 다른 메모리 참조를 가지게 됩니다. 원본 객체를 수정하지 않고 새로운 객체를 생성하는 방법입니다.
    },
    detail (id) {
      this.$router.push(`/detail/${id}`)
    }
  }
}
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
}
.item {
  display: inline-block;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
}
.product-image {
  width: 200px;
  height: 150px;
}
.app {
  position: relative;
}
.cart-wrapper {
  position: sticky;
  float: right;
  bottom: 50px;
  right: 50px;
}
.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
}
</style>
