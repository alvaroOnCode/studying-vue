<template>
  <footer id="footer">
    <div class="center">
      <p>
        &copy; {{ year }} · Learning with
        <a href="https://victorroblesweb.es/">Víctor Robles'</a> JavaScript Master |
        Powered by
        <a href="https://newsapi.org/">NewsAPI</a>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  computed: {
    year: () => {
      const d = new Date();
      return d.getFullYear();
    }
  }
};
</script>