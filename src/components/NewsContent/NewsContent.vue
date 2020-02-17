<template>
  <section id="content">
    <article class="post-item post-item-detail">
      <div class="img-wrap">
        <img :src="urlToImage" :alt="title" />
      </div>
      <h1 class="content-title">{{ title }}</h1>
      <span class="date">{{ publishedAt | moment('timezone', 'Europe/Madrid', "from", "now") }}</span>
      <p>{{ content }}</p>

      <!-- Clear Floats -->
      <div class="clearfix"></div>
    </article>
  </section>
</template>

<script>
export default {
  name: "NewsContent",
  data: () => ({
    urlToImage: "",
    title: "",
    publishedAt: "",
    content: ""
  }),
  mounted() {
    this.urlToImage = this.$route.params.urlToImage;
    this.title = this.$route.params.title;
    this.publishedAt = this.$route.params.publishedAt;
    this.content = this.$route.params.content;
  }
};
</script>