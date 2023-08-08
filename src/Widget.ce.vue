<template>
  <main class="weather-widget">
    <Index v-if="page === Pages.Index" />
    <Settings v-else-if="page === Pages.Settings" />
  </main>
</template>

<script setup lang="ts">
import { page, Pages } from '@/composables/page'
import Index from '@/pages/Index.vue'
import Settings from '@/pages/Settings.vue'
</script>

<style lang="scss">
@import "@/assets/css/main";
</style>
