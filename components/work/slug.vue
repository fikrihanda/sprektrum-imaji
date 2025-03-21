<script lang="ts" setup>
const items = ref(
  Array.from({ length: 4 }, (_v, i) => i),
)

const itemsFormat = computed(() => {
  return formatItems(items.value.map(m => ({ src: dynamicUrl(m) })))
})

function dynamicUrl(item: number) {
  const url = new URL(`/assets/images/works-${item + 1}.png`, import.meta.url).href
  return url
}

function formatItems(arr: ({ src: string })[]) {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      result.push([arr[i]])
    }
    else if (i % 2 === 1 && i !== arr.length - 1) {
      result.push([arr[i], arr[i + 1]])
      i++
    }
    else {
      result.push([arr[i]])
    }
  }
  return result
}
</script>

<template>
  <div class="work-slug pb-[100px]">
    <div class="work-slug-content">
      <div class="work-slug-content-left">
        <div class="work-slug-content-title">
          Kinetic Vision
        </div>
        <div class="work-slug-content-desc">
          A clean, intuitive website designed to enhance patient experience. Seamless navigation, calming aesthetics, and a user-focused approach—where healthcare meets great design.
        </div>
      </div>
      <div>
        <div>
          <div class="work-slug-content-tag-title">
            Client
          </div>
          <div class="work-slug-content-tag-desc">
            Kinetic Vision
          </div>
        </div>
        <div class="mt-[16px]">
          <div class="work-slug-content-tag-title">
            Category
          </div>
          <div class="work-slug-content-tag-desc">
            Web Design
          </div>
        </div>
        <div class="mt-[16px]">
          <div class="work-slug-content-tag-title">
            Services
          </div>
          <div class="work-slug-content-tag-desc">
            UI/UX Design,Web Design,
          </div>
        </div>
        <div class="mt-[16px]">
          <div class="work-slug-content-tag-title">
            Year
          </div>
          <div class="work-slug-content-tag-desc">
            2025
          </div>
        </div>
      </div>
    </div>
    <div class="work-slug-gallery mt-[60px]">
      <div v-for="(item, i) in itemsFormat" :key="`p-${i}`" class="flex">
        <div v-if="item.length === 1" class="work-slug-w-full h-[645px]">
          <img :src="item[0].src">
        </div>
        <template v-else>
          <div v-for="(itm, ii) in item" :key="`c-${i}-${ii}`" class="work-slug-w h-[645px]">
            <img :src="itm.src">
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
