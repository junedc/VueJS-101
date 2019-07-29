<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <BlogPost v-for="blogPost in visibleBlogPosts" :post="blogPost" :key="blogPost.title"/>

        <button @click="toggleHighlightedPostsVisibility">{{ showHighlighted ? 'Hide' : 'Show' }} highlighted posts
        </button>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import BlogPost from '@/components/BlogPost.vue';
    import {Post} from '@/models/blog/Post';
    import {blogs} from "@/api/blogs";

    @Component({
        components: {
            BlogPost,
        },
    })
    export default class App extends Vue {
        public showHighlighted: boolean = true;

        private blogPosts: Post[] = [];

        get visibleBlogPosts() {
            return this.blogPosts.filter((post: Post) => post.highlighted === undefined || post.highlighted === this.showHighlighted);
        }

        public toggleHighlightedPostsVisibility() {
            this.showHighlighted = !this.showHighlighted;
        }

        private async created() {
            const posts = await blogs();
            console.log(posts);
            this.blogPosts = posts;
        }

        private mounted() {
            console.log('mounted');
        }
    }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
