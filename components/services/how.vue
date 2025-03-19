<script lang="ts" setup>
const howDoit = computed(() => {
  return [
    {
      title: 'Initial Consultation',
      desc: 'Schedule an initial meeting to discuss your goals and social media needs.',
    },
    {
      title: 'Strategy Development',
      desc: 'We\'ll create a customized social media strategy tailored to your brand.',
    },
    {
      title: 'Launch and Improve',
      desc: 'We implement the strategy and monitor performance for results.',
    },
    {
      title: 'Launch and Improve',
      desc: 'We implement the strategy and monitor performance for results.',
    },
  ]
})
</script>

<template>
  <div class="services-how">
    <div class="home-entitled-group">
      <div class="home-entitled-container !w-full">
        <div class="home-entitled-title">
          How do we do it?
        </div>
        <div class="home-entitled-subtitle">
          Easy to begin and streamlined to the end. We'll stick to async comms and keep meetings to a minimum, for your sake and mine.
        </div>
      </div>
    </div>
    <div class="services-how-items">
      <div v-for="(item, i) in howDoit" :key="`how-${i}`" class="services-how-item">
        <div class="">
          <div class="services-how-number">
            0{{ i + 1 }}
          </div>
        </div>
        <div class="services-how-title">
          {{ item.title }}
        </div>
        <div class="services-how-desc">
          {{ item.desc }}
        </div>
      </div>
    </div>
  </div>
</template>
