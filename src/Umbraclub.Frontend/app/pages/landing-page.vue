<script setup lang="ts">
const { data } = await useFetch('/api/homepage')

const page = computed(() =>
  (data.value as any)?.data?.cms?.items?.find((i: any) => i.id)
)

const heroBlock = computed(() =>
  page.value?.properties?.blocks?.items?.find(
    (i: any) => i.content?.contentType === 'heroSection'
  )?.content
)

const cardsBlock = computed(() =>
  page.value?.properties?.blocks?.items?.find(
    (i: any) => i.content?.contentType === 'cardsSection'
  )?.content
)
</script>

<template>
  <!-- <pre>{{ JSON.stringify(page?.properties?.blocks, null, 2) }}</pre> -->
  <SectionsHeroSection
    v-if="heroBlock"
    :title="heroBlock?.properties?.title"
    :subtitle="heroBlock?.properties?.subtitle"
    :button="heroBlock?.properties?.button?.[0]"
  />
  <SectionsCardsSection
    v-if="cardsBlock"
    :title="cardsBlock?.properties?.title"
    :subtitle="cardsBlock?.properties?.subtitle"
    
  />
</template>

