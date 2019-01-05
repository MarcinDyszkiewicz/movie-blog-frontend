<template>
    <div>
        <div class="sub-title text-xl mb-4">Find Movie</div>
        <div class="mb-4">Find movie information in The Open Movie Database. You will be still able to modify data.</div>
        <el-autocomplete
                class="inline-input w-1/2"
                popper-class="w-1/2"
                v-model="search"
                :fetch-suggestions="querySearchAsync"
                placeholder="Movie Title"
                :trigger-on-focus="false"
                @select="handleSelect">
            <template slot-scope="{ item }">
                <div class="value p-1">{{ item.Title }} {{ item.Year }}</div>
            </template>
        </el-autocomplete>

        <div v-if="foundMovie.Title" class="mt-8">
            <div class="mt-2"> Title: {{ foundMovie.Title }}</div>
            <div class="mt-2"> Year: {{ foundMovie.Year }}</div>
            <img class="mt-2" :src="foundMovie.Poster"></img>
            <div class="mt-2">
                <button class="bg-blue hover:bg-blue-dark text-white font-bold py-3 px-5 rounded" @click="chooseMovie">
                    Choose Movie
                </button>
            </div>
        </div>

        <div class="mt-12">
            <p class="italic">*can't find the movie ?</p>
            <button class="bg-green-dark hover:bg-green-darker text-white py-2 px-4 rounded" @click="redirectWithData()">
                Create Movie From Scratch
            </button>
        </div>

    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "movie-create-search-movie",
        data() {
            return {
                movies: [{
                    Title: "",
                    Year: ""
                }],
                search: '',
                timeout: null,
                foundMovie: {
                    Title: "",
                    Year: "",
                    Poster: ""
                },
                chosenMovie: {}
            };
        },
        methods: {
            getMovies() {
                axios.get("http://www.omdbapi.com/?apikey=c9d3739b", {
                    params: { type: "movie", s: this.search },
                    headers: { 'Content-Type': 'application/json' }
                })
                    .then(response => (this.movies = response.data.Search))
                    .catch(({response}) => {
                        alert(response.data.message);
                    });
            },
            querySearchAsync(queryString, cb) {
                this.getMovies();

                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    let results = this.movies;
                    cb(results);
                }, 5000 * Math.random());
            },
            handleSelect(item) {
                this.search = item.Title;
                this.selectFoundMovie(item);
            },
            selectFoundMovie(movie) {
                this.foundMovie = movie;
            },
            chooseMovie() {
                axios.get("http://www.omdbapi.com/?apikey=c9d3739b", {
                    params: { type: "movie", i: this.foundMovie.imdbID },
                    headers: { 'Content-Type': 'application/json' }
                })
                    .then(response => (this.redirectWithData(response.data)))
                    .catch(({response}) => {
                        alert(response.data.message);
                    });
            },
            redirectWithData(movie = {}) {
                this.$router.push({name: 'MovieCreateForm', params: { movie: movie}});
            }
        },
        mounted() {


            // this.movies = this.loadAll();
        }
    }
</script>
