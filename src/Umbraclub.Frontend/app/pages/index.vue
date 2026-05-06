<script setup lang="ts">
const { data } = await useAsyncData('homepage', async () => {
  const results = await Promise.allSettled([
    $fetch('/api/hero'),
    $fetch('/api/cards'),
  ])
  return results.map(r => r.status === 'fulfilled' ? r.value : null)
})

const heroData = computed(() => (data.value as any)?.[0])
const cardsData = computed(() => (data.value as any)?.[1])

const findPage = (data: any) =>
  data?.data?.cms?.items?.find((i: any) => i.id)

const heroBlock = computed(() =>
  findPage(heroData.value)?.properties?.blocks?.items?.find(
    (i: any) => i.content?.contentType === 'heroSection'
  )?.content
)

const cardsBlock = computed(() =>
  findPage(cardsData.value)?.properties?.blocks?.items?.find(
    (i: any) => i.content?.contentType === 'cardsSectionInline'
  )?.content
)

const cards = computed(() => {
  const p = cardsBlock.value?.properties
  if (!p) return []
  return [
    { title: p.cardOneTitle, subtitle: p.cardOneSubtitle, button: p.cardOneButton?.[0] },
    { title: p.cardTwoTitle, subtitle: p.cardTwoSubtitle, button: p.cardTwoButton?.[0] },
    { title: p.cardThreeTitle, subtitle: p.cardThreeSubtitle, button: p.cardThreeButton?.[0] },
  ].filter(c => c.title)
})
</script>

<template>
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
    :cards="cards"
  />
</template>
