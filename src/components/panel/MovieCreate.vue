<template>
    <div>
        <!--<el-button type="text" @click="centerDialogVisible = true">Click to open the Dialog</el-button>-->

        <el-dialog
                title="Warning"
                :visible.sync="centerDialogVisible"
                :showClose="showClose"
                :closeOnClickModal="closeOnClickModal"
                :closeOnPressEscape="closeOnPressEscape"
                width="35%"
                top="25vh"
                center>
            <div class="text-center text-base">
                <p class="mb-3 font-bold">Find movie information in open movie database. You will be still able to modify data</p>
                <p>or create a new movie from scratch</p>
            </div>
            <span slot="footer" class="dialog-footer">
                <button class="bg-blue hover:bg-blue-dark text-white font-bold py-3 px-5 rounded" @click="centerDialogVisible = false">
                    Find Movie Information
                </button>
                <button class="bg-green-dark hover:bg-green-darker text-white py-3 px-5 rounded" @click="">
                    Create Movie From Scratch
                </button>
            </span>
        </el-dialog>

        <movie-create-search-movie/>

    </div>
</template>

<script>
    import MovieCreateSearchMovie from "./MovieCreateSearchMovie";

    export default {
        components: {MovieCreateSearchMovie},
        name: "movie-create",
        data() {
            return {
                centerDialogVisible: false,
                showClose: false,
                closeOnClickModal: false,
                closeOnPressEscape: false
            };
        },
        methods: {

        },
        mounted() {
            this.centerDialogVisible = true;
        }
    }
</script>

<style scoped>

</style>