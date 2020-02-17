<template>
  <section id="content">
    <h2 class="content-title">{{ title }}</h2>
    <Post v-for="post in posts" :key="post.id" :post="post"></Post>
  </section>
</template>

<script>
import Post from "../Post/Post.vue";
export default {
  name: "LastPosts",
  components: {
    Post
  },
  data: () => ({
    title: "Last posts",
    newsUrl: "http://newsapi.org/v2/top-headlines?country=ca&category=technology&apiKey=" + process.env.VUE_APP_NEWS_API_KEY,
    posts: [
      {
        id: "evanYou",
        title: "Coffee with Evan You",
        alt: "Evan You",
        src: "https://avatars1.githubusercontent.com/u/499550?v=4",
        date: "1 week ago",
        href: "post.html"
      },
      {
        id: "damianDulisz",
        title: "Coffee with Damian Dulisz",
        alt: "Damian Dulisz",
        src: "https://avatars0.githubusercontent.com/u/3737591?v=4",
        date: "3 weeks ago",
        href: "#"
      },
      {
        id: "sarahDosner",
        title: "Coffee with Sarah Dosner",
        alt: "Sarah Dosner",
        src: "https://avatars1.githubusercontent.com/u/2281088?v=4",
        date: "1 months ago",
        href: "#"
      },
      {
        id: "nataliaTepluhina",
        title: "Coffee with Natalia Tepluhina",
        alt: "Natalia Tepluhina",
        src: "https://avatars0.githubusercontent.com/u/18719025?v=4",
        date: "3 months ago",
        href: "#"
      }
    ]
  })
};
</script>