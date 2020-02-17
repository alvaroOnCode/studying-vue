<template>
  <div id="slider" v-bind:class="size">
    <h1 v-html="text"></h1>
    <div v-if="size === 'slider-large'" class="slider-btn" @click="redirectToBlog">Go to Blog</div>
  </div>
</template>

<script>
export default {
  name: "Slider",
  data: () => ({
    size: "",
    text: ""
  }),
  methods: {
    checkSize() {
      if (
        this.$router.currentRoute.path === "/" ||
        this.$router.currentRoute.path === "/home"
      ) {
        this.size = "slider-large";
      } else {
        this.size = "slider-small";
      }
    },
    checkText() {
      if (
        this.$router.currentRoute.path === "/" ||
        this.$router.currentRoute.path === "/home"
      ) {
        this.text = "Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces.<br/>Vue is designed from the ground up to be incrementally adoptable.";
      } else {
        this.text =
          "Vue is a progressive framework for building user interfaces.";
      }
    },
    redirectToBlog() {
      this.$router.push({
        path: "/blog",
        params: { id: "redirectingToBlogFromSlider" }
      });
      //this.$router.push('/blog');
    }
  },
  watch: {
    $route: function() {
      this.checkSize();
      this.checkText();
    }
  },
  created: function() {
    this.checkSize();
    this.checkText();
  }
};
</script>