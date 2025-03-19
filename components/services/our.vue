<script lang="ts" setup>
const servicesItems = computed(() => {
  return [
    {
      icon: 'medal',
      title: 'Landing Page Design',
    },
    {
      icon: 'monitor',
      title: 'UI/UX Design',
    },
    {
      icon: 'monitor',
      title: 'UI/UX Design',
    },
    {
      icon: 'community',
      title: 'Web Development',
    },
    {
      icon: 'megaphone',
      title: 'App Development',
    },
    {
      icon: 'megaphone',
      title: 'App Development',
    },
  ]
})
</script>

<template>
  <div class="services-our ">
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
    <div class="services-our-items">
      <div v-for="(item, i) in servicesItems" :key="`services-${i}`" class="services-our-item">
        <div>
          <NuxtIcon :name="`my-icon:${item.icon}`" size="32" class="text-secondary" />
        </div>
        <div class="services-our-item-title">
          {{ item.title }}
        </div>
        <div class="services-our-item-desc">
          We keep an eye on what people are saying about your brand online. This helps us manage your reputation.
        </div>
      </div>
    </div>
  </div>
</template>
