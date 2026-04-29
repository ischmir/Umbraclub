<script setup lang="ts">
 const props = defineProps<{
    src: string
    alt?: string
    }>()
</script>

<template>
    <div class="bg-grey shadow-md rounded p-4">
        <h2 class="text-xl font-bold mb-2"><slot name="title" /></h2>
        <p class="text-gray-700"><slot name="cardtext" /></p>
        <img :src="props.src" :alt="props.alt" class="w-full h-auto rounded">
    </div>
</template>