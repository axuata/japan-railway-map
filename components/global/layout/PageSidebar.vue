<script setup lang="ts">

</script>

<template>
  <div class="sidebar">
    <PageSidebarButton iconSrc="/assets/svg/sidebar/list.svg" pageSrc="/" />
    <PageSidebarButton iconSrc="/assets/svg/sidebar/settings.svg" pageSrc="/settings/" />
  </div>
</template>

<style scoped lang="scss">
.sidebar {
  padding: 10px;
  background-color: #f4f7fd;

  .sidebar-menu-icon {
    align-items: center;
    justify-content: center;
    height: 42px;
    width: 42px;
    display: flex;
    transition: 0.3s;
    border-radius: 8px;

    img {
      height: 32px;
    }

    &:hover {
      background-color: #e1e3e8;
    }
  }
}
</style>