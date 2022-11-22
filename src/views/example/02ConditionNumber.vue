<template>
  <h1>Condition Number</h1>  
  
  <button @click="isShow = !isShow">Toggle List</button>&nbsp;
  <button @click="list.push(list.length + 1)">Push Number</button>&nbsp;
  <button @click="list.pop()">Pop Number</button>&nbsp;
  <button @click="list.reverse()">Reverse List</button>&nbsp;

  <ul v-if="isShow && list.length">
    <li v-for="(item, index ) of list" :key="index">{{ item }}</li>
  </ul>
  <p v-else-if="list.length">List is not empty, but hidden.</p>
  <p v-else>List is empty.</p>

</template>

<script>
export default {
  data() {
    return {
      isShow: true,
      list: [1, 2, 3 ]
    }
  }
}
</script>
