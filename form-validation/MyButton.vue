<template>
  <button
    :style="{ background, color }"
    :disabled="disabled"
  >
    My Button
  </button>
</template>

<script>
  export default {
    props: {
      background: {
        type: String,
        requiered: true
      },
      color: {
        type: String,
        requiered: true
      },
      disabled: {
        type: Boolean,
        requiered: false
      }
    }
  }
</script>

<style scoped>
button {
  background: none;
  padding: 10px 40px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  color: black;
  margin-top: 10px;
}
button:disabled {
  opacity: 0.5;
}
button:hover {
  filter: brightness(125%);
}
</style>