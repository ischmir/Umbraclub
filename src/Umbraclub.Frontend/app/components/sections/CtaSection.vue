<script setup lang="ts">
defineProps<{
  title?: string
  subtitle?: string
  image?: string
  button?: { 
    title?: string; 
    url?: string; 
    target?: string 
  }
}>()

const imageSrc = computed(() => '/Umbraco-Patterns_Blue_Full.png')
</script>

<template>
  <section class="cta-section">
    <div
      class="cta-section__inner"
      :style="{ backgroundImage: `url(${imageSrc})` }"
    >
      <div class="cta-section__content">
        <h2 class="cta-section__title">{{ title }}</h2>
        <p class="cta-section__subtitle">{{ subtitle }}</p>
        <a v-if="button?.url" :href="button.url" :target="button.target">
          <UiButton variant="secondary">{{ button.title }}</UiButton>
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.cta-section {
  padding: 0 1.5rem 80px;

  // ─── Inner ──────────────────────────────────────────────────────────────────

  &__inner {
    max-width: $max-width;
    margin: 0 auto;
    background-color: $secondary-font-color;
    background-size: cover;
    background-position: center;
    border-radius: $border-radius-element;
    box-sizing: border-box;
    padding: 4rem 3.5rem;
    display: flex;
    align-items: center;
  }

  // ─── Content ────────────────────────────────────────────────────────────────

  &__content {
    max-width: 580px;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  &__title {
    font-family: $font-primary;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
    color: $primary-font-color;
    margin: 0;
    line-height: 1.15;
  }

  &__subtitle {
    font-family: $font-primary;
    font-size: 1rem;
    line-height: 1.7;
    color: $primary-font-color;
    opacity: 0.85;
    margin: 0;
  }

}
</style>
