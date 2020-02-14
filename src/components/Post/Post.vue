<template>
    <div id="posts">
        <article class="post-item">
            <div class="img-wrap">
                <img :src="src" :alt="alt">
            </div>

            <h2>{{ title }}</h2>
            <span class="date">{{ date }}</span>
            <a :href="href">Read more</a>

            <!-- Clear Floats -->
            <div class="clearfix"></div>
        </article>
    </div>
</template>

<script>
export default {
    name: 'Post',
    props: {
        src: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        href: {
            type: String,
            required: true
        }
    }
}
</script>