<script setup lang="ts">
const props = defineProps({
  iconSrc: String,
  pageSrc: String,
})
</script>

<template>
  <NuxtLink class="button" :to="pageSrc">
    <img :src="iconSrc" :alt="iconSrc" />
  </NuxtLink>
</template>

<style scoped lang="scss">
.button {
  align-items: center;
  justify-content: center;
  height: 42px;
  width: 42px;
  display: flex;
  transition: 0.1s;
  border-radius: 8px;
  margin-bottom: 4px;

  img {
    height: 36px;
  }

  &:hover {
    background-color: #e1e3e8;
  }
}
</style>