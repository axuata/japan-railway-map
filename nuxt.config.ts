// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},
  css: [
    '~/assets/styles/global.scss'
  ],
  modules: ['@nuxt/image', '@nuxtjs/leaflet'],
  app: {
    head: {
      title: "日本鉄道マップ",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }, // Favicon should be public/favicon.png
      ],
    },
  },
  components: [{
    path: '~/components/',
    pathPrefix: false,
  }],
})