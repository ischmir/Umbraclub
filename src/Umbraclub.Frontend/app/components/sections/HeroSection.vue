<script setup lang="ts">
const props = defineProps<{
  title?: string
  subtitle?: string
  image?: string
  button?: {
    title?: string
    url?: string
    target?: string
  }
}>()

const imageSrc = computed(() => props.image ?? '/Umbraco-Patterns_Blue_Full.png')
</script>

<template>
    <div class="hero-section full-width">
        <div class="hero-section__content" :style="{ backgroundImage: `url(${imageSrc})` }">
            <div class="hero-section__content-container">
                <div class="hero-section__content-left">
                    <h1 class="hero-section__title">{{ title }}</h1>
                    <p class="hero-section__subtitle">{{ subtitle }}</p>
                    <a v-if="button" :href="button.url" :target="button.target">
                        <UiButton variant="secondary">{{ button.title }}</UiButton>
                    </a>
                </div>
                <div class="hero-section__content-right">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.hero-section {
    position: relative;
    z-index: 1;

    &.full-width {
        height: 100vh;
        padding: 1rem;
    }

    // ─── Content ────────────────────────────────────────────────────────────────

    &__content {
        background-color: $color-overlay;
        background-size: cover;
        background-position: center;
        border-radius: $border-radius-element;
        text-align: left;
        height: inherit;
        min-height: fit-content;
        display: flex;
        align-items: center;

        @media (min-width: $breakpoint-md) {
            height: fit-content;
        }

        @media (min-width: $breakpoint-lg) {
            height: inherit;
        }
    }

    &__content-container {
        padding: 3rem 1rem 2rem;
        display: flex;
        flex-direction: column-reverse;
        align-items: center;

        @media (min-width: $breakpoint-md) {
            padding: 3rem 1.5rem 2rem;
            flex-direction: row;
        }

        @media (min-width: $breakpoint-lg) {
            padding: 3rem;
        }

        @media (min-width: $breakpoint-2xl) {
            padding: 6rem;
        }
    }

    // ─── Columns ────────────────────────────────────────────────────────────────

    &__content-left {
        flex: 1;
    }

    &__content-right {
        flex: 1;
        min-height: 5rem;
    }

    &__subtitle {
        color: $primary-font-color;
    }
}
</style>
