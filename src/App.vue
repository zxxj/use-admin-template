<template>123</template>
<script setup lang="ts">
import request from './service';

request({
  url: '/user/1login',
  method: 'post',
  data: {
    username: 'admin',
    password: '11111111',
  },
}).then((res) => {
  console.log(res);
});
</script>
<style scoped></style>
