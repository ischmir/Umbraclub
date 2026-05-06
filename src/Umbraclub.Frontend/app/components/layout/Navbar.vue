<script setup lang="ts">
defineProps<{
  logoText?: string
  navItems?: { title?: string; url?: string; target?: string }[]
}>()

const menuOpen = ref(false)
const scrolled = ref(false)

onMounted(() => {
  const onScroll = () => { scrolled.value = window.scrollY > 50 }
  window.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})
</script>

<template>
  <nav class="navbar" :class="{ 'navbar--scrolled': scrolled, 'navbar--open': menuOpen }">
    <div class="navbar__inner">
      <NuxtLink to="/" class="navbar__logo">{{ logoText }}</NuxtLink>

      <ul class="navbar__links">
        <li v-for="(item, index) in navItems" :key="index" class="navbar__item">
          <NuxtLink :to="item.url" :target="item.target" class="navbar__link">{{ item.title }}</NuxtLink>
        </li>
      </ul>

      <button class="navbar__hamburger" @click="menuOpen = !menuOpen" aria-label="Toggle menu">
        <span class="navbar__hamburger-icon" :class="{ 'navbar__hamburger-icon--close': menuOpen }">
          <span />
          <span />
          <span />
        </span>
      </button>
    </div>

    <div v-if="menuOpen" class="navbar__mobile-menu">
      <ul class="navbar__mobile-links">
        <li v-for="(item, index) in navItems" :key="index" class="navbar__mobile-item">
          <NuxtLink :to="item.url" :target="item.target" class="navbar__mobile-link" @click="menuOpen = false">
            {{ item.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 1.5rem;
  transition: padding 0.3s ease;

  &__inner {
    max-width: $max-width;
    margin: 0 auto;
    padding: 0.75rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: background-color 0.3s ease, border-radius 0.3s ease, box-shadow 0.3s ease;
  }

  &__logo {
    font-family: $font-primary;
    font-size: 1.25rem;
    font-weight: 700;
    color: $primary-font-color;
    text-decoration: none;
    white-space: nowrap;
    transition: color 0.3s ease;
  }

  &__links {
    display: none;
    list-style: none;
    margin: 0;
    padding: 0;

    @media (min-width: $breakpoint-md) {
      display: flex;
      flex-direction: row;
      gap: 2rem;
    }
  }

  &__link {
    font-family: $font-primary;
    font-size: 1rem;
    color: $primary-font-color;
    text-decoration: none;
    white-space: nowrap;
    padding: 0.4rem 0.85rem;
    border-radius: 100px;
    transition: color 0.2s ease, background-color 0.2s ease;

    &:hover {
      background-color: rgba(255, 255, 255, 0.15);
    }
  }

  &__hamburger {
    display: flex;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;

    @media (min-width: $breakpoint-md) {
      display: none;
    }
  }

  &__hamburger-icon {
    display: flex;
    flex-direction: column;
    gap: 5px;

    span {
      display: block;
      width: 24px;
      height: 2px;
      background-color: $primary-font-color;
      border-radius: 2px;
      transition: background-color 0.3s ease, transform 0.3s ease, opacity 0.3s ease;
    }

    &--close {
      span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
      span:nth-child(2) { opacity: 0; }
      span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
    }
  }

  // Mobile menu panel
  &__mobile-menu {
    max-width: $max-width;
    margin: 0.75rem auto 0;
    background-color: $color-primary;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  }

  &__mobile-links {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &__mobile-item {
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);

    &:last-child {
      border-bottom: none;
    }
  }

  &__mobile-link {
    display: block;
    padding: 1.25rem 1.5rem;
    font-family: $font-primary;
    font-size: 1rem;
    font-weight: 400;
    color: $secondary-font-color;
    text-decoration: none;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
    }
  }

  // Scrolled state — pill style
  &--scrolled {
    padding: 0.75rem 1.5rem;

    .navbar__inner {
      background-color: #ffffffcc;
      border-radius: 100px;
      box-shadow: 0 2px 16px rgba(0, 0, 0, 0.1);
      padding: 0.75rem 1.5rem;
    }

    .navbar__logo { color: $secondary-font-color; }
    .navbar__link {
      color: $secondary-font-color;
      &:hover { background-color: #f5c1bc33; }
    }
    .navbar__hamburger-icon span { background-color: $secondary-font-color; }
  }

  // Open state — keep hamburger icon dark since panel is light
  &--open {
    .navbar__hamburger-icon span { background-color: $secondary-font-color; }
    .navbar__logo { color: $secondary-font-color; }

    .navbar__inner {
      background-color: $color-primary;
      border-radius: 100px;
      box-shadow: 0 2px 16px rgba(0, 0, 0, 0.1);
      padding: 0.75rem 1.5rem;
    }
  }
}
</style>
