<template>
  <div class="layout">
    <PageSidebar />
    <slot />
    <PageMapMap />
  </div>
  <slot />
</template>

<style scoped lang="scss">
.layout {
  display: flex;
}
</style>