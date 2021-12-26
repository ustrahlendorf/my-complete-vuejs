<template>
  <div class="label">
    <label :for="name">{{ name }}</label>
    <div class="error">{{ error }}</div>
  </div>
  <input 
    :id="name" 
    v-model="value"
  />
</template>

<script>
  export default {
    props: {
      name:  {
        type: String,
        required: true
      },
      rules: {
        type: Object,
        default: {}
      }
    },
    data() {
      return {
        value: ''
      }
    },
    computed: {
      error() {
        if (this.rules.required && this.value.length === 0) {
          return 'VALUE is required.'
        }
        if (this.rules.min && this.value.length < this.rules.min) {
          return `The min length is ${this.rules.min}.`
        }
      }
    }
  }
</script>

<style scoped>
  .input-wrapper {
    display: flex;
    flex-direction: column;
  }
  .error {
    color: red;
  }
  .label {
    display: flex;
    justify-content: space-between;
    color: blue;
  }
  input {
    background: none;
    color: black;
    border: 1px solid silver;
    border-radius: 8px;
    padding: 10px;
    margin: 5px 0;
    font-size: 16px;
  }
</style>