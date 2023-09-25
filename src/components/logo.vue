<template>
  <div class="logo">
    <div class="icon">
      <img class="img" src="@/assets/images/logo.png" alt="logo" />
    </div>
    <div class="title">{{ logoTitle }}</div>
  </div>
</template>

<script setup lang="ts">
import { logoTitle } from '@/setting';
</script>

<style scoped lang="scss">
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;

  .img {
    width: 32px;
    height: 32px;
    vertical-align: top;
  }

  .title {
    margin-left: 20px;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
  }
}
</style>
