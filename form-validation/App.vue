<template>
  <form @submit.prevent="submit">
    <my-input 
      name="Username"
      type="text"
      :rules="{ required: true, min: 5 }"
      :value="username.value"
      :error="username.error"
      @update="update"
    />

    <my-input 
      name="Password"
      type="password"
      :rules="{ required: true, min: 10 }"
      :value="password.value"
      :error="password.error"
      @update="update"
    />
    <br/>
    <my-button 
      background="darkslateblue"
      color="white"
      :disabled="!valid"
    />
  </form>
</template>

<script>
  import MyButton from './MyButton.vue'
  import MyInput from './MyInput.vue'

  export default {
    components: {
      MyButton,
      MyInput
    },
    data() {
      return {

        username: {
          value: 'user',
          error: ''
        },
        password: {
          value: 'pass',
          error: ''
        }
      }
    },
    computed: {
      valid() {
        return (
          !this.username.error &&
          !this.password.error
        )
      }
    },
    methods: {
      submit() {
        console.log('Event')
      },
      update({ name, value, error }) {
        this[name].value = value
        this[name].error = error
      }
    }
  }
</script>

<style scoped>
</style>