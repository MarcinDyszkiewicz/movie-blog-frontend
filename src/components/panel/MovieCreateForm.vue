<template>
    <div>

        <div class="w-full flex border-b-2">
            <!--panel menu left section-->
            <div class="float-left w-1/5 p-5 border-r-2">
                <span class="text-3xl float-left">
                    Panel
                </span>
            </div>
            <!--panel menu left middle-->
            <div class="w-4/5 p-5">
                <span class="text-2xl">
                    Admin Panel
                </span>
            </div>

        </div>


        <div class="flex">
            <!--leftside-->
                <left-navigation/>

            <!--middle-->
            <div class="w-4/5 p-6">
                <div class="mb-8">
                    <span class="text-2xl">
                        Create New Movie
                    </span>
                </div>

               <div>
                   <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
                       <el-form-item label="Title" prop="Title">
                           <el-input v-model="ruleForm.Title" class="w-4/5 float-left"/>
                       </el-form-item>
                       <el-form-item label="Year" prop="Year">
                           <el-date-picker type="year" placeholder="Pick a year" v-model="ruleForm.Year" class="float-left" style="width: 30%;"/>
                       </el-form-item>
                       <el-form-item label="Released" prop="Released">
                           <el-date-picker type="date" placeholder="Pick a date" v-model="ruleForm.Released" class="float-left" style="width: 30%;"/>
                       </el-form-item>
                       <el-form-item label="Activity zone" prop="region">
                           <el-select v-model="ruleForm.region" placeholder="Activity zone">
                               <el-option label="Zone one" value="shanghai"></el-option>
                               <el-option label="Zone two" value="beijing"></el-option>
                           </el-select>
                       </el-form-item>
                       <el-form-item label="Activity time" required>
                           <el-col :span="11">
                               <el-form-item prop="date1">
                                   <el-date-picker type="date" placeholder="Pick a date" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                               </el-form-item>
                           </el-col>
                           <el-col class="line" :span="2">-</el-col>
                           <el-col :span="11">
                               <el-form-item prop="date2">
                                   <el-time-picker type="fixed-time" placeholder="Pick a time" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
                               </el-form-item>
                           </el-col>
                       </el-form-item>
                       <el-form-item label="Instant delivery" prop="delivery">
                           <el-switch v-model="ruleForm.delivery"></el-switch>
                       </el-form-item>
                       <el-form-item label="Activity type" prop="type">
                           <el-checkbox-group v-model="ruleForm.type">
                               <el-checkbox label="Online activities" name="type"></el-checkbox>
                               <el-checkbox label="Promotion activities" name="type"></el-checkbox>
                               <el-checkbox label="Offline activities" name="type"></el-checkbox>
                               <el-checkbox label="Simple brand exposure" name="type"></el-checkbox>
                           </el-checkbox-group>
                       </el-form-item>
                       <el-form-item label="Resources" prop="resource">
                           <el-radio-group v-model="ruleForm.resource">
                               <el-radio label="Sponsorship"></el-radio>
                               <el-radio label="Venue"></el-radio>
                           </el-radio-group>
                       </el-form-item>
                       <el-form-item label="Activity form" prop="desc">
                           <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                       </el-form-item>
                       <el-form-item>
                           <el-button type="primary" @click="submitForm('ruleForm')">Create</el-button>
                           <el-button @click="resetForm('ruleForm')">Reset</el-button>
                       </el-form-item>
                   </el-form>
               </div>

                <movie-create-search-movie/>


            </div>

        </div>



    </div>
</template>

<script>
    import LeftNavigation from "./LeftNavigation";
    import MovieCreateSearchMovie from "./MovieCreateSearchMovie";

    export default {
        components: {
            MovieCreateSearchMovie,
            LeftNavigation},
        name: "movie-create-form",
        props: ["movie"],
        data() {
            return {
                ruleForm: {
                    Title: '',
                    Year: '',
                    region: '',
                    Released: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                rules: {
                    title: [
                        { required: true, message: 'Please input Activity name', trigger: 'blur' },
                        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
                    ],
                    region: [
                        { required: true, message: 'Please select Activity zone', trigger: 'change' }
                    ],
                    year: [
                        { type: 'date', required: true, message: 'Please pick a year', trigger: 'change' }
                    ],
                    released: [
                        { type: 'date', required: true, message: 'Please pick a date', trigger: 'change' }
                    ],
                    type: [
                        { type: 'array', required: true, message: 'Please select at least one activity type', trigger: 'change' }
                    ],
                    resource: [
                        { required: true, message: 'Please select activity resource', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: 'Please input activity form', trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        },
        mounted() {
            console.log(this.movie);
            this.ruleForm = this.movie;
        }
    }
</script>

<style scoped>

</style>