<template>
  <section id="content">
    <h2 class="content-title">{{ title }}</h2>
    <News v-for="article in news.content" :key="article.publishedAt" :post="article"></News>
  </section>
</template>

<script>
import axios from "axios";
import News from "../News/News.vue";
export default {
  name: "LastPosts",
  components: {
    News
  },
  data: () => ({
    title: "Canada News",
    news: {
      content: []
    }
  }),
  methods: {
    getNews() {
      axios
        .get(process.env.VUE_APP_NEWS_API_URL + process.env.VUE_APP_NEWS_API_KEY)
        .then(data => {
          if (data.data.status === "ok") {
            this.news.content = data.data.articles.filter(this.getIfHasImage);
          }
        })
        .catch(error => {
          console.error(error);
        });
    },
    getIfHasImage(articles) {
      return articles.urlToImage !== null;
    }
  },
  mounted() {
    if (this.news.content.length === 0) {
      this.getNews();
    }
  }
};
</script>