<script lang="ts" setup>
import type { CarouselExposed, SnapAlign } from 'vue3-carousel'
import { Carousel, Slide } from 'vue3-carousel'

const myCara = ref<InstanceType<typeof Carousel> & CarouselExposed>()
const items = ref(
  Array.from({
    length: 9,
  }, (_v, i) => {
    return {
      id: i + 1,
      title: 'Content Creation',
      desc: 'Our team produces eye-catching graphics',
    }
  }),
)
const config = computed(() => {
  return {
    itemsToShow: 3,
    gap: 40,
    snapAlign: 'start' as SnapAlign,
    wrapAround: true,
  }
})

function dynamicUrl(item: number) {
  const url = new URL(`/assets/images/items-${item + 1}.png`, import.meta.url).href
  return url
}
function nextCara() {
  myCara.value!.next()
}

function prevCara() {
  myCara.value!.prev()
}
</script>

<template>
  <div class="work-migth">
    <div class="home-entitled-group">
      <div class="home-entitled-container">
        <div class="home-entitled-title mt-[24px]">
          You might also like
        </div>
        <div class="home-entitled-subtitle">
          Collaboration enhances our best qualities through genuine interactions and valuable insights.
        </div>
      </div>
      <div class="ml-auto flex gap-[16px]">
        <button class="btn-actions" @click="prevCara">
          <NuxtIcon name="my-icon:arrow-left" />
        </button>
        <button class="btn-actions" @click="nextCara">
          <NuxtIcon name="my-icon:arrow-right" />
        </button>
      </div>
    </div>
    <div class="mt-[24px]">
      <Carousel ref="myCara" v-bind="config">
        <Slide v-for="(item, i) in items" :key="`item-${i}`">
          <div class="home-exceptional-item">
            <div class="home-exceptional-img">
              <img :src="dynamicUrl(i)">
            </div>
            <div class="home-exceptional-desc">
              <div>
                <div class="home-exceptional-desc-title">
                  {{ item.title }}
                </div>
                <div class="home-exceptional-desc-desc">
                  {{ item.desc }}
                </div>
              </div>
              <div class="ml-auto">
                <button class="btn-actions">
                  <NuxtIcon name="my-icon:arrow" size="20" />
                </button>
              </div>
            </div>
          </div>
        </Slide>
      </Carousel>
    </div>
  </div>
</template>
