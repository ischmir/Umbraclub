<script setup lang="ts">
defineProps<{
  url?: string
  target?: string
}>()
</script>

<template>
  <NuxtLink :to="url ?? '#'" :target="target ?? undefined" class="card-item">
    <slot />
  </NuxtLink>
</template>

<style lang="scss" scoped>
.card-item {
  display: flex;
  align-items: flex-end;
  min-height: 380px;
  background-color: $secondary-font-color;
  border-radius: $border-radius-element;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.2);
  }
}
</style>
