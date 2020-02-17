<template>
  <div id="posts" v-if="post">
    <article class="post-item">
      <div class="img-wrap">
        <img :src="post.urlToImage" :alt="post.title" :title="post.title" />
      </div>

      <h2>{{ post.title | setTitle }}</h2>
      <span class="date">{{ post.publishedAt | moment('timezone', 'Europe/Madrid', "from", "now") }}</span>
      <router-link
        :to="{ name: 'news', params: { urlToImage: post.urlToImage, title: post.title, publishedAt: post.publishedAt, content: post.content } }"
      >Read more</router-link>

      <!-- Clear Floats -->
      <div class="clearfix"></div>
    </article>
  </div>
</template>

<script>
export default {
  name: "News",
  props: ["post"],
  filters: {
    setTitle(title) {
      return title.substr(0, 100) + "...";
    }
  }
};
</script>