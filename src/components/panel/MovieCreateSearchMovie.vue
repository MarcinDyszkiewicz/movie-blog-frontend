<template>
    <div>
        <div class="sub-title">list suggestions on input</div>
        <el-autocomplete
                class="inline-input w-1/2"
                popper-class="w-1/2"
                v-model="search"
                :fetch-suggestions="querySearchAsync"
                placeholder="Please Input"
                :trigger-on-focus="false"
                @select="handleSelect">
            <template slot-scope="{ item }">
                <div class="value p-1">{{ item.Title }} {{ item.Year }}</div>
            </template>
        </el-autocomplete>

        <div v-if="chosenMovie.Title" class="mt-8">
            <div>{{chosenMovie.Title}}</div>
            <div>{{chosenMovie.Year}}</div>
            <img :src="chosenMovie.Poster"></img>
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
                timeout: 1000,
                chosenMovie: {
                    Title: "",
                    Year: "",
                    Poster: ""
                }
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
                    console.log(this.movies);
                    cb(results);
                }, 5000 * Math.random());
            },
            handleSelect(item) {
                this.search = item.Title;
                this.selectFoundMovie(item);
            },
            selectFoundMovie(movie) {
                this.chosenMovie = movie;
            }
        },
        mounted() {


            // this.movies = this.loadAll();
        }
    }
</script>
