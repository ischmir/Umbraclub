<script setup lang="ts">
defineProps<{
  title?: string
  subtitle?: string
  button?: { title?: string; url?: string; target?: string }
  cards?: {
    title?: string
    subtitle?: string
    button?: { title?: string; url?: string; target?: string }
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
        :url="card.button?.url"
        :target="card.button?.target"
      >
        <div class="cards-section__card-content">
          <h3 class="cards-section__card-title">{{ card.title }}</h3>
          <p class="cards-section__card-subtitle">{{ card.subtitle }}</p>
        </div>
      </UiCardItem>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.cards-section {
  padding: 80px 1.5rem;

  &__header {
    max-width: $max-width;
    margin: 0 auto 56px;
    text-align: center;
  }

  &__title {
    font-family: $font-primary;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
    color: $secondary-font-color;
    margin: 0 0 1.25rem;
    line-height: 1.15;
  }

  &__subtitle {
    font-family: $font-primary;
    font-size: 1rem;
    color: $secondary-font-color;
    opacity: 0.7;
    max-width: 520px;
    margin: 0 auto;
    line-height: 1.7;
  }

  &__card-content {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  &__card-title {
    font-family: $font-primary;
    font-size: 2rem;
    font-weight: 700;
    color: #ffffff;
    margin: 0;
    line-height: 1.2;
  }

  &__card-subtitle {
    font-family: $font-primary;
    font-size: 0.95rem;
    line-height: 1.65;
    color: rgba(255, 255, 255, 0.85);
    margin: 0;
  }

  &__grid {
    max-width: $max-width;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;

    @media (max-width: $breakpoint-lg) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: $breakpoint-md) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
