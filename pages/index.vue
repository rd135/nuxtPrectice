<template>
  <div class="app">
    <div>
      <input type="text">
    </div>
    <main>
      <ul>
        <li class="item flex" v-for="mon in pokemon" :key="mon.id">
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

export default {
    components:{
    },
    data(){
        return{
            products : []
        }
    },
    async asyncData(){
        const response = await axios.get('http://localhost:3000/pokemon')
        const pokemon = response.data
        console.log(pokemon)
        return {pokemon}
    },
    async created(){
        
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