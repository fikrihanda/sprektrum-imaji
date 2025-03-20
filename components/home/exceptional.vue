<script lang="ts" setup>
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
  <div class="home-exceptional">
    <div class="home-entitled-group">
      <div class="home-entitled-container">
        <div class="home-entitled-title">
          Exceptional Work
        </div>
        <div class="home-entitled-subtitle">
          Explore our recent projects showcasing creativity, innovation, and impactful design solutions.
        </div>
      </div>
      <button class="btn-select ml-auto">
        Show More Works
        <NuxtIcon name="my-icon:arrow" size="20" class="ml-[16px]" />
      </button>
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
    </div>
  </div>
</template>
