<template>
    <div class="flex items-center">
        <p class="text-grey-darker text-base">
            {{likesCount}}
            <a class="cursor-pointer" @click="likeComment(10)">
                <i class="fas fa-chevron-up text-green" :class="bgColorLikeIcon"></i>
            </a>
            <a class="cursor-pointer" @click="likeComment(20)">
                <i class="fas fa-chevron-down text-red" :class="bgColorDislikeIcon"></i>
            </a>
        </p>
    </div>
</template>

<script>
    import {LikeTypes} from "../../config"

    export default {
        name: "like-comment",
        props: ["comment"],
        data() {
            return {
                likes: this.comment.likes,
                userLikeType: this.comment.user_like_type
            }
        },
        computed: {
            bgColorLikeIcon: function () {
                return {
                    'bg-purple': this.userLikeType === LikeTypes.LIKE
                }
            },
            bgColorDislikeIcon: function () {
                return {
                    'bg-purple-dark': this.userLikeType === LikeTypes.DISLIKE
                }
            },
            likesCount: function () {
                return this.likes
            }
        },
        methods: {
            likeComment(likeType) {
                this.$http.post("/comments/" + this.comment.id + "/likes",
                    {"like_type": likeType},
                    {
                        headers: {'Content-Type': 'application/json'}
                    })
                    .then(({data}) => {
                        let responseLikeType = data.data.like_type;
                        if (likeType === LikeTypes.LIKE) {
                            if (this.userLikeType === LikeTypes.LIKE) {
                                this.likes--
                            } else {
                                this.likes++
                            }
                        } else if (likeType === LikeTypes.DISLIKE) {
                            if (this.userLikeType === LikeTypes.DISLIKE) {
                                this.likes++
                            } else {
                                this.likes--
                            }
                        }
                        // if (this.userLikeType === null && responseLikeType === LikeTypes.LIKE) {
                        //     this.likes++
                        // } else if (this.userLikeType === null && responseLikeType === LikeTypes.DISLIKE) {
                        //     this.likes--
                        // } else if (this.userLikeType === LikeTypes.LIKE && responseLikeType === null) {
                        //     this.likes--
                        // } else if (this.userLikeType === LikeTypes.DISLIKE && responseLikeType === null) {
                        //     this.likes++
                        // }
                        this.userLikeType = responseLikeType;

                        console.log(this.userLikeType)
                    })
                    .catch(({data}) => {
                        alert(data.message);
                    });
            },
            // bgColorLikeIcon() {
            //
            // }
        }
    }
</script>

<style scoped>

</style>