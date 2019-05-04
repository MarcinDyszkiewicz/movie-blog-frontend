<template>
    <div class="mt-10">
        <div>
            <el-form :model="createForm" :rules="rules" label-width="15%" label-position="left" class="float-left w-full mb-5 border-b-2">
                <el-form-item label="Create Comment" prop="body" class="50%">
                    <el-input
                            class="float-left max-w-2xl"
                            type="textarea"
                            :autosize="{ minRows: 3, maxRows: 4}"
                            placeholder="Please input"
                            v-model="createForm.body">
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="createComment()">Add Comment</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "create-comment",
        props: ["movieId"],
        data() {
            return {
                createForm: {
                    body: null,
                },
                rules: {
                    body: [
                        {required: true, message: 'Please input Comment', trigger: 'blur'},
                        {min: 20, max: 5000, message: 'Length should be 20 to 5000', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            createComment() {
                this.$http.post("/movies/" + this.movieId + "/comments",
                    this.createForm,
                    {
                        headers: {'Content-Type': 'application/json'}
                    })
                    .then(({data}) => {
                        this.$emit("createdComment", data.data);
                        this.createForm.body = null;
                    })
                    .catch(({response}) => {
                        alert(response.data.message);
                    });
            },
        }
    }
</script>

<style scoped>

</style>