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
    <PageSidebarListLineCard
        lineSymbolSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/JR_JE_line_symbol.svg/1024px-JR_JE_line_symbol.svg.png"
        lineColor="#c9252f"
        lineName="京葉線"
        stations="19"
        class="content" />
    <PageSidebarListLineCard
        lineSymbolSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/JR_JM_line_symbol.svg/1024px-JR_JM_line_symbol.svg.png"
        lineColor="#ee5922"
        lineName="武蔵野線"
        stations="29"
        class="content" />
    <PageSidebarListLineCard
        lineSymbolSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JR_JN_line_symbol.svg/1024px-JR_JN_line_symbol.svg.png"
        lineColor="#ffd400"
        lineName="南武線"
        stations="30"
        class="content" />
    <PageSidebarListLineCard
        lineSymbolSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/JR_JI_line_symbol.svg/1024px-JR_JI_line_symbol.svg.png"
        lineColor="#ffd400"
        lineName="鶴見線"
        stations="13"
        class="content" />
    <PageSidebarListLineCard
        lineSymbolSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/JR_JH_line_symbol.svg/1024px-JR_JH_line_symbol.svg.png"
        lineColor="#80c342"
        lineName="横浜線"
        stations="20"
        class="content" />
    <PageSidebarListLineCard
        lineSymbolSrc="https://placehold.jp/64x64.png"
        lineColor="#009692"
        lineName="相模線"
        stations="18"
        class="content" />
    <PageSidebarListLineCard
        lineSymbolSrc="https://placehold.jp/64x64.png"
        lineColor="#a8a39d"
        lineName="八高線"
        stations="23"
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