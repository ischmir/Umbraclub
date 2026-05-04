<script setup lang="ts">
defineProps<{
  title?: string
  subtitle?: string
  image?: string
}>()
</script>

<template>
  <div class="card-item" :style="image ? { backgroundImage: `url(${image})` } : {}">
    <div class="card-item__overlay" />
    <div class="card-item__content">
      <h3 class="card-item__title">{{ title }}</h3>
      <p class="card-item__subtitle">{{ subtitle }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-item {
  position: relative;
  border-radius: $border-radius-element;
  overflow: hidden;
  min-height: 380px;
  background-color: $color-accent;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;

  &__overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      transparent 30%,
      rgba(0, 0, 0, 0.75) 100%
    );
  }

  &__content {
    position: relative;
    z-index: 1;
    padding: 32px;
    color: #ffffff;
  }

  &__title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 8px;
    color: #ffffff;
  }

  &__subtitle {
    font-size: 14px;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.85);
  }
}
</style>
