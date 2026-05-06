<script setup lang="ts">
defineProps<{
  logoText?: string
  navItems?: { title?: string; url?: string; target?: string }[]
}>()
</script>

<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__brand">
        <NuxtLink to="/" class="footer__logo">{{ logoText }}</NuxtLink>
      </div>

      <nav class="footer__nav">
        <NuxtLink
          v-for="(item, index) in navItems"
          :key="index"
          :to="item.url"
          :target="item.target"
          class="footer__link"
        >
          {{ item.title }}
        </NuxtLink>
      </nav>
    </div>

    <div class="footer__bottom">
      <p class="footer__copyright">© {{ new Date().getFullYear() }} {{ logoText }}. All rights reserved.</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background-color: $color-secondary;
  color: $primary-font-color;
  padding: 4rem 1.5rem 2rem;

  &__container {
    max-width: $max-width;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    @media (min-width: $breakpoint-md) {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    }
  }

  &__brand {
    flex-shrink: 0;
  }

  &__logo {
    font-family: $font-primary;
    font-size: 1.5rem;
    font-weight: 700;
    color: $primary-font-color;
    text-decoration: none;
  }

  &__nav {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem 2.5rem;

    @media (min-width: $breakpoint-md) {
      justify-content: flex-end;
    }
  }

  &__link {
    font-family: $font-primary;
    font-size: 1rem;
    color: $primary-font-color;
    text-decoration: none;
    opacity: 0.85;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 1;
    }
  }

  &__bottom {
    max-width: $max-width;
    margin: 2.5rem auto 0;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
  }

  &__copyright {
    font-family: $font-primary;
    font-size: 0.875rem;
    color: $primary-font-color;
    opacity: 0.6;
    margin: 0;
  }
}
</style>
