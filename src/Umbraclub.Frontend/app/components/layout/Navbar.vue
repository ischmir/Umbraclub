<script setup lang="ts">
defineProps<{
  logoText?: string
  navItems?: { title?: string; url?: string; target?: string }[]
}>()

const menuOpen = ref(false)
const scrolled = ref(false)

onMounted(() => {
  const onScroll = () => {
    scrolled.value = window.scrollY > 50
  }

  window.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})
</script>

<template>
  <nav class="navbar" :class="{ 'navbar--scrolled': scrolled, 'navbar--open': menuOpen }">

    <div class="navbar__inner">
      <NuxtLink to="/" class="navbar__logo">{{ logoText }}</NuxtLink>

      <ul class="navbar__links">
        <li v-for="(item, index) in navItems" :key="index">
          <NuxtLink :to="item.url" :target="item.target" class="navbar__link">
            {{ item.title }}
          </NuxtLink>
        </li>
      </ul>

      <button class="navbar__hamburger" :class="{ 'navbar__hamburger--open': menuOpen }" @click="menuOpen = !menuOpen" aria-label="Toggle menu">
        <span />
        <span />
        <span />
      </button>
    </div>

    <Transition name="menu">
      <div v-if="menuOpen" class="navbar__mobile-menu">
        <ul class="navbar__mobile-links">
          <li v-for="(item, index) in navItems" :key="index" class="navbar__mobile-item">
            <NuxtLink :to="item.url" :target="item.target" class="navbar__mobile-link" @click="menuOpen = false">
              {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </Transition>

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

  // ─── Bar ────────────────────────────────────────────────────────────────────

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

  // ─── Desktop links ──────────────────────────────────────────────────────────

  &__links {
    display: none;
    list-style: none;
    margin: 0;
    padding: 0;

    @media (min-width: $breakpoint-md) {
      display: flex;
      gap: 0.25rem;
    }
  }

  &__link {
    display: block;
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

  // ─── Hamburger ──────────────────────────────────────────────────────────────

  &__hamburger {
    display: flex;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;

    span {
      display: block;
      width: 24px;
      height: 2px;
      background-color: $primary-font-color;
      border-radius: 2px;
      transition: background-color 0.3s ease, transform 0.3s ease, opacity 0.3s ease;
    }

    &--open {
      span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
      span:nth-child(2) { opacity: 0; }
      span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
    }

    @media (min-width: $breakpoint-md) {
      display: none;
    }
  }

  // ─── Mobile menu ────────────────────────────────────────────────────────────

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
    &:last-child { border-bottom: none; }
  }

  &__mobile-link {
    display: block;
    padding: 1.25rem 1.5rem;
    font-family: $font-primary;
    font-size: 1rem;
    color: $secondary-font-color;
    text-decoration: none;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
    }
  }

  // ─── Scrolled state ─────────────────────────────────────────────────────────

  &--scrolled {
    padding: 0.75rem 1.5rem;

    .navbar__inner {
      background-color: #ffffffcc;
      border-radius: 100px;
      box-shadow: 0 2px 16px rgba(0, 0, 0, 0.1);
    }

    .navbar__logo { color: $secondary-font-color; }

    .navbar__link {
      color: $secondary-font-color;
      &:hover { background-color: #f5c1bc33; }
    }

    .navbar__hamburger span { background-color: $secondary-font-color; }
  }

  // ─── Open state ─────────────────────────────────────────────────────────────

  &--open {
    .navbar__inner {
      background-color: $color-primary;
      border-radius: 100px;
      box-shadow: 0 2px 16px rgba(0, 0, 0, 0.1);
    }

    .navbar__logo { color: $secondary-font-color; }
    .navbar__hamburger span { background-color: $secondary-font-color; }
  }
}

// ─── Menu transition ──────────────────────────────────────────────────────────

.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
