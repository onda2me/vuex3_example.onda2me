<script>
export default {
  props: {
    user: Object
  }
}
</script>

<template>
  <li><a v-bind:href="'/users/'+user.id">{{ user.name }} 정보 보기</a></li>
</template>