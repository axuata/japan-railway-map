<script setup lang="ts">
import { onMounted, ref } from 'vue';

const props = defineProps({
  lineSymbolSrc: String,
  lineColor: String,
  lineName: String,
  stations: String,
})

const cardRef = ref<HTMLElement | null>(null);
const titleRef = ref<HTMLElement | null>(null);

onMounted(() => {
  if (cardRef.value && titleRef.value) {
    cardRef.value.style.borderColor = props.lineColor;
  } else {
    console.log("cardRef or titleRef is null!");
  }
});
</script>

<template>
  <div class="card" ref="cardRef">
    <img :src="lineSymbolSrc" :alt="lineSymbolSrc">
    <p class="card-title" ref="titleRef">{{ lineName }}</p>
    <div class="infos">
      <p>{{ stations }}駅</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  width: 100px;
  text-align: center;
  border: solid 3px #ffffff;
  border-radius: 16px;
  padding: 12px;

  img {
    margin: 0 auto;
    height: 64px;
    width: 64px;
  }

  .card-title {
    font-size: 16px;
    font-weight: 600;
  }

  .infos {
    justify-content: center;
    display: flex;

    p {
      font-size: 12px;
    }
  }
}
</style>
