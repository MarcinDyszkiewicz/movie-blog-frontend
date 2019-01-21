<template>
    <div>

       <div>
           <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
               <el-form-item label="Title" prop="title">
                   <el-input v-model="ruleForm.title" class="w-4/5 float-left"/>
               </el-form-item>
               <el-form-item label="Year" prop="year">
                   <el-date-picker type="year" placeholder="Pick a year" format="yyyy" value-fromat="yyyy" v-model="ruleForm.year" class="float-left" style="width: 30%;"/>
               </el-form-item>
               <el-form-item label="Released" prop="released">
                   <el-date-picker type="date" placeholder="Pick a date" format="dd MMM yyyy" value-fromat="dd MMM yyyy" v-model="ruleForm.released" class="float-left" style="width: 30%;"/>
               </el-form-item>
               <el-form-item label="Runtime" prop="runtime">
                   <el-input v-model="ruleForm.runtime" placeholder="Runtime"  class="float-left" style="width: 30%;"/>
               </el-form-item>
               <el-form-item label="Plot" prop="plot">
                   <el-input type="textarea" v-model="ruleForm.plot"></el-input>
               </el-form-item>
               <el-form-item label="Review" prop="review">
                   <el-input type="textarea" v-model="ruleForm.review"></el-input>
               </el-form-item>
               <el-form-item label="Poster" prop="poster">
                   <el-input v-model="ruleForm.poster" placeholder="Poster url" class="w-4/5 float-left"/>
               </el-form-item>
               Raitings:
               <el-form-item label="imdb">
                   <span v-text="ruleForm.ratings[0].Value" class="float-left text-left" style="width: 30%;"></span>
               </el-form-item>
               <el-form-item label="Rotten Tomatoes">
                   <span v-text="ruleForm.ratings[1].Value" class="float-left text-left" style="width: 30%;"></span>
               </el-form-item>
               <el-form-item label="Metacritic">
                   <span v-text="ruleForm.ratings[2].Value" class="float-left text-left" style="width: 30%;"></span>
               </el-form-item>
               <el-form-item label="Actors" prop="actors">
               <el-select
                       v-model="ruleForm.actors"
                       multiple
                       filterable
                       allow-create
                       remote
                       reserve-keyword
                       placeholder="Please enter a keyword"
                       :remote-method="remoteMethod"
                       :loading="loading"
                       class="w-4/5 float-left">
                   <el-option
                           v-for="item in options4"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                   </el-option>
               </el-select>
               </el-form-item>
               <el-form-item label="Slug" prop="slug">
                   <el-input v-model="ruleForm.slug" class="w-4/5 float-left"/>
               </el-form-item>
               <el-form-item>
                   <el-button type="primary" @click="submitForm('ruleForm')">Create</el-button>
                   <el-button @click="resetForm('ruleForm')">Reset</el-button>
               </el-form-item>
           </el-form>
       </div>

    </div>
</template>

<script>
    import LeftNavigation from "./LeftNavigation";
    import MovieCreateSearchMovie from "./MovieCreateSearchMovie";

    export default {
        components: {},
        name: "movie-create-form",
        props: ["movie"],
        data() {
            return {
                ruleForm: {
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
                },


                    options4: [],
                    list: [],
                    loading: false,

                rules: {
                    title: [
                        { required: true, message: 'Please input Title', trigger: 'blur' },
                        { min: 3, max: 255, message: 'Length should be 3 to 255', trigger: 'blur' }
                    ],
                    year: [
                        { required: true, message: 'Please pick a year', trigger: 'blur' }
                    ],
                    // released: [
                    //     { type: 'date', required: true, message: 'Please pick a date', trigger: 'blur' }
                    // ],
                    runtime: [
                        { type: 'integer', required: true, message: 'Please input Runtime', trigger: 'change' }
                    ],
                    plot: [
                        { min: 10, required: false, message: 'Length should be at least 10 characters', trigger: 'change' }
                    ],
                    review: [
                        { required: false, message: 'Please select activity resource', trigger: 'change' }
                    ],
                    poster: [
                        { required: false, message: 'Please input activity form', trigger: 'change' }
                    ],
                    ratings: [
                        { required: false, message: 'Please input activity form', trigger: 'change' }
                    ],
                    actors: [
                        { type: 'array', required: false, message: 'Choose an Actor', trigger: 'change' }
                    ],
                    director: [
                        { required: false, message: 'Please input activity form', trigger: 'change' }
                    ],
                    slug: [
                        { required: true, message: 'Please input slug url', trigger: 'change' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$http.post('/movie',
                            this.ruleForm,
                            { headers: {'Content-Type': 'application/json'}
                        })
                            .then(response => (console.log(this.ruleForm)))
                            .catch(({response}) => {
                                alert(response.data.message);
                            })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            getActorsFromDb() {
                let actorsFromDb;
                this.$http.get('/actor', {
                    headers: {'Content-Type': 'application/json'}
                })
                    .then(response => (actorsFromDb = response.data))
                    .catch(({response}) => {
                        alert(response.data.message);
                    });
                return actorsFromDb
            },
            remoteMethod(query) {
                if (query !== '') {
                    this.loading = true;
                    setTimeout(() => {
                        this.loading = false;
                        this.options4 = this.list.filter(item => {
                            return item.label.toLowerCase()
                                .indexOf(query.toLowerCase()) > -1;
                        });
                    }, 200);
                } else {
                    this.options4 = [];
                }
            },
            slugify(text) {
                return text.toString().toLowerCase()
                    .replace(/\s+/g, '-')           // Replace spaces with -
                    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
                    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
                    .replace(/^-+/, '')             // Trim - from start of text
                    .replace(/-+$/, '');            // Trim - from end of text
            },
        },
        mounted() {
            console.log(this.movie);
            if (this.movie) {
                this.ruleForm.title = this.movie.Title;
                this.ruleForm.year = this.movie.Year;
                this.ruleForm.released = this.movie.Released;
                this.ruleForm.runtime = parseInt(this.movie.Runtime);
                this.ruleForm.plot = this.movie.Plot;
                // this.ruleForm.review = this.movie.Review;
                this.ruleForm.poster = this.movie.Poster;
                this.ruleForm.ratings = this.movie.Ratings;
                this.ruleForm.title = this.movie.Title;
                this.ruleForm.title = this.movie.Title;

                this.ruleForm.slug = this.slugify(this.movie.Title + " " + this.movie.Year);
                // this.ruleForm.released = new Date(this.movie.Released);

                let actors = this.movie.Actors.split(", ");
                this.ruleForm.actors = actors;
                this.list = actors.map(item => {
                    return { value: item, label: item };
                });
            }
        }
    }
</script>

<style scoped>

</style>