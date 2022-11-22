<template>
  <h1>Data Binding</h1>  

  <p v-bind:id="idA">아이디 바인딩: {{ idA }}</p>
  <p v-bind:class="classA">클래스 바인딩: {{ classA }}</p>
  <p v-bind:style="styleA">스타일 바인딩: {{ styleA }}</p>
</template>

<script>

export default {
  data() {
    return {
      idA: 10,
      classA: 'container',
      styleA: 'color:blue'
    }
  }
}
</script>
<style>  
 .container {
    padding: 10px 0px; 
    background-color:lavender; 
    font-weight: 600;
  }
</style>
