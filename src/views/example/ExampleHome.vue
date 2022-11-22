<template>
  <div class="sidebar">
    <div v-for="url in urlList" :key="url.path">
      <a v-if="$route.path.toUpperCase() == url.path.toUpperCase()" v-bind:href="url.path" class="active">{{ url.name}}</a>
      <a v-if="$route.path.toUpperCase() != url.path.toUpperCase()" v-bind:href="url.path" >{{ url.name}}</a>      
    </div>

  </div>
  <div class="main">
    <router-view/>
  </div>    
</template>

<script>
export default { 
    data() {
      return {
        urlList : [
          {path: '/example/InputForm',          name: 'InputForm'},
          {path: '/example/ConditionNumber',    name: 'ConditionNumber'},
          {path: '/example/ToggleColor',        name: 'ToggleColor'},
          {path: '/example/SortSearch',         name: 'SortSearch'},
          {path: '/example/CRUD',               name: 'CRUD'},
          {path: '/example/BasicBinding',       name: 'BasicBinding'},
          {path: '/example/BasicClick',         name: 'BasicClick'},
          {path: '/example/BasicMethods',       name: 'BasicMethods'}
        ]
      }
    }
}
</script>

<style> 
.sidebar {
  margin: 0;
  padding: 0;
  width: 180px;
  top: 90px;
  left: 8px;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: auto;
}

.sidebar a {
  display: block;
  color: black;
  padding: 16px;
  text-decoration: none;
}
 
.sidebar a.active {
  background-color: #04AA6D;
  color: white;
}

.sidebar a:hover:not(.active) {
  background-color: #555;
  color: white;
}

.main {
  margin-left: 190px; /* Same as the width of the sidenav */
  padding: 10px 10px;
}



</style>

