<script setup lang="ts">
const props = defineProps<{
  cards: {
    src: string
    alt?: string
  }[]
}>()
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <UiCard v-for="card in props.cards" :key="card.src" :src="card.src" :alt="card.alt">
      <template #title>
        <h2 class="text-xl font-bold mb-2">Card Title</h2>
      </template>
      <template #cardtext>
        <p class="text-gray-700">This is the card text.</p>
      </template>
    </UiCard>
  </div>
</template>