<template>
  <div class="use-svg-icon">
    <svg :style="{ width, height }">
      <use :xlink:href="prefix + iconName" :fill="color" />
    </svg>
  </div>
</template>
<script setup lang="ts">
defineProps({
  prefix: {
    type: String,
    default: '#icon-',
  },

  iconName: {
    type: String,
  },

  width: {
    type: Number,
    default: 50,
  },

  height: {
    type: Number,
    default: 50,
  },

  color: {
    type: String,
    default: '#f00',
  },
});
</script>

<style scoped lang="less"></style>
