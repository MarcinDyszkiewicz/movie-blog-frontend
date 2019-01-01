<template>
    <div class="">
        <div class="rounded overflow-hidden shadow-lg">
            <div class="w-full">
                <div class="font-bold text-xl mb-2">{{ post.title }}</div>
                <div class="italic text-sm mb-2">{{ post.userName }}</div>
                <div class="italic text-sm mb-2">{{ post.published_at }}</div>
                <img class="object-cover" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains">
            </div>

            <div class="w-full">
                <div class="px-6 py-4">

                    <p class="text-grey-darker text-base">
                        {{ post.body }}
                    </p>
                </div>
            </div>

            <div>
                <similar-posts v-if="post.id !== null" :post-id="post.id" />
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import SimilarPosts from "./SimilarPosts";

    export default {
        name: 'SinglePost',
        components: {SimilarPosts},
        data() {
            return {
                post: {
                    id: null,
                    title: "",
                    image: "",
                    summary: "",
                    slug: "",
                    userId: null,
                    userName: ""
                },
                endpointPrefix: 'http://porady-prawnicze.test:8080/api'
            };
        },
        mounted () {
            axios.get(this.endpointPrefix + '/post/' + this.$route.params.id, {
                headers: {'Content-Type': 'application/json'}
            })
                .then(response => (this.post = response.data.data))
                .catch(({response}) => {
                    alert(response.data.message);
                })
        },
    };
</script>