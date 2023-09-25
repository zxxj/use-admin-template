<template>
  <div class="menu">
    <Menu mode="inline" theme="dark">
      <template v-for="item in props.items" :key="item.path">
        <MenuItem v-if="!item.children && !item.meta.menuHidden" :key="item">
          <span>{{ item.meta.title }}</span>
        </MenuItem>

        <MenuItem
          v-if="
            item.children && item.children.length === 1 && !item.meta.menuHidden
          "
        >
          <MenuItem v-if="!item.children && !item.meta.menuHidden" :key="item">
            <span>{{ item.meta.title }}</span>
          </MenuItem>
        </MenuItem>

        <SubMenu
          v-if="
            item.children && item.children.length > 1 && !item.meta.menuHidden
          "
        >
          <template #title>{{ item.meta.title }}</template>

          <template v-for="subItem in item.children" :key="subItem">
            <MenuItem>{{ subItem.meta.title }}</MenuItem>
          </template>
        </SubMenu>
      </template>
    </Menu>
  </div>
</template>

<script setup lang="ts">
import { Menu, SubMenu, MenuItem } from 'ant-design-vue';

const props = defineProps({
  items: {
    type: Array as any,
    required: true,
    default: () => [],
  },
});
</script>

<style scoped lang="scss"></style>
