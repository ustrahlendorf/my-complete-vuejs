import * as Vue from 'vue/dist/vue.esm-bundler.js'

const Num = {
  props: ['num'],
  template: `
  <button 
    :class="getClass(num)"
    @click="click"
  >
  {{ num }}
  </button>
  `,
  methods: {
    click() {
      this.$emit('chosen', this.num)
    },
    getClass(nr) {
      return this.isEven(nr) ? 'blue' : 'red'
    },
    isEven(nr) {
      return nr % 2 === 0
    }
  }
}

const app = Vue.createApp({
  components: {
    Num
  },
  template: `
    <num 
      v-for="nummer in numbers"
      :num="nummer"
      @chosen="addNumber" 
    />

    <hr />
    
    <num 
    v-for="nummer in numberHistory"
    :num="nummer"
  />
    `,

  data() {
    return {
      numbers: [1,2,3,4,5,6,7,8,9,10],
      numberHistory: []
    }
  },
  computed: {
    eventList(){
      return this.numbers.filter(nr => this.isEven(nr))
    },
  },
  methods: {
    addNumber(nummer) {
      console.log('Nummer', nummer)
      this.numberHistory.push(nummer)
    }
  }
})
app.mount('#app')