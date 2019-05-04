<template>
    <div>
        <div class="mt-12">
            <div v-for="comment in comments" :key="comment.id" class="w-full lg:flex mb-4 mt-6 border-b border-grey-light">
                <single-comment :comment="comment"/>
            </div>
        </div>
    </div>
</template>

<script>
    import LikeComment from "../comments/LikeComment";
    import SingleComment from "../comments/SingleComment";
    export default {
        components: {
            SingleComment,
            LikeComment},
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