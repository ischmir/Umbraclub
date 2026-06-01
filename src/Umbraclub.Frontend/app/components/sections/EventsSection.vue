<script setup lang="ts">
defineProps<{
  title?: string
  subtitle?: string
  events?: {
    id?: string
    title?: string
    date?: string
    time?: string
    city?: string
    venue?: string
    description?: string
  }[]
}>()

function formatDate(dateStr?: string) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
</script>

<template>
  <section class="events-section">
    <div class="events-section__header">
      <h2 class="events-section__title">{{ title }}</h2>
      <p class="events-section__subtitle">{{ subtitle }}</p>
    </div>

    <div class="events-section__grid">
      <UiCardItem v-for="event in events" :key="event.id">
        <div class="events-section__card-content">
          <p class="events-section__card-meta">{{ formatDate(event.date) }} · {{ event.city }}</p>
          <h3 class="events-section__card-title">{{ event.title }}</h3>
          <p class="events-section__card-venue">{{ event.venue }}</p>
          <p class="events-section__card-description">{{ event.description }}</p>
        </div>
      </UiCardItem>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.events-section {
  padding: 80px 1.5rem;

  // ─── Header ─────────────────────────────────────────────────────────────────

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

  // ─── Card content ───────────────────────────────────────────────────────────

  &__card-content {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  &__card-meta {
    font-family: $font-primary;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.6);
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  &__card-title {
    font-family: $font-primary;
    font-size: 1.5rem;
    font-weight: 700;
    color: #ffffff;
    margin: 0;
    line-height: 1.2;
  }

  &__card-venue {
    font-family: $font-primary;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.75);
    margin: 0;
  }

  &__card-description {
    font-family: $font-primary;
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.7);
    margin: 0;
    line-height: 1.6;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  // ─── Grid ───────────────────────────────────────────────────────────────────

  &__grid {
    max-width: $max-width;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;

    @media (min-width: $breakpoint-md) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: $breakpoint-lg) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>
