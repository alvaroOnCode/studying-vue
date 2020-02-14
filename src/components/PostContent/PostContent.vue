<template>
  <section id="content">
    <article class="post-item post-item-detail">
      <div class="img-wrap">
        <img :src="src" :alt="alt" />
      </div>
      <h1 class="content-title">{{ title }}</h1>
      <span class="date">{{ date }}</span>
      <p v-for="paragraph in paragraphs" :key="paragraph.id">{{ paragraph }}</p>

      <!-- Clear Floats -->
      <div class="clearfix"></div>
    </article>
  </section>
</template>

<script>
export default {
  name: "PostContent",
  data: () => ({
    id: "",
    src: "",
    alt: "",
    title: "",
    date: "",
    p: []
  })
};
</script>