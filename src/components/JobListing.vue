<script setup lang="ts">
import { defineProps, ref, computed } from 'vue'
import { type jobType } from '@/types/__jobs'
import { RouterLink } from 'vue-router'
const { job } = defineProps<{ job: jobType }>()
const showFullDesc = ref(false)
const truncatedDesc = computed(() => {
  let desc = job.description
  if (!showFullDesc.value) {
    desc = desc.substring(0, 90) + '...'
  }

  return desc
})
const toggleDesc = () => {
  showFullDesc.value = !showFullDesc.value
}
</script>

<template>
  <div class="bg-white rounded-xl shadow-md relative">
    <div class="p-4">
      <div class="!mb-6">
        <div class="text-gray-600 !my-2">{{ job.type }}</div>
        <h3 class="text-xl font-bold line-clamp-1">{{ job.title }}</h3>
      </div>

      <div class="!mb-5 flex flex-col gap-2">
        <p>{{ truncatedDesc }}</p>
        <button
          class="text-green-500 hover:text-green-600 cursor-pointer w-fit"
          @click="toggleDesc"
        >
          {{ !showFullDesc ? 'More' : 'less' }}
        </button>
      </div>

      <h3 class="text-green-500 !mb-2">{{ job.salary }}</h3>

      <div class="border border-gray-100 !mb-5"></div>

      <div class="flex flex-col lg:flex-row justify-between !mb-4">
        <div class="text-orange-700 !mb-3">
          <i class="pi pi-map-marker"></i>
          {{ job.location }}
        </div>
        <RouterLink
          :to="'/jobs/' + job.id"
          class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm"
        >
          Read More
        </RouterLink>
      </div>
    </div>
  </div>
</template>
