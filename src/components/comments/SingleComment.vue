<template>
    <div>
        <div class="flex mb-4">
            <div class="w-1/4">
                <img class="w-10 h-10 rounded-full mr-4" src="https://tailwindcss.com/img/jonathan.jpg" alt="Avatar of Jonathan Reinink">
            </div>
            <div class="w-3/4 text-left">
                <div class="text-sm mb-2">
                    <p class="text-black leading-none">{{comment.user_name}} | <span class="text-grey-dark">{{comment.created_at}}</span></p>
                </div>
                <div class="mb-2">
                    <div class="text-black text-l mb-2">Can coffee make you a better developer? {{comment.body}}</div>
                </div>
                <div class="flex flex-row">
                    <like-comment :comment="comment" style="width: 15%"/><span class="cursor-pointer" @click="showReplyForm = !showReplyForm">reply to</span>
                </div>
                <reply-to-comment v-if="showReplyForm" :parentId="parentId" @createdReplyComment="createdReplyComment"/>
            </div>
        </div>
        <div v-if="comment.child_comments" class="child-comments ml-10">
            <div v-for="childComment in comment.child_comments" :key="childComment.id" class="w-full lg:flex mb-4 mt-6 border-b border-grey-light">
                <single-comment :comment="childComment" @createdReplyToChildComment="createdReplyToChildComment"/>
            </div>
        </div>
    </div>
</template>

<script>
    import LikeComment from "./LikeComment";
    import ReplyToComment from "./ReplyToComment";
    export default {
        components: {
            ReplyToComment,
            LikeComment},
        name: "single-comment",
        props: ["comment"],
        data() {
            return {
                showReplyForm: false,
                parentId: this.comment.comment_parent_id ? this.comment.comment_parent_id : this.comment.id
            }
        },
        methods: {
            createdReplyComment(comment) {
                if (comment.comment_parent_id === this.comment.comment_parent_id) {
                    this.$emit("createdReplyToChildComment", comment)
                } else {
                    this.comment.child_comments.push(comment)
                }
            },
            createdReplyToChildComment(comment) {
                this.comment.child_comments.push(comment)
            }
        }
    }
</script>

<style scoped>

</style>