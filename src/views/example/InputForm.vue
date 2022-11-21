<template>
  <h1>Input Form</h1> 
  
  <h2>Text Input</h2>
  <input type="text" v-model="text" > {{ text }}
  <hr/>

  <h2>Checkbox</h2>
  <input type="checkbox" id="checkbox" v-model="checked">
  <label for="checkbox">Checked: {{ checked }}</label>
  <hr/>
  
  <h2>Multi Checkbox</h2>
  <input type="checkbox" value="Apple" v-model="checkedNames">
  <label for="apple">Apple</label>&nbsp;
  <input type="checkbox" value="Grape" v-model="checkedNames">
  <label for="grape">Grape</label>&nbsp;
  <input type="checkbox" value="Melon" v-model="checkedNames">
  <label for="melon">Melon</label>
  <hr/>
  
  <h2>Multi Checkbox : v-for</h2>
  <div v-if="list.length">
    <span v-for="(item, index) of list" :key="index" > <input type="checkbox" :value="item" v-model="checkedNames">{{ index+1 }}.{{ item }}&nbsp;</span>
  </div>
  <p>Checked names: <pre>{{ checkedNames }}</pre></p>
  <hr/>

  
</template>

<script>
  export default {
    data() {
      return {
        text: 'Edit me',
        checked: true,
        list: ['Apple', 'Grape', 'Melon'], 
        checkedNames: ['Grape', 'Melon'],
      }
    }
  }
</script>
