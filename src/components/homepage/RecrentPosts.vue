<template>
    <div class="popular-posts flex items-stretch -mx-2 mb-2">
        <div class="w-1/2 px-2">
            <div class="max-w-sm rounded overflow-hidden shadow-lg relative" v-for="post in posts">
                <img class="object-cover" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains">
                <div>
                    <div class="px-6 py-4 absolute pin">
                        <div class="font-bold text-xl mb-2">{{ post.title }}</div>
                        <p class="text-grey-darker text-base">
                            {{ post.summary }}
                        </p>
                        {{ post.userName }}
                    </div>
                    <!--<div class="px-6 py-4 absolute absolute pin-x pin-b mb-5">-->
                        <!--<span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#photography</span>-->
                        <!--<span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#travel</span>-->
                        <!--<span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">#winter</span>-->
                    <!--</div>-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'PopularPosts',
        data() {
            return {
                posts: [{
                    id: null,
                    title: "",
                    image: "",
                    summary: "",
                    "slug": "best-batman",
                    "userId": 1,
                    "userName": "Admin"
                },],
                endpointPrefix: 'http://porady-prawnicze.test:8080/api'
            };
        },
        mounted () {
            axios.get(this.endpointPrefix + 'post/list/homepage', {
                headers: {'Content-Type': 'application/json'}
            })
                .then(response => (this.posts = response.data.data))
                .catch(({response}) => {
                    alert(response.data.message);
                })
        },
    };
</script>