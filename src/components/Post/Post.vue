<template>
  <div id="posts" v-if="post">
    <article class="post-item">
      <div class="img-wrap">
        <img :src="post.src" :alt="post.alt" />
      </div>

      <h2>{{ post.title }}</h2>
      <span class="date">{{ post.date }}</span>
      <a :href="post.href">Read more</a>

      <!-- Clear Floats -->
      <div class="clearfix"></div>
    </article>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: ["post"]
};
</script>