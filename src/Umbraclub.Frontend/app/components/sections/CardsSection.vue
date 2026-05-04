<script setup lang="ts">
defineProps<{
  title?: string
  subtitle?: string
  cards?: {
    content: {
      properties: {
        title?: string
        subtitle?: string
      }
    }
  }[]
}>()
</script>

<template>
  <section class="cards-section">
    <div class="cards-section__header">
      <h2 class="cards-section__title">{{ title }}</h2>
      <p class="cards-section__subtitle">{{ subtitle }}</p>
    </div>
    <div class="cards-section__grid">
      <UiCardItem
        v-for="(card, index) in cards"
        :key="index"
        :title="card.content.properties.title"
        :subtitle="card.content.properties.subtitle"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.cards-section {
  padding: 64px 32px;
  max-width: $max-width;
  margin: 0 auto;

  &__header {
    text-align: center;
    margin-bottom: 48px;
  }

  &__title {
    font-size: 32px;
    color: $color-accent;
    margin-bottom: 16px;
  }

  &__subtitle {
    font-size: 16px;
    color: $secondary-font-color;
    max-width: 540px;
    margin: 0 auto;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;

    @media (max-width: $breakpoint-md) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
