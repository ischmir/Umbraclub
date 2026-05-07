<script setup lang="ts">
defineProps<{
  title?: string
  bodytext?: string
  image?: string
}>()
</script>

<template>
  <section class="image-and-text">
    <div class="image-and-text__inner">

      <div class="image-and-text__image-wrap">
        <img
          v-if="image"
          :src="image"
          :alt="title"
          class="image-and-text__image"
        />
        <div v-else class="image-and-text__placeholder" />
      </div>

      <div class="image-and-text__content">
        <h2 class="image-and-text__title">{{ title }}</h2>
        <p class="image-and-text__body">{{ bodytext }}</p>
      </div>

    </div>
  </section>
</template>

<style lang="scss" scoped>
.image-and-text {
  padding: 80px 1.5rem;

  &__inner {
    max-width: $max-width;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.5rem;
    align-items: center;

    @media (min-width: $breakpoint-md) {
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
    }
  }

  // ─── Inner ──────────────────────────────────────────────────────────────────

  // ─── Image ──────────────────────────────────────────────────────────────────

  &__image-wrap {
    border-radius: $border-radius-element;
    overflow: hidden;
    aspect-ratio: 4 / 3;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  &__placeholder {
    width: 100%;
    height: 100%;
    background-color: $secondary-font-color;
    opacity: 0.15;
  }

  // ─── Content ────────────────────────────────────────────────────────────────

  &__content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  &__title {
    font-family: $font-primary;
    font-size: clamp(1.75rem, 3vw, 2.5rem);
    font-weight: 700;
    color: $secondary-font-color;
    margin: 0;
    line-height: 1.2;
  }

  &__body {
    font-family: $font-primary;
    font-size: 1rem;
    line-height: 1.75;
    color: $secondary-font-color;
    opacity: 0.8;
    margin: 0;
  }
}
</style>
