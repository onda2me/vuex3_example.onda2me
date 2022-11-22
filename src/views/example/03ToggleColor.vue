<template>
  <h1>Toggle Color</h1>  
  <p :class="{ red: isRed }" @click="toggleRed">
    This is <span v-if="isRed">red</span><span v-else>black</span>... but click me to toggle it.
  </p>
  <p :style="{ color }" @click="toggleColor">
    This is {{ color }} ... but click me to toggle it.
  </p>
</template>

<script>
export default {
  data() {
    return {
      isRed: true,
      color: 'green'
    }
  },
  methods: {
    toggleRed() {
      this.isRed = !this.isRed
    }, 
    toggleColor() {
      this.color = this.color === 'green' ? 'blue' : 'green'
    }
  }
}
</script>
<style>
 .red { color: red; }
</style>
