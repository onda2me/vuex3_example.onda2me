<template>  
  <h1>User Detail</h1>   
  <p>사용자 id : {{ $route.params.id }}</p>
  <p>사용자 name : {{users[$route.params.id].name}}</p>
  <p>사용자 email : {{users[$route.params.id].email}}</p>
</template>

<script>
export default { 
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