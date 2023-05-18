<template>
  <button class="button" :class="type" :style="{ fontSize }">
    <slot />
  </button>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ type?: 'active' | 'ghost', fontSize?: string, }>(), {
  fontSize: '14px'
})
</script>

<style scoped>
.button {
  padding: 10px;
  color: #fff;
  background-color: #84a98c;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease
}

.button:active {
  background-color: #52796f;
  transition: all 0.3s ease
}

.active {
  background-color: #52796f;
}
</style>