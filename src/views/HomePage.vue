<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import HomeCards from '@/components/HomeCards.vue'
import JobListings from '@/components/JobListings.vue'
</script>

<template>
  <HeroSection />
  <HomeCards />
  <JobListings :limit="3" :show-button="true" />
</template>
