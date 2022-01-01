<template>
  <div class="cards">
    <Card
      v-for="pokemon in pokemons"
      :key="pokemon.id"
    >
      <template v-slot:title>
        {{ pokemon.name }}
      </template>

      <template v-slot:content>
        <img :src="pokemon.sprite">
      </template>

      <template v-slot:description>
        <div 
          v-for="type in pokemon.types" 
          :key="type"
          >
          {{ type }}
        </div>
      </template>

    </Card>
  </div>
</template>

<script>
  import Card from './Card.vue'
  const api = 'https://pokeapi.co/api/v2/pokemon'
  const ids = [1, 4, 7]

  export default {
    components: {
      Card
    },
    data() {
      return {
        pokemons: []
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      async fetchData() {
        const responses = await Promise.all(
          ids.map(id => window.fetch(`${api}/${id}`))
        )
        const json = await Promise.all(
          responses.map(data => data.json())
        )

        this.pokemons = json.map(datum => ({
          id: datum.id,
          name : datum.name,
          sprite: datum.sprites.other['official-artwork'].front_default,
          types: datum.types.map(type => type.type.name)
        }))
      }
    }
  }
</script>

<style scoped>
img {
  width: 100%;
}
.cards {
  display: flex;
}
</style>