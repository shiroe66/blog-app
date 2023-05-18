<template>
  <div class="header">
    <div class="container">
      <div class="flex">
        <p class="title">
          Blog Service
        </p>
        <div class="flex">
          <font-awesome-icon :icon="['fas', 'moon']" size="lg" />
          <font-awesome-icon :icon="['fab', 'github']" size="lg" />
          <Button :href="'/'">Sign Up</Button>
          <Button :href="'/'" :type="'active'">Sign In</Button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Button from './Button.vue';

</script>
<style scoped>
.title {
  font-weight: 700;
  font-size: 20px;
  margin: 0;
  background: rgb(132, 169, 140);
  background: linear-gradient(90deg, rgba(132, 169, 140, 1) 0%, rgba(82, 121, 111, 1) 50%, rgba(53, 79, 82, 1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.header {
  padding: 15px 0;
  border-bottom: 1px solid rgba(60, 60, 60, .12);
}

.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 13px;
}
</style>