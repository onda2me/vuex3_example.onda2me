<template>
  <h1>Sort and Search</h1>  
  <form id="search">
    <div class="searchBox">
    Search <input name="query" v-model="searchQuery">
    </div>
  </form>

  <DemoGrid :data="gridData" :columns="gridColumns" :filter-key="searchQuery"></DemoGrid>
</template>

<script>
import DemoGrid from './04GridData.vue'

export default {
  components: {
    DemoGrid
  }, 
  data: () => ({
      searchQuery: '',
      gridColumns: ['name', 'power'],
      gridData: [
        { name: 'Chuck Norris', power: 9000 },
        { name: 'Bruce Lee', power: 8000 },
        { name: 'Jackie Chan', power: 7000 },
        { name: 'Jet Li', power: 6000 }
      ]
  })
}
</script>
<style>
 .searchBox {
    padding: 10px 0px; /*
    width: 100%;
    background-color: #eee; */
  }
</style>
