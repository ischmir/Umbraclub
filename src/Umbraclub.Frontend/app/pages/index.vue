<template>
  <div>
    <div v-if="pending">Loading...</div>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <ul v-else>
      <li v-for="item in items" :key="item.id">
        <strong>{{ item.name }}</strong>: {{ item.properties.testProp }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const { data, pending, error } = await useFetch('/api/test')
const items = computed(() =>
  ((data.value as any)?.data?.cms?.items ?? []).filter((i: any) => i.id)
)
</script>
