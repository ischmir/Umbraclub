<script setup lang="ts">
const { data } = await useAsyncData('navigation', () => $fetch('/api/navigation'))

const page = computed(() =>
  (data.value as any)?.data?.cms?.items?.find((i: any) => i.id)
)

const logoText = computed(() => page.value?.properties?.logoText)

const navItems = computed(() => page.value?.properties?.headerNavigation ?? [])
const footerItems = computed(() => page.value?.properties?.footerNavigation ?? [])
</script>

<template>
  <div class="layout">
    <LayoutNavBar :logo-text="logoText" :nav-items="navItems" />
    <main class="layout__main">
      <slot />
    </main>
    <LayoutFooter :logo-text="logoText" :nav-items="footerItems" />
  </div>
</template>

<style lang="scss" scoped>
.layout {
  background-color: $color-secondary;

  &__main {
    background-color: $color-primary;
    border-radius: 0 0 $border-radius-element $border-radius-element;
    overflow: hidden;
  }
}
</style>
