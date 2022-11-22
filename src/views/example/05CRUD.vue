<template>
  <h1>Create, Update, Delete</h1>  
  <select size="5" v-model="selected">
    <option v-for="name in names" :key="name">{{ name }}</option>
  </select>

  <label>Name:</label><input v-model="first">
  <label>Last Name:</label><input v-model="last">

  <div class="buttons">
    <button @click="mcreate">Create</button>
    <button @click="mupdate">Update</button>
    <button @click="mdelete">Delete</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      names: ['Gildong, Hong', 'Jackie, Chan', 'Bruce, Lee'],
      selected: '',
      first: '',
      last: ''
    }
  },
  watch: {
    selected(name) {
      [this.first, this.last] = name.split(', ')
    }
  },
  methods: {
    mcreate() {
      console.log("create");
      if(this.hasValidInput()) {
        // console.log(this.first + ", " + this.last)
        const fullName = this.first +", " + this.last
        console.log(this.first + ", " + this.last +"==" + fullName)

        if(!this.names.includes(fullName)) {
          this.names.push(fullName)
          this.first = this.last = ''
        }
      }      
    },
    mupdate() {
      //console.log("update");
      if(this.hasValidInput() && this.selected) {
        const i = this.names.indexOf(this.selected)
        this.names[i] = this.selected = this.first +", " + this.last
      }
    },
    mdelete() {
      //console.log("delete.selected : " + this.selected)

      if(this.selected) {
        const i = this.names.indexOf(this.selected)
        this.names.splice(i, 1)
        this.selected = this.first = this.last = ''
      }
    },
    hasValidInput() {
      return this.first.trim() && this.last.trim();
    }

  }
}
</script>
<style>
 .searchBox {
    padding: 10px 0px; /*
    width: 100%;
    background-color: #eee; */
  }
  input {
    display: block;
    margin-bottom: 10px;
  }

  select {
    float: left;
    margin: 0 1em 1em 0;
    width: 14em;
  }

  .buttons {
    clear: both;
  }

  button + button {
    margin-left: 5px;
  }  
</style>
