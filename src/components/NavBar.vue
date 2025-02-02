<script setup lang="ts">
import logo from '@/assets/logo.svg'
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
const navigations = ref([
  {
    link: '/',
    name: 'Home',
  },
  {
    link: '/jobs',
    name: 'Jobs',
  },
  {
    link: '/jobs/add',
    name: 'Add job',
  },
])
const isActiveLink = (routePath: string) => {
  const route = useRoute()

  return route.path === routePath
}
</script>

<template>
  <nav
    class="bg-green-700 border-b border-green-500 sticky top-0 z-10 shadow-lg shadow-green-500/15"
  >
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div class="flex flex-1 items-center md:items-stretch justify-between">
          <!-- Logo -->
          <a class="flex flex-shrink-0 items-center mr-4" href="/">
            <img class="h-10 w-auto" :src="logo" alt="Vue Jobs" />
            <span class="hidden md:block text-white text-2xl font-bold ml-2">Vue Jobs</span>
          </a>
          <div class="md:ml-auto">
            <div class="flex space-x-2 gap-2">
              <RouterLink
                v-for="navigation in navigations"
                v-bind:key="navigation.link"
                :to="navigation.link"
                :class="[
                  'text-white hover:bg-green-900 hover:text-white rounded-md px-3 py-2',
                  isActiveLink(navigation.link) ? 'bg-green-900 text-white' : '',
                ]"
                >{{ navigation.name }}</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
