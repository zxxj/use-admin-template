<template>
  <div class="layout">
    <Layout class="container">
      <a-layout-sider class="sider">
        <Logo />

        <Menu :items="items" />
      </a-layout-sider>
      <Layout>
        <a-layout-header class="header">Header</a-layout-header>
        <a-layout-content class="main">main</a-layout-content>
      </Layout>
    </Layout>
  </div>
</template>
<script setup lang="ts">
import { Layout } from 'ant-design-vue';
import Logo from '@/components/logo.vue';
import Menu from './components/menu.vue';
import useUserStore from '@/stores/modules/user';
import { ref } from 'vue';

const userStore = useUserStore();
const items = ref(userStore.constantRoutes);
</script>

<style scoped lang="scss">
.layout {
  height: 100vh;
  .container {
    height: 100%;

    .sider {
      flex: 0 0 240px !important;
      max-width: 240px !important;
    }

    .header {
      background-color: transparent;
    }

    .main {
      padding: 20px;
      overflow: auto;
    }
  }
}
</style>
