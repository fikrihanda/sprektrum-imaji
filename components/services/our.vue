<script lang="ts" setup>
const servicesItems = computed(() => {
  return [
    {
      icon: 'branding',
      title: 'Branding Design',
      desc: 'Creating a unique brand identity through strategy, design, and values to stand out in a crowded market.',
    },
    {
      icon: 'graphic',
      title: 'Graphic Design',
      desc: 'Graphic design services craft visuals that enhance brand identity and ensure consistency across platforms.',
    },
    {
      icon: 'uiux',
      title: 'UI/UX',
      desc: 'Intuitive UI/UX design enhances user satisfaction with seamless, visually appealing digital experiences.',
    },
    {
      icon: 'monitor',
      title: 'Web/App Design',
      desc: 'Crafting visually appealing, user-friendly websites with design, layout, and functionality in harmony.',
    },
    {
      icon: 'website',
      title: 'Website Development',
      desc: 'From coding to server management, we ensure seamless, robust websites—magic behind the scenes.',
    },
    {
      icon: 'app',
      title: 'App Development',
      desc: 'Custom mobile app development services tailored to your business needs with a user-friendly experience.',
    },
  ]
})
</script>

<template>
  <div class="home-services">
    <div class="home-entitled-group">
      <div class="home-entitled-container !w-full">
        <div class="home-entitled-title">
          Our Services
        </div>
        <div class="home-entitled-subtitle">
          We offer tailored solutions to enhance your social media presence and drive real results for your business.
        </div>
      </div>
    </div>
    <div class="home-services-items">
      <div v-for="(item, i) in servicesItems" :key="`services-${i}`" class="home-services-item">
        <div>
          <NuxtIcon :name="`my-icon:${item.icon}`" size="32" class="text-secondary" />
        </div>
        <div class="home-services-item-title">
          {{ item.title }}
        </div>
        <div class="home-services-item-desc">
          {{ item.desc }}
        </div>
      </div>
    </div>
  </div>
</template>
