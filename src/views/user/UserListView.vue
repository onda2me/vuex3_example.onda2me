<template>
  <h1>User List</h1> 
  <h2>Case1. 단일 컴포넌트에서 V-for 지시문을 사용하여 List 구현</h2>
  <ul>
    <li v-for="user in users" :key="user.id">
      <a v-bind:href="'/users/'+user.id">{{ user.name}} 정보 보기</a>
    </li>
  </ul>
  
  <h2>Case2. 컴포넌트를 분리하여 List 구현</h2>
  <ul>
    <UserItem v-for="user in users" :user="user" :key="user.id"></UserItem>
  </ul>
</template>
  
<script>
import UserItem from './UserItem.vue'

export default { 
    components: {
      UserItem
    },    
    data() {
      return {
        users : [
              {id : 0, name : '0번 사용자', email : 'user0@email.com'},
              {id : 1, name : '1번 사용자', email : 'user1@email.com'},
              {id : 2, name : '2번 사용자', email : 'user2@email.com'},
              {id : 3, name : '3번 사용자', email : 'user3@email.com'}
        ]
      }
    }
}
</script>

<style>  
  ul { list-style-type: circle; }
  li { padding: 5px; }
</style>