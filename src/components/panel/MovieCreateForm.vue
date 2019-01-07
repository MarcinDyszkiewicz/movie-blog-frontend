<template>
    <div>

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
                    Title: '',
                    Year: '',
                    Released: '',
                    Runtime: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                rules: {
                    Title: [
                        { required: true, message: 'Please input Title', trigger: 'blur' },
                        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
                    ],
                    Year: [
                        { type: 'date', required: true, message: 'Please pick a year', trigger: 'change' }
                    ],
                    Released: [
                        { type: 'date', required: true, message: 'Please pick a date', trigger: 'change' }
                    ],
                    Runtime: [
                        { type: 'integer', required: true, message: 'Please input Runtime', trigger: 'change' }
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