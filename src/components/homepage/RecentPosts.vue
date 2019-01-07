<template>
    <div class="popular-posts">
        <div class="rounded overflow-hidden shadow-lg flex" v-for="post in posts">
            <div class="w-1/3">
                <img class="object-cover" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains">
            </div>

            <div class="w-2/3">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{{ post.title }}</div>
                    <p class="text-grey-darker text-base">
                        {{ post.summary }}
                    </p>
                    {{ post.userName }}
                </div>
                <router-link :to="'/post/' + post.id">
                    <button class="bg-white hover:bg-grey-lightest text-grey-darkest font-semibold py-2 px-4 border border-grey-light rounded shadow">
                        Read More
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'RecentPosts',
        data() {
            return {
                posts: [{
                    id: null,
                    title: "",
                    image: "",
                    summary: "",
                    slug: "",
                    userId: null,
                    userName: ""
                },],
            };
        },
        mounted () {
            this.$http.get('/post/list/homepage', {
                headers: {'Content-Type': 'application/json'}
            })
                .then(response => (this.posts = response.data.data))
                .catch(({response}) => {
                    alert(response.data.message);
                })
        },
        methods: {
            redirectToPost() {

            }
        }
    };
</script>