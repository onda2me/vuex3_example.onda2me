<template>
  <h1>Click Event</h1>  
  <div class="buttons">
    <button @click="clickBtn('One')">Click One</button>
    <button @click="clickBtn('Two')">Click Two</button>
    <button @click="clickBtn('Three')">Click Three</button>
  </div>
  <p>Clicked {{ clickNum }} Button </p>
  <p>Click {{ clickCount }} times. </p>
</template>

<script>
export default {
  data() {
    return {
      clickNum: '',
      clickCount: 0
    }
  },
  methods: {
    clickBtn: function(num) {
      this.clickNum = num
      this.clickCount++
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
