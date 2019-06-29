<template>
    <div>
        <div class="mt-10 flex flex-row">
            <div class="w-3/4 flex flex-row">
                <div class="mr-2 w-1/4">
                    <img :src="movie.poster" class="w-4/5">
                </div>

                <div class="m-2 text-left w-3/4">
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
                        <div class="flex sm:flex-wrap md\:flex-no-wrap">
                            <div class="w-1/5">
                                <p>directors: </p>
                                <p>actors: </p>
                                <p>genres: </p>
                            </div>
                            <div class="w-4/5">
                                <p><span v-for="director in movie.directors">{{director.full_name}}, </span></p>
                                <p><span v-for="actor in movie.actors">{{actor.full_name}}, </span></p>
                                <p><span v-for="genre in movie.genres">{{genre.name}}, </span></p>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4">
                        <div class="flex">
                            <div class="w-1/3">
                                <p v-if="movie.rotten_tomatoes_rating">Rotten tomatoes rating: </p>
                                <p v-if="movie.metacritic_rating">Metacritic rating: </p>
                                <p v-if="movie.imdb_raiting">Imdb rating: </p>
                                <p>Movie Blog Rating:</p>
                            </div>
                            <div class="">
                                <p v-if="movie.rotten_tomatoes_rating"><span>{{movie.rotten_tomatoes_rating}}</span></p>
                                <p v-if="movie.metacritic_rating"><span>{{movie.metacritic_rating}}</span></p>
                                <p v-if="movie.imdb_raiting"><span>{{movie.imdb_raiting}}</span></p>
                                <p><span>{{rating}}</span></p>
                            </div>
                        </div>
                    </div>

                    <!--<el-rate-->
                            <!--v-model="rate"-->
                            <!--:onratechange="rateMovie()"-->
                            <!--value=""-->
                            <!--:max="10"-->
                            <!--:disabled="disableRate"-->
                            <!--show-score-->
                            <!--show-text-->
                            <!--text-color="#ff9900">-->
                    <!--</el-rate>-->
                    <create-comment :movieId = "$route.params.id" @createdComment="newComment"/>
                    <movie-comments :movieId = "$route.params.id" :newComment="createdNewComment"/>
                </div>

            </div>
            <div class="w-1/4">

            </div>
        </div>

    </div>
</template>

<script>
    import MovieComments from "./MovieComments";
    import CreateComment from "../comments/CreateComment";

    export default {
        components: {
            CreateComment,
            MovieComments},
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
                    rotten_tomatoes_rating: '',
                    metacritic_rating: '',
                    imdb_raiting: '',
                    rating: '',
                    poster: '',
                    ratings: ['', '', ''],
                    actors: [],
                    directors: [],
                    genres: [],
                    slug: '',
                },
                rating: null,
                votesCount: null,
                rate: null,
                disableRate: false,
                createdNewComment: {}
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
            getRating() {
                this.$http.get("/movies/" + this.$route.params.id + "/rating", {
                    headers: {'Content-Type': 'application/json'}
                })
                    .then(response => (this.rating = response.data.data.rating))
                    .catch(({response}) => {
                        alert(response.data.message);
                    });
            },
            rateMovie() {
                this.$http.post("/movies/" + this.$route.params.id + "/rate",
                    {"rate": this.rate},
                    {
                        headers: {'Content-Type': 'application/json'}
                    })
                    .then(response => {
                        this.disableRate = true;
                        this.getRating();
                    })
                    .catch(({response}) => {
                        alert(response.data.message);
                    });
            },
            newComment(comment) {
                this.createdNewComment = comment
            },
            check(){
                console.log('taa')
            }
        },
        watch: {
            createdNewComment :function (comment) {
                this.createdNewComment = comment
            }
        },
        mounted() {
            this.getMovie();
            this.getRating();
            // test
        }
    }
</script>

<style scoped>

</style>