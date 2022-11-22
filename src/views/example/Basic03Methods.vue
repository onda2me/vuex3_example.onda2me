<template>
  <h1>Click Event</h1>  

  <p>{{ message  }}</p>
  <div class="buttons">
    <button @click="reverseMsg">Reverse Message</button>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Simple Vue.js!'
    }
  },
  methods: {
    reverseMsg() {
      this.message = this.message.split('').reverse().join('')
    }
  }
}
</script>
<style>  
  .buttons {
    clear: both;
    height: 50px;
  }
  button{
    padding: 10px;
    font-size: 16px;
    font-weight: 500;
  } 
  button + button {
    margin-left: 10px;
  }   
</style>
