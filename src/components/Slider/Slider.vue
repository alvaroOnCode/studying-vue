<template>
  <div id="slider" v-bind:class="size">
    <h1>
      Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces.
      <br />Vue is designed from the ground up to be incrementally adoptable.
    </h1>
    <div class="slider-btn" @click="redirectToBlog">Go to Blog</div>
  </div>
</template>

<script>
export default {
  name: "Slider",
  data: () => ({
    size: ""
  }),
  methods: {
    redirectToBlog() {
      this.$router.push({
        path: "/blog",
        params: { id: "redirectingToBlogFromSlider" }
      });
      //this.$router.push('/blog');
    }
  },
  watch: {
    $route: () => {
      this.size =
        this.$router.currentRoute.path === "/" ||
        this.$router.currentRoute.path === "/home"
          ? "slider-large"
          : "slider-small";
    }
  }
};
</script>