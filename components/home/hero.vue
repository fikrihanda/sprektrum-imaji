<script lang="ts" setup>
const unggulItems = ref([
  {
    title: '5+',
    subtitle: 'Years of Experience',
  },
  {
    title: '59%',
    subtitle: 'Satisfied & Happy Clients',
  },
  {
    title: '90+',
    subtitle: 'Projects Completed',
  },
  {
    title: '20+',
    subtitle: 'Top Industries Served',
  },
])
</script>

<template>
  <div class="home-hero">
    <div class="home-hero-banner">
      <div class="home-hero-banner-text">
        <div class="home-hero-banner-title">
          Maximize Your Impact with Professional Branding & Digital Agency.
        </div>
        <div class="home-hero-banner-subtitle">
          We help small, medium, and large businesses succeed with powerful digital solutions. From UI/UX design to web and app development, our services are designed to create a significant impact and drive business success.
        </div>
      </div>
      <div class="home-hero-banner-consult">
        <button class="btn-default">
          Book Free Consultation
          <NuxtIcon name="my-icon:arrow" size="20" class="ml-[16px]" />
        </button>
        <div class="home-hero-banner-rating">
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
          <div class="home-hero-banner-rating-text">
            20+ clients love to work with us.
          </div>
        </div>
      </div>
    </div>
    <div class="home-hero-unggul">
      <div v-for="(item, i) in unggulItems" :key="`unggul-${i}`" class="home-hero-unggul-item">
        <div class="home-hero-unggul-item-title">
          {{ item.title }}
        </div>
        <div class="home-hero-unggul-item-subtitle">
          {{ item.subtitle }}
        </div>
      </div>
    </div>
  </div>
</template>
