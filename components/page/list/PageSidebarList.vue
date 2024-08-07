<script setup lang="ts">

</script>

<template>
  <div class="list">
    <PageSidebarListLineCard
        lineSymbolSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/JR_JY_line_symbol.svg/1024px-JR_JY_line_symbol.svg.png"
        lineColor="#9acd32"
        lineName="山手線"
        stations="30"
        class="content" />
    <PageSidebarListLineCard
        lineSymbolSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/JR_JK_line_symbol.svg/1024px-JR_JK_line_symbol.svg.png"
        lineColor="#00b2e5"
        lineName="京浜東北線"
        stations="36"
        class="content" />
    <PageSidebarListLineCard
        lineSymbolSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/JR_JK_line_symbol.svg/1024px-JR_JK_line_symbol.svg.png"
        lineColor="#00b2e5"
        lineName="根岸線"
        stations="12"
        class="content" />
    <PageSidebarListLineCard
        lineSymbolSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/JR_JA_line_symbol.svg/1024px-JR_JA_line_symbol.svg.png"
        lineColor="#00ac9a"
        lineName="埼京線"
        stations="19"
        class="content" />
    <PageSidebarListLineCard
        lineSymbolSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/JR_JA_line_symbol.svg/1024px-JR_JA_line_symbol.svg.png"
        lineColor="#00ac9a"
        lineName="川越線"
        stations="11"
        class="content" />
    <PageSidebarListLineCard
        lineSymbolSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/JR_JC_line_symbol.svg/1024px-JR_JC_line_symbol.svg.png"
        lineColor="#ef5922"
        lineName="中央線快速"
        stations="24"
        class="content" />
    <PageSidebarListLineCard
        lineSymbolSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/JR_JC_line_symbol.svg/1024px-JR_JC_line_symbol.svg.png"
        lineColor="#ef5922"
        lineName="青梅線"
        stations="25"
        class="content" />
    <PageSidebarListLineCard
        lineSymbolSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/JR_JC_line_symbol.svg/1024px-JR_JC_line_symbol.svg.png"
        lineColor="#ef5922"
        lineName="五日市線"
        stations="7"
        class="content" />
    <PageSidebarListLineCard
        lineSymbolSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/JR_JB_line_symbol.svg/1024px-JR_JB_line_symbol.svg.png"
        lineColor="#ffd400"
        lineName="中央・総武緩行線"
        stations="39"
        class="content" />
    <PageSidebarListLineCard
        lineSymbolSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/JR_JJ_line_symbol.svg/1024px-JR_JJ_line_symbol.svg.png"
        lineColor="#00b261"
        lineName="常磐快速線"
        stations="10"
        class="content" />
    <PageSidebarListLineCard
        lineSymbolSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/JR_JL_line_symbol.svg/1024px-JR_JL_line_symbol.svg.png"
        lineColor="#00b261"
        lineName="常磐緩行線"
        stations="14"
        class="content" />
  </div>
</template>

<style scoped lang="scss">
.list {
  height: 100vh;
  width: 140px;
  overflow-y: scroll;

  .content {
    margin: 12px auto;
  }
}
</style>