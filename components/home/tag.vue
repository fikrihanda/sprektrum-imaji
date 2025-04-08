<script lang="ts" setup>
import type { CarouselExposed, SnapAlign } from 'vue3-carousel'
import { Carousel, Slide } from 'vue3-carousel'

const myCara = ref<InstanceType<typeof Carousel> & CarouselExposed>()

const config = computed(() => {
  return {
    itemsToShow: 8,
    gap: 61,
    snapAlign: 'start' as SnapAlign,
    wrapAround: true,
    autoplay: 4000,
  }
})
</script>

<template>
  <div class="home-tag">
    <Carousel ref="myCara" v-bind="config" class="w-full">
      <Slide>
        <div class="home-tag-text">
          Branding
        </div>
      </Slide>
      <Slide>
        <NuxtIcon name="my-icon:segi-empat" class="icon" />
      </Slide>
      <Slide>
        <div class="home-tag-text">
          Marketing Strategy
        </div>
      </Slide>
      <Slide>
        <NuxtIcon name="my-icon:segi-empat" class="icon" />
      </Slide>
      <Slide>
        <div class="home-tag-text">
          Online Presence
        </div>
      </Slide>
      <Slide>
        <NuxtIcon name="my-icon:segi-empat" class="icon" />
      </Slide>
      <Slide>
        <div class="home-tag-text">
          Digital Marketing
        </div>
      </Slide>
      <Slide>
        <NuxtIcon name="my-icon:segi-empat" class="icon" />
      </Slide>
      <Slide>
        <div class="home-tag-text">
          Social Media
        </div>
      </Slide>
      <Slide>
        <NuxtIcon name="my-icon:segi-empat" class="icon" />
      </Slide>
    </Carousel>
  </div>
</template>
