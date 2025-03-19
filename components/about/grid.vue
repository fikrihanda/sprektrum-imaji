<script lang="ts" setup>
import Masonry from 'masonry-layout'

const gridItem = ref<HTMLElement>()
const mason = ref<Masonry>()

onMounted(() => {
  mason.value = new Masonry(gridItem.value!, {
    itemSelector: '.about-grid-item',
    percentPosition: true,
    columnWidth: '.about-grid-sizer',
  })
})
</script>

<template>
  <div class="about-grid">
    <div ref="gridItem" class="about-grid-items">
      <div class="about-grid-sizer" />
      <div class="about-grid-item one">
        <img src="~/assets/images/about-grid-1.png">
      </div>
      <div class="about-grid-item two">
        <img src="~/assets/images/about-grid-2.png">
      </div>
      <div class="about-grid-item two">
        <div class="w-full h-full bg-accent rounded-[16px]" />
      </div>
      <div class="about-grid-item three">
        <img src="~/assets/images/about-grid-3.png">
      </div>
      <div class="about-grid-item four">
        <div class="w-full h-full bg-secondary rounded-[16px]" />
      </div>
    </div>
  </div>
</template>
