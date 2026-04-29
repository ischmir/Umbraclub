<script setup lang="ts">

// Define the props for the button component, allowing for a 'variant' prop that can be either 'primary' or 'secondary'.

defineProps<{
  variant?: 'primary' | 'secondary'
}>()

const variants = {
  primary: 'bg-black text-white px-4 py-2 rounded',
  secondary: 'bg-white text-black border border-black px-4 py-2 rounded',
}
</script>

<template>
  <button :class="variants[variant || 'primary']">
    <slot />
  </button>
</template>