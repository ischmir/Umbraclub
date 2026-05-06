<script setup lang="ts">
const { data } = await useAsyncData('navigation', () => $fetch('/api/navigation'))

const page = computed(() =>
  (data.value as any)?.data?.cms?.items?.find((i: any) => i.id)
)

const logoText = computed(() => page.value?.properties?.logoText)

const navItems = computed(() => page.value?.properties?.headerNavigation ?? [])
</script>

<template>
  <!-- <pre>{{ navItems }}</pre> -->
  <div>
    <LayoutNavbar :logo-text="logoText" :nav-items="navItems" />
    <main>
      <slot />
    </main>
  </div>
</template>
