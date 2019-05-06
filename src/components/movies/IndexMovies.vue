<template>
    <div class="mt-5">
        <div class="mb-8">
            <el-form :inline="true" :model="formSearch" class="demo-form-inline">
                <el-form-item label="Title">
                    <el-input v-model="formSearch.title" placeholder="Title"/>
                </el-form-item>
                <el-form-item label="Year">
                    <el-input v-model="formSearch.year" placeholder="Year"/>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click.prevent="getMovies">Search</el-button>
                </el-form-item>
            </el-form>
        </div>

        <div class="flex flex-wrap mx-2">
            <div v-for="movie in movies" :key=movie.id class="w-1/6 px-2">
                <div>
                    <img :src="movie.poster" class="cursor-pointer" @click.pevent="redirectToMovie(movie.id)">
                </div>
                <div>
                    <span class="cursor-pointer" @click.pevent="redirectToMovie(movie.id)">{{movie.title}}</span>
                </div>
                <div>
                    {{movie.year}}
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
                    year: null
                },
                movies: []
            }
        },
        methods: {
            getMovies() {
                this.$http.get("/movies", {
                    params: {
                        title: this.formSearch.title,
                        year: this.formSearch.year,
                    },
                    headers: {'Content-Type': 'application/json'}
                })
                    .then(response => (this.movies = response.data.data))
                    .catch(({response}) => {
                        alert(response.data.message);
                    });
            },
            redirectToMovie(movieId) {
                this.$router.push('/movie/' + movieId)
            },
            // searchMovie() {
            //     this.$http.get("/movies/", {
            //         params: {
            //             title: this.formSearch.title,
            //             year: this.formSearch.year,
            //         },
            //         headers: {'Content-Type': 'application/json'}
            //     })
            //         .then(response => (this.movies = response.data.data))
            //         .catch(({response}) => {
            //             alert(response.data.message);
            //         });
            // }
        },
        mounted() {
            this.getMovies();
        }
    }
</script>

<style scoped>

</style>