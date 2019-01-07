<template>
    <div>
        <div class="relative">
            <el-carousel :interval="5000" arrow="always" trigger="click">
                <el-carousel-item v-for="post in posts" :key="post.id">

                    <!--<h3>{{ post }}</h3>-->
                    <!--<div class="max-w-sm rounded overflow-hidden shadow-lg" >-->
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
                    <div class="px-6 py-4 absolute pin-x pin-b" style="margin-bottom: 15px">
                        <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#photography</span>
                        <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#travel</span>
                        <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">#winter</span>
                    </div>

                    <!--</div>-->
                <!--</div>-->
                </el-carousel-item>
                </el-carousel>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'HotPosts',
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
                // endpointPrefix: 'http://porady-prawnicze.test:8080/api'
            };
        },
        mounted () {
            this.$http.get('/post/hot/category', {
                headers: {'Content-Type': 'application/json'}
            })
                .then(response => (this.posts = response.data.data))
                .catch(({response}) => {
                    alert(response.data.message);
                })
        },
    };
</script>

<style scoped>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>