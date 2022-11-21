<template>
  <div id="app">
    <LayoutNavi />
    <div class="contents">
      <router-view />
    </div>
    <LayoutFooter />
  </div>
</template>

<script> 
import LayoutNavi   from '@/components/layout/LayoutNavi.vue'
import LayoutFooter from '@/components/layout/LayoutFooter.vue'

export default {
  name: 'App',
  components: {
    LayoutNavi,
    LayoutFooter
  }
} 
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.contents {
  padding: 10px;
  text-align: left; 
}
</style>
