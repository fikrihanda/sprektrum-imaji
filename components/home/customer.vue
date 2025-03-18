<script lang="ts" setup>
import type { CarouselExposed, SnapAlign } from 'vue3-carousel'
import { Carousel, Slide } from 'vue3-carousel'

const myCara = ref<InstanceType<typeof Carousel> & CarouselExposed>()

const config = computed(() => {
  return {
    itemsToShow: 2,
    gap: 40,
    snapAlign: 'start' as SnapAlign,
    wrapAround: true,
  }
})

const testis = ref([
  {
    name: 'Marvin McKinney',
    job: 'UI/UX Designer,AirHub',
  },
  {
    name: 'Cooper, Kristin',
    job: 'Project Manager',
  },
  {
    name: 'Marvin McKinney',
    job: 'UI/UX Designer,AirHub',
  },
  {
    name: 'Cooper, Kristin',
    job: 'Project Manager',
  },
])

function nextCara() {
  myCara.value!.next()
}

function prevCara() {
  myCara.value!.prev()
}
</script>

<template>
  <div class="home-customer">
    <div class="home-entitled-group">
      <div class="home-entitled-container">
        <div>
          <div class="home-entitled-tag">
            Feedback
          </div>
        </div>
        <div class="home-entitled-title mt-[24px]">
          Customer testimonials
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
    <div class="mt-[60px]">
      <Carousel ref="myCara" v-bind="config">
        <Slide v-for="(item, i) in testis" :key="`testis-${i}`">
          <div class="home-customer-item">
            <div>
              <NuxtIcon name="my-icon:quote" class="text-secondary" />
            </div>
            <div class="home-customer-item-quote">
              The agency transformed my website! They created a beautiful timeline that showcased my work perfectly. Their attention to detail made the process seamless, and I'm thrilled with the results!
            </div>
            <div class="home-customer-item-user-r mt-[24px]">
              <div class="home-customer-item-user">
                <img :src="`https://i.pravatar.cc/300?img=${i}`">
                <div>
                  <div class="home-customer-item-user-name">
                    {{ item.name }}
                  </div>
                  <div class="home-customer-item-user-job">
                    {{ item.job }}
                  </div>
                </div>
              </div>
              <div class="home-hero-banner-star">
                <div class="home-hero-banner-star-inner">
                  <NuxtIcon name="my-icon:star" class="star" />
                  <NuxtIcon name="my-icon:star" class="star" />
                  <NuxtIcon name="my-icon:star" class="star" />
                  <NuxtIcon name="my-icon:star" class="star" />
                  <NuxtIcon name="my-icon:star" class="star" />
                </div>
                <div class="home-hero-banner-star-text">
                  5.0
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </Carousel>
    </div>
  </div>
</template>
