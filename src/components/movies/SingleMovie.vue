<template>
    <div>

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
                    director: [],
                    slug: '',
                    genres: []
                },
            }
        },
        methods: {
            getMovie() {
                this.$http.get("/movies/" + this.this.$route.params.id, {
                    headers: {'Content-Type': 'application/json'}
                })
                    .then(response => (this.movie = response.data.data))
                    .catch(({response}) => {
                        alert(response.data.message);
                    });
            },
        },
        mounted() {
            this.getMovie()
        }
    }
</script>

<style scoped>

</style>