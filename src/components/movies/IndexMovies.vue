<template>
    <div class="mt-5"
         v-loading="loading"
         element-loading-text="Loading..."
         element-loading-spinner="el-icon-loading">
        <div class="mb-8">
            <el-form :inline="true" :model="formSearch" class="demo-form-inline">
                <el-form-item label="Title">
                    <el-input v-model="formSearch.title" placeholder="Title"/>
                </el-form-item>
                <el-form-item label="Year">
                    <el-input v-model="formSearch.year" placeholder="Year"/>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click.prevent="searchMovie">Search</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="flex flex-wrap mx-2">
            <div v-for="movie in movies" :key=movie.id class="w-1/6 px-2">
                <div>
                    <img :src="movie.poster" class="cursor-pointer" @click.pevent="redirectToMovie(movie)">
                </div>
                <div class="cursor-pointer" @click.pevent="redirectToMovie(movie)">
                    <div>
                        <span>{{movie.title}}</span>
                    </div>
                    <div>
                        {{movie.year}}
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "index-movies",
        data() {
            return {
                formSearch: {
                    title: null,
                    year: ''
                },
                orderBy: null,
                orderDir: null,
                page: 1,
                perPage: null,
                category: null,
                movies: [],
                loading: false,
                omdb_id: ''
            }
        },
        methods: {
            getMovies: function () {
                this.loading = true;
                this.$http.get("/movies", {
                    params: this.formSearch,
                })
                    .then(response => {
                        this.movies = response.data.data
                        this.loading = false
                    })
                    .catch(({response}) => {
                        alert(response.data.message + response.data.errors);
                        this.loading = false
                    })
            },
            redirectToMovie(movie) {
                let slug = movie.slug;
                console.log(slug)
                if (slug) {
                    this.$router.push('/movie/' + slug)
                } else {
                    this.createMovieAndRedirect(movie.imdb_id)
                }
            },
            searchMovie() {
                this.$http.get("/movies/search", {
                    params: this.formSearch,
                    headers: {'Content-Type': 'application/json'}
                })
                    .then(response => (this.movies = response.data.data))
                    .catch(({response}) => {
                        alert(response.data.message);
                    });
            },
            createMovieAndRedirect(imdb_id) {
                this.$http.post("/movies/omdb", {"omdb_id": imdb_id},{headers: {'Content-Type': 'application/json'}})
                    .then(function (response) {
                        const slug = response.data.data.slug;
                        this.$router.push('/movie/' + slug)
                    })
                    // .then(response => ((response.data.data)))
                    .catch(({response}) => {
                        alert(response);
                    });
            },
        },
        mounted() {
            this.getMovies();
        }
    }
</script>

<style scoped>

</style>
