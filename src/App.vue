<template>123</template>
<script setup lang="ts">
import { login } from './service/modules/login';

login({ username: 'admin', password: '111111' }).then((res) => {
  console.log(res);
});
</script>
<style scoped></style>
