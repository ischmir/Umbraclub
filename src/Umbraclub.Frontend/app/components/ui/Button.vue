<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'secondary'
}>()
</script>

<template>
  <button :class="variant ?? 'primary'">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
button {
  border-radius: $border-radius-button;
  cursor: pointer;
  padding: 0.75rem 1.5rem;
  border: none;
  box-sizing: border-box;
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
  font-family: $font-primary;
  font-weight: 400;
  font-size: 1rem;

  &.primary {
    background-color: $color-secondary;
    color: $primary-font-color;
  }

  &.primary:hover {
    background-color: $color-primary;
    color: $secondary-font-color;
    border: 1px solid $color-secondary;
  }

  &.secondary {
    background-color: $color-primary;
    color: $secondary-font-color;
    border: 1px solid $color-secondary;
  }

  &.secondary:hover {
    background-color: $color-secondary;
    color: $primary-font-color;
  }
}
</style>