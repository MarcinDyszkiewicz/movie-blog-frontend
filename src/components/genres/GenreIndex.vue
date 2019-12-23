<template>
    <div class="mt-5"
         v-loading="loading"
         element-loading-text="Loading..."
         element-loading-spinner="el-icon-loading">
<!--        <div class="mb-8">-->
<!--            <el-form :inline="true" :model="formSearch" class="demo-form-inline">-->
<!--                <el-form-item label="Title">-->
<!--                    <el-input v-model="formSearch.title" placeholder="Title"/>-->
<!--                </el-form-item>-->
<!--                <el-form-item label="Year">-->
<!--                    <el-input v-model="formSearch.year" placeholder="Year"/>-->
<!--                </el-form-item>-->
<!--                <el-form-item>-->
<!--                    <el-button type="primary" @click.prevent="searchMovie">Search</el-button>-->
<!--                </el-form-item>-->
<!--            </el-form>-->
<!--        </div>-->
        <div class="flex flex-wrap mx-2">
            <div v-for="genre in genres" :key=genre.id class="w-1/6 px-2">
                <div>
                    {{genre.name}}
<!--                    <img :src="genre.poster" class="cursor-pointer" @click.pevent="redirectToMovie(movie)">-->
                </div>
<!--                <div class="cursor-pointer" @click.pevent="redirectToMovie(movie)">-->
<!--                    <div>-->
<!--                        <span>{{movie.title}}</span>-->
<!--                    </div>-->
<!--                    <div>-->
<!--                        {{movie.year}}-->
<!--                    </div>-->
<!--                </div>-->
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "GenreIndex",
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
                genres: [],
                loading: false
            }
        },
        methods : {
            getGenres() {
                this.loading = true;
                this.$http.get("/genres")
                    .then(response => {
                        this.genres = response.data.data
                        this.loading = false
                    })
                    .catch(({response}) => {
                        alert(response.data.message + response.data.errors);
                        this.loading = false
                    })
            },
            redirectToMovie(genre) {
                this.$router.push('/genre/' + genre.slug)
            },
        },
        mounted() {
            this.getGenres();
        }
    }
</script>

<style scoped>

</style>