<script lang="ts" setup>
useHead({
  title: 'Contact',
})
</script>

<template>
  <div class="contact">
    <div class="home-entitled-group">
      <div class="home-entitled-container !w-full">
        <div class="home-entitled-title">
          Contact Us
        </div>
        <div class="home-entitled-subtitle">
          We'd love to hear from you! Whether you have a project in mind, need a custom design solution, or want to collaborate, our team is ready to assist you.
        </div>
      </div>
    </div>
    <div class="contact-container">
      <div class="contact-form">
        <div class="flex gap-[24px] w-full">
          <div class="w-[50%]">
            <label class="contact-label">
              Name
            </label>
            <input class="contact-input mt-[6px]" placeholder="Enter Your Name">
          </div>
          <div class="w-[50%]">
            <label class="contact-label">
              Email
            </label>
            <input class="contact-input mt-[6px]" placeholder="Enter Your Email">
          </div>
        </div>
        <div class="mt-[24px]">
          <label class="contact-label">
            Phone Number
          </label>
          <div class="contact-phone mt-[6px]">
            <select>
              <option>ID</option>
            </select>
            <input>
          </div>
        </div>
        <div class="mt-[24px]">
          <label class="contact-label">
            How can we help?
          </label>
          <textarea class="contact-input mt-[6px] h-[200px]" placeholder="Tell us a little about the project..." />
        </div>
        <div class="mt-[24px]">
          <button class="btn-select w-full">
            Get Started
          </button>
        </div>
      </div>
      <div class="contact-items">
        <div class="contact-item">
          <div class="contact-item-title">
            <NuxtIcon name="my-icon:mail" size="40" class="text-secondary mr-[12px]" />
            Email
          </div>
          <div class="contact-item-desc mt-[16px]">
            loremipsum@email.com
          </div>
        </div>
        <div class="contact-item mt-[24px]">
          <div class="contact-item-title">
            <NuxtIcon name="my-icon:call" size="40" class="text-secondary mr-[12px]" />
            Whatsapp
          </div>
          <div class="contact-item-desc mt-[16px]">
            +62 878 4413 5406
          </div>
        </div>
        <div class="contact-item  mt-[24px]">
          <div class="contact-item-title">
            <NuxtIcon name="my-icon:location" size="40" class="text-secondary mr-[12px]" />
            Address
          </div>
          <div class="contact-item-desc mt-[16px]">
            Jalan Panorama 7, Blok C No.7, Kota Bogor
          </div>
        </div>
        <div class="contact-item  mt-[24px]">
          <div class="contact-item-title">
            <NuxtIcon name="my-icon:working" size="40" class="text-secondary mr-[12px]" />
            Working Hours
          </div>
          <div class="contact-item-desc mt-[16px]">
            Monday - Saturday | 08.00 WIB - 18.00 WIB
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
