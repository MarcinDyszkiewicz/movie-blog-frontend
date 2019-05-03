<template>
    <div>
        <div class="mt-12">
            <div v-for="comment in comments" :key="comment.id" class="w-full lg:flex mb-4 mt-6 border-b border-grey-light">
                <!--{{comment}}-->

                <!--<div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('https://tailwindcss.com/img/card-left.jpg')" title="Woman holding a mug">-->
                <!--</div>-->
                <div class="flex mb-4">
                    <div class="w-1/4">
                        <img class="w-10 h-10 rounded-full mr-4" src="https://tailwindcss.com/img/jonathan.jpg" alt="Avatar of Jonathan Reinink">
                    </div>
                    <div class="w-3/4 text-left">
                        <div class="text-sm mb-2">
                            <p class="text-black leading-none">{{comment.user_name}} | <span class="text-grey-dark">{{comment.created_at}}</span></p>
                        </div>
                        <div class="mb-2">
                            <div class="text-black text-l mb-2">Can coffee make you a better developer? {{comment.body}}</div>
                        </div>
                        <like-comment :comment="comment"/>
                        <!--<div class="flex items-center">-->
                            <!--<p class="text-grey-darker text-base">-->
                                <!--{{comment.likes}}-->
                                <!--<a class="cursor-pointer" @click="likeComment(comment.id, 10)">-->
                                    <!--<i class="fas fa-chevron-up text-green" :class="bgColorLikeIcon()"></i>-->
                                <!--</a>-->
                                <!--<a class="cursor-pointer" @click="likeComment(comment.id, 20)"><i class="fas fa-chevron-down text-red"></i></a>-->
                            <!--</p>-->
                        <!--</div>-->
                    </div>


                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import {LikeTypes} from "../../config"
    import LikeComment from "../comments/LikeComment";
    export default {
        components: {LikeComment},
        name: "movie-comments",
        props: ["movieId"],
        data() {
            return {
                comments: [],
            }
        },
        methods: {
            getComments() {
                this.$http.get("/movies/" + this.$route.params.id + "/comments", {
                    headers: {'Content-Type': 'application/json'}
                })
                    .then(response => (this.comments = response.data.data))
                    .catch(({response}) => {
                        alert(response.data.message);
                    });
            },
            // likeComment: function (comment_id, like_type) {
            //     this.$http.post("/comments/" + comment_id + "/likes",
            //         {"like_type": like_type},
            //         {
            //             headers: {'Content-Type': 'application/json'}
            //         })
            //         .then(response => {
            //             if (like_type === LikeTypes.LIKE) {
            //                 console.log('like')
            //             } else if(like_type === LikeTypes.DISLIKE) {
            //                 console.log('dislike')
            //             }
            //         })
            //         .catch(({response}) => {
            //             alert(response.data.message);
            //         });
            // },
            // bgColorLikeIcon() {
            //
            // }
        },
        mounted() {
            this.getComments();
        }
    }
</script>

<style scoped>

</style>