<template>
    <div>
        <div class="container mx-auto" style="max-width: 992px">
            <p>
                Homepage
            </p>

            <div class="max-w-sm rounded overflow-hidden shadow-lg" v-for="post in posts">
                <!--<img class="w-full" src="{{ post.image }}" alt="Sunset in the mountains">-->
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{{ post.title }}</div>
                    <p class="text-grey-darker text-base">
                        {{ post.summary }}
                    </p>
                </div>
                <!--{{ post.slug }}-->
                <!--{{ post.userId }}-->
                {{ post.userName }}
                <div class="px-6 py-4">
                    <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#photography</span>
                    <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#travel</span>
                    <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">#winter</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'Home',
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
            axios.get(this.endpointPrefix + '/post/list/homepage', {
                    headers: {'Content-Type': 'application/json'}
                })
                .then(response => (this.posts = response.data.data))
                .catch(({response}) => {
                    alert(response.data.message);
                })
        },
    };
</script>