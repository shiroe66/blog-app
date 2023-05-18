<template>
  <div class="post">
    <p class="title">
      {{ title }}
    </p>

    <div class="author">
      {{ author }}
    </div>

    <div class="date">
      {{ new Intl.DateTimeFormat('en-US').format(date) }}
    </div>

  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string, author: string, date: Date }>()

</script>

<style  scoped>
.post {
  padding: 15px;
  border: 1px solid rgba(60, 60, 60, .12);
  width: 800px;
  border-radius: 5px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  background: #fff;
  margin-bottom: 20px;
}

.title {
  grid-area: 1 / 1 / 3 / 4;
}

.author {
  grid-area: 1 / 4 / 2 / 6;
  font-weight: 600;
}

.date {
  grid-area: 2 / 4 / 3 / 6;
}
</style>