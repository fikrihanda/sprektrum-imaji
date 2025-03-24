// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: ['./assets/styles/app.scss', 'vue3-carousel/carousel.css'],
  modules: [
    '@nuxt/icon',
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
  ],
  icon: {
    size: '24px',
    componentName: 'NuxtIcon',
    customCollections: [
      {
        prefix: 'my-icon',
        dir: './assets/my-icons',
      },
    ],
  },
  googleFonts: {
    download: false,
    families: {
      'Space Grotesk': {
        wght: [300, 400, 500, 600, 700],
      },
    },
  },
  tailwindcss: {
    config: {
      theme: {
        fontFamily: {
          sans: ['"Space Grotesk"', 'Tofu'],
        },
        extend: {
          colors: {
            'primary-500': '#061425',
            'secondary': '#9DE500',
            'accent': '#0E1C30',
            'violet-500': '#38338F',
            'whitend-500': '#E9F1FB',
            'whitend-600': '#D4DBE4',
          },
        },
      },
      // content: {
      //   files: [
      //     '{srcDir}/components/**/*.{vue,js,jsx,mjs,ts,tsx}',
      //     '{srcDir}/layouts/**/*.{vue,js,jsx,mjs,ts,tsx}',
      //     '{srcDir}/pages/**/*.{vue,js,jsx,mjs,ts,tsx}',
      //     '{srcDir}/plugins/**/*.{js,ts,mjs}',
      //     '{srcDir}/composables/**/*.{js,ts,mjs}',
      //     '{srcDir}/utils/**/*.{js,ts,mjs}',
      //     '{srcDir}/{A,a}pp.{vue,js,jsx,mjs,ts,tsx}',
      //     '{srcDir}/{E,e}rror.{vue,js,jsx,mjs,ts,tsx}',
      //     '{srcDir}/app.config.{js,ts,mjs}',
      //     '{srcDir}/app/spa-loading-template.html',
      //   ],
      // },
    },
  },
})
