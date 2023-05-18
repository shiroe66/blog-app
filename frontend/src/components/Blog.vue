<template>
  <div class="blog">
    <div v-for="post in posts" :key="post.id">
      <Post :title="post.title" :author="post.author" :date="post.date" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Post from './Post.vue';
const posts = [
  {
    id: "1",
    title: "Искусство и наука: взаимодействие двух мощных сфер разума и творчества",
    author: "Хлоя Дэвис",
    date: new Date("2022-01-01")
  },
  {
    id: "2",
    title: "Путешествие в прошлое: исследование исторических эпох и потерянных цивилизаций",
    author: "Эмили Джонсон",
    date: new Date("2022-02-01")
  },
  {
    id: "3",
    title: "Магия природы: увлекательное погружение в мир растений, животных и природных явлений",
    author: "София Март",
    date: new Date("2022-03-01")
  }
]
</script>

<style scoped>
.blog {
  margin-top: 30px;
}
</style>