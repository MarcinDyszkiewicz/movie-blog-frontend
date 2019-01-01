<template>
    <div class="flex justify-between mt-8">
        <div class="max-w-xs rounded overflow-hidden shadow-lg relative" v-for="similarPost in similarPosts">
            <img class="object-cover" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains">
            <div>
                <div class="px-6 py-4 absolute pin">
                    <div class="font-bold text-xl mb-2">{{ similarPost.title }}</div>
                    <p class="text-grey-darker text-base">
                        {{ similarPost.summary }}
                    </p>
                    {{ similarPost.userName }}
                </div>
                <div class="px-6 py-4 absolute absolute pin-x pin-b mb-5">
                    <!--<span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#photography</span>-->
                    <!--<span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#travel</span>-->
                    <!--<span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">#winter</span>-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "SimilarPosts",
        props: ['postId'],
        data() {
            return {
                similarPosts: [{
                    id: null,
                    title: "",
                    image: "",
                    summary: "",
                    slug: "",
                    userId: null,
                    userName: ""
                },],
                endpointPrefix: 'http://porady-prawnicze.test:8080/api'
            };
        },
        mounted () {
            axios.get(this.endpointPrefix + '/post/'+this.postId+'/similar', {
                headers: {'Content-Type': 'application/json'}
            })
                .then(response => (this.similarPosts = response.data.data))
                .catch(({response}) => {
                    alert(response.data.message);
                })
        },
    }
</script>