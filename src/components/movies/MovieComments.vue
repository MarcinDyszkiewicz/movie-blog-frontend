<template>
    <div>
        <div class="mt-12">
            <div v-for="comment in comments" class="max-w-md w-full lg:flex">
                <!--{{comment}}-->

                <!--<div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('https://tailwindcss.com/img/card-left.jpg')" title="Woman holding a mug">-->
                <!--</div>-->
                <div class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <img class="w-10 h-10 rounded-full mr-4" src="https://tailwindcss.com/img/jonathan.jpg" alt="Avatar of Jonathan Reinink">
                    <div class="text-sm">
                        <p class="text-black leading-none">{{comment.user_id}}</p>
                        <p class="text-grey-dark">{{comment.created_at}}</p>
                    </div>
                    <div class="mb-8">
                        <p class="text-sm text-grey-dark flex items-center">
                        </p>
                        <div class="text-black font-bold text-xl mb-2">Can coffee make you a better developer?</div>
                        <p class="text-grey-darker text-base">{{comment.body}}</p>
                    </div>
                    <div class="flex items-center">

                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
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
        },
        mounted() {
            this.getComments();
        }
    }
</script>

<style scoped>

</style>