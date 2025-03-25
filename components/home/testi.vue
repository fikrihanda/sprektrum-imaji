<script lang="ts" setup>
import type { CarouselExposed, SnapAlign } from 'vue3-carousel'
import { Carousel, Slide } from 'vue3-carousel'

const testiLogo = Array.from({ length: 5 })

const myCara = ref<InstanceType<typeof Carousel> & CarouselExposed>()

const config = computed(() => {
  return {
    itemsToShow: 4,
    gap: 40,
    snapAlign: 'start' as SnapAlign,
    wrapAround: true,
    autoplay: 4000,
  }
})

function dynamicUrl(item: number) {
  const url = new URL(`/assets/images/testi-${item + 1}.svg`, import.meta.url).href
  return url
}
</script>

<template>
  <div class="home-testi">
    <div class="text-center text-[24px] text-whitend-600 font-bold leading-[24px] tracking-[0.048px]">
      Trusted by these Companies
    </div>
    <div class="mt-[60px] p-[40px]">
      <Carousel ref="myCara" v-bind="config">
        <Slide v-for="(_item, i) in testiLogo" :key="`testiLogo-${i}`">
          <img :src="dynamicUrl(i)">
        </Slide>
      </Carousel>
    </div>
  </div>
</template>
