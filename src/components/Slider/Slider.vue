<template>
    <div id="slider" class="slider-large">
        <h1>Welcome to this template used to practice CSS3</h1>
        <div class="slider-btn" @click="redirectToBlog">Go to Blog</div>
    </div>
</template>

<script>
export default {
    name: 'Slider',
    methods: {
        redirectToBlog() {
            this.$router.push({ path: '/blog', params: { id: 'redirectingToBlogFromSlider' } });
            //this.$router.push('/blog');
        }
    }
}
</script>