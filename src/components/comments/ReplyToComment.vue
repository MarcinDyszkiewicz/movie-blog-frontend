<template>
    <div>
        <el-form :model="replyForm" :inline="true" :rules="rules" label-width="7vw" label-position="left" class="float-left w-full mb-5 border-b-2">
            <el-form-item label="Reply to Comment" prop="body">
                <el-input
                        class="float-left max-w-2xl"
                        style="width: 26rem"
                        type="textarea"
                        :autosize="{ minRows: 2, maxRows: 3}"
                        placeholder="Please input"
                        v-model="replyForm.body">
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="createReplyComment">Add Comment</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "reply-to-comment",
        props: ["parentId"],
        data() {
            return {
                replyForm: {
                    body: null,
                    comment_parent_id : this.parentId
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
            createReplyComment() {
                this.$http.post("/movies/" + this.$route.params.id + "/comments",
                    this.replyForm,
                    {
                        headers: {'Content-Type': 'application/json'}
                    })
                    .then(({data}) => {
                        this.$emit("createdReplyComment", data.data);
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