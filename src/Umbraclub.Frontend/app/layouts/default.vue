<script setup lang="ts">
const { data: identityData } = await useAsyncData('identity', () => $fetch('/api/identity'))
const { data: navigationData } = await useAsyncData('navigation', () => $fetch('/api/navigation'))

const findSettings = (data: any) =>
  (data as any)?.data?.cms?.items?.find((i: any) => i.properties)?.properties

const identity = computed(() => findSettings(identityData.value))
const navigation = computed(() => findSettings(navigationData.value))

const logoText = computed(() => identity.value?.logoText)
const navItems = computed(() => navigation.value?.headerNavigation ?? [])
const footerItems = computed(() => navigation.value?.footerNavigation ?? [])
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
