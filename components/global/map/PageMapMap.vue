<script setup>
import { ref, onMounted } from 'vue'

const geojsonConfigs = [
  {
    url: "/assets/geojson/jr_east-yamanote.geojson",
    style: (feature) => ({
      opacity: feature.properties.code / 100000,
      color: "#9acd32",
      weight: 6,
    }),
    popupContent: '山手線'
  },
  {
    url: "/assets/geojson/jr_east-keihintohoku.geojson",
    style: (feature) => ({
      opacity: feature.properties.code / 100000,
      color: "#00b2e5",
      weight: 6,
    }),
    popupContent: '京浜東北線'
  },
  {
    url: "/assets/geojson/jr_east-negishi.geojson",
    style: (feature) => ({
      opacity: feature.properties.code / 100000,
      color: "#00b2e5",
      weight: 6,
    }),
    popupContent: '根岸線'
  },
  {
    url: "/assets/geojson/jr_east-saikyo.geojson",
    style: (feature) => ({
      opacity: feature.properties.code / 100000,
      color: "#00ac9a",
      weight: 6,
    }),
    popupContent: '埼京線'
  },
  {
    url: "/assets/geojson/jr_east-kawagoe.geojson",
    style: (feature) => ({
      opacity: feature.properties.code / 100000,
      color: "#00ac9a",
      weight: 6,
    }),
    popupContent: '川越線'
  },
  {
    url: "/assets/geojson/jr_east-chuokaisoku.geojson",
    style: (feature) => ({
      opacity: feature.properties.code / 100000,
      color: "#f15a22",
      weight: 6,
    }),
    popupContent: '中央線快速'
  },
  {
    url: "/assets/geojson/jr_east-oume.geojson",
    style: (feature) => ({
      opacity: feature.properties.code / 100000,
      color: "#f15a22",
      weight: 6,
    }),
    popupContent: '青梅線'
  },
  {
    url: "/assets/geojson/jr_east-itsukaichi.geojson",
    style: (feature) => ({
      opacity: feature.properties.code / 100000,
      color: "#f15a22",
      weight: 6,
    }),
    popupContent: '五日市線'
  },
  {
    url: "/assets/geojson/jr_east-chuosobukanko.geojson",
    style: (feature) => ({
      opacity: feature.properties.code / 100000,
      color: "#ffd400",
      weight: 6,
    }),
    popupContent: '中央・総武緩行線'
  },
  {
    url: "/assets/geojson/jr_east-jobankaisoku.geojson",
    style: (feature) => ({
      opacity: feature.properties.code / 100000,
      color: "#00b161",
      weight: 6,
    }),
    popupContent: '常磐快速線'
  },
  {
    url: "/assets/geojson/jr_east-jobankanko.geojson",
    style: (feature) => ({
      opacity: feature.properties.code / 100000,
      color: "#00b161",
      weight: 6,
    }),
    popupContent: '常磐緩行線'
  },
]

const geojson = ref([])
const mapCenter = [35.681236, 139.767125]
const zoomLevel = 12

const loadGeoJson = async (url) => {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Failed to fetch ${url}`)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
    return null
  }
}

onMounted(async () => {
  const loadedGeoJson = await Promise.all(
      geojsonConfigs.map(async ({url, style, popupContent}) => {
        const data = await loadGeoJson(url)
        return {data, style, popupContent}
      })
  )
  geojson.value = loadedGeoJson.filter(({data}) => data !== null)
})
</script>

<template>
  <div class="map">
    <LMap
        :zoom="zoomLevel"
        :center="mapCenter"
        :use-global-leaflet="false"
    >
      <LTileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
          layer-type="base"
          name="OpenStreetMap"
      />
      <LGeoJson
          v-for="(config, index) in geojson"
          :key="index"
          :geojson="config.data"
          :options-style="config.style"
      >
        <LPopup>{{ config.popupContent }}</LPopup>
      </LGeoJson>
    </LMap>
  </div>
</template>

<style scoped lang="scss">
.map {
  height: 100vh;
  width: 100%;
}
</style>
