<script lang="ts" setup>
const refEl = ref<HTMLElement>()
const refHeight = ref<number>()

function scrollHeader() {
  const lebihScroll = window.scrollY > (refHeight.value! + 60)
  if (lebihScroll) {
    refEl.value?.classList.remove('off')
    refEl.value?.classList.add('on')
  }
  else {
    refEl.value?.classList.remove('on')
    refEl.value?.classList.add('off')
  }
}

onMounted(() => {
  refHeight.value = refEl.value?.offsetHeight
  scrollHeader()
  window.addEventListener('scroll', scrollHeader)
})
</script>

<template>
  <div ref="refEl" class="si-header">
    <img src="~/assets/images/logo.svg">
    <div class="si-header-menu">
      <NuxtLink to="/">
        Home
      </NuxtLink>
      <NuxtLink to="/about">
        About
      </NuxtLink>
      <NuxtLink to="/services">
        Services
      </NuxtLink>
      <NuxtLink to="/works">
        Works
      </NuxtLink>
      <NuxtLink to="/contact">
        Contact
      </NuxtLink>
    </div>
    <!-- <div>a</div> -->
  </div>
</template>
