<script lang="ts" setup>
useHead({
  title: 'Works',
})
const tags = ref([
  {
    value: null,
    text: 'All',
  },
  {
    value: 1,
    text: 'Graphic Design',
  },
  {
    value: 2,
    text: 'UI/UX Design',
  },
  {
    value: 3,
    text: 'Web Development',
  },
  {
    value: 4,
    text: 'App Development',
  },
])
const selectTag = ref(tags.value[0])
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

function activeButton(item: {
  value: null | number
  text: string
}) {
  return selectTag.value.value === item.value ? 'active' : null
}

function dynamicUrl(item: number) {
  const url = new URL(`/assets/images/items-${item + 1}.png`, import.meta.url).href
  return url
}
</script>

<template>
  <div class="works-except">
    <div class="home-entitled-group">
      <div class="home-entitled-container !w-full">
        <div class="home-entitled-title">
          Exceptional Work
        </div>
        <div class="home-entitled-subtitle">
          Explore our recent projects showcasing creativity, innovation, and impactful design solutions.
        </div>
      </div>
    </div>
    <div class="home-exceptional-tags">
      <button v-for="(item, i) in tags" :key="`tag-${i}`" class="btn-select" :class="[activeButton(item)]" @click="selectTag = item">
        {{ item.text }}
      </button>
    </div>
    <div class="home-exceptional-items">
      <div v-for="(item, i) in items" :key="`item-${i}`" class="home-exceptional-item">
        <div class="home-exceptional-img">
          <img :src="dynamicUrl(i)">
        </div>
        <div class="home-exceptional-desc">
          <div>
            <div class="home-exceptional-desc-title">
              {{ item.title }}
            </div>
          </div>
          <div class="">
            <button class="btn-select detail">
              View Detail
              <NuxtIcon name="my-icon:arrow" class="ml-3" size="12" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center mt-[60px]">
      <button class="btn-select">
        Load More
      </button>
    </div>
  </div>
</template>
