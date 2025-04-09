<script lang="ts" setup>
const refEl = ref<HTMLElement>()
const mdContent = ref<HTMLElement>()
const refHeight = ref<number>()
const toMenu = ref('#menu-lg')
const toIcon = ref('#icon-lg')
const mounted = ref(false)
const open = ref(false)

const listsLang = computed(() => {
  return [
    {
      id: 'en',
      icon: 'flag-eng',
      name: 'English',
    },
    {
      id: 'id',
      icon: 'flag-idn',
      name: 'Indonesia',
    },
  ]
})
const activeBreakpoint = breakpoints.active()

const selectedLang = ref<typeof listsLang.value[0]>(
  listsLang.value[0],
)

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

function setMenu() {
  if (breakpoints.isGreater('md')) {
    toMenu.value = '#menu-lg'
    toIcon.value = '#icon-lg'
  }
  else {
    toMenu.value = '#menu-md'
    toIcon.value = '#icon-md'
  }
}

function resize() {
  if (breakpoints.isGreater('md') && open.value) {
    open.value = false
  }
}

watch(open, (val) => {
  if (val) {
    document.body.classList.add('si-header-no-overflow')
  }
  else {
    document.body.classList.remove('si-header-no-overflow')
  }
})

onMounted(() => {
  mounted.value = true
  setMenu()
  refHeight.value = refEl.value?.offsetHeight
  scrollHeader()
  onClickOutside(mdContent, () => {
    open.value = false
  })
  window.addEventListener('scroll', scrollHeader)
  window.addEventListener('resize', resize)
})

onBeforeMount(() => {
  window.removeEventListener('scroll', scrollHeader)
  window.removeEventListener('resize', resize)
})

watch(activeBreakpoint, () => setMenu())
</script>

<template>
  <div ref="refEl" class="si-header">
    <img src="~/assets/images/logo.svg">
    <div id="menu-lg" class="si-header-menu" />
    <div id="icon-lg" class="si-header-opt" />
    <button class="si-header-bars" @click="open = true">
      <NuxtIcon name="my-icon:bars" size="16" />
    </button>
  </div>
  <div class="si-header-md" :class="[open && 'open']">
    <div class="si-header-md-header">
      <img src="~/assets/images/logo.svg">
      <button class="si-header-bars" @click="open = false">
        <NuxtIcon name="my-icon:close" size="16" />
      </button>
    </div>
    <div ref="mdContent" class="si-header-md-content">
      <div id="menu-md" />
      <div id="icon-md" />
    </div>
  </div>
  <Teleport to="body" :disabled="!open">
    <div class="si-header-backdrop" :class="[!open && 'hidden']" />
  </Teleport>
  <Teleport v-if="mounted" :to="toMenu">
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
  </Teleport>
  <Teleport v-if="mounted" :to="toIcon">
    <div class="si-header-opt-icon">
      <a href="#" class="si-header-opt-icon-item">
        <NuxtIcon name="my-icon:instagram" />
      </a>
      <a href="#" class="si-header-opt-icon-item">
        <NuxtIcon name="my-icon:linkedin" />
      </a>
    </div>
    <div class="si-header-dd">
      <button class="si-header-dd-btn">
        <NuxtIcon :name="`my-icon:${selectedLang.icon}`" class="mr-[8px]" />
        {{ selectedLang.name }}
        <NuxtIcon name="my-icon:chevron-down" />
      </button>
    </div>
  </Teleport>
</template>
