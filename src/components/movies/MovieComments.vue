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
                    </div>
                </div>
            </div>
            <div>
                REply button
            </div>
        </div>
    </div>
</template>

<script>
    import LikeComment from "../comments/LikeComment";
    export default {
        components: {LikeComment},
        name: "movie-comments",
        props: ["movieId", "newComment"],
        data() {
            return {
                comments: [],
            }
        },
        watch: {
            newComment: function (comment) {
                console.log(comment);
                this.comments.push(comment)
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
        },
        mounted() {
            this.getComments();
        }
    }
</script>

<style scoped>

</style>