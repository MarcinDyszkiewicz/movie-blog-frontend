<template>
    <div>
        <div class="mt-10 flex flex-row">

            <div class="mr-2 w-1/4">
                <img :src="movie.poster" class="w-4/5">
            </div>

            <div class="m-2 text-left w-1/2">
                <h2 class="text-2xl">{{movie.title}}</h2>
                <div class="mt-4">
                    {{movie.year}}
                </div>
                <div class="mt-4">
                    {{movie.runtime}} minutes
                </div>
                <div class="mt-4 text-l">
                    {{movie.plot}}
                </div>
                <div class="mt-4">
                    <div class="flex">
                        <div class="w-1/5">
                            <p>directors: </p>
                            <p>actors: </p>
                            <p>genres: </p>
                        </div>
                        <div class="">
                            <p>{{movie.director}}</p>
                            <p>{{movie.actors}}</p>
                            <p>{{movie.genres}}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-1/4">

            </div>
        </div>


    </div>
</template>

<script>
    export default {
        name: "single-movie",
        data() {
            return {
                movie: {
                    title: '',
                    year: '',
                    released: '',
                    runtime: '',
                    plot: '',
                    review: '',
                    poster: '',
                    ratings: ['','',''],
                    genreIds: [],
                    actors: [],
                    directors: [],
                    slug: '',
                    genres: []
                },
            }
        },
        methods: {
            getMovie() {
                this.$http.get("/movies/" + this.$route.params.id, {
                    headers: {'Content-Type': 'application/json'}
                })
                    .then(response => (this.movie = response.data.data))
                    .catch(({response}) => {
                        alert(response.data.message);
                    });
            },
        },
        mounted() {
            this.getMovie();
        }
    }
</script>

<style scoped>

</style>