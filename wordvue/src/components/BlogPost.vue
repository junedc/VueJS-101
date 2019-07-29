<template>
    <div class="blogpost" :class="{ highlighted: post.highlighted }">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
        <p class="meta">Written by {{ post.author }} on {{ post.datePosted }}</p>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import {Post} from "@/models/blog/Post";

    @Component
    export default class BlogPost extends Vue {
        @Prop() private post!: Post;
    }
</script>

<style lang="scss">
    div.blogpost {
        h2 {
            text-decoration: underline;
        }

        p.meta {
            font-style: italic;
        }

        width: 400px;
        margin: 0 auto;

        &.highlighted {
            border: 1px solid #f4d942;
            background: #fff3b2;
        }
    }
</style>
