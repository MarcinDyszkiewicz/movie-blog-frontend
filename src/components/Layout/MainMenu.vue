<template>
    <div>
        <div class="line"></div>
        <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#22292f"
                text-color="#fff"
                active-text-color="#ffd04b">
            <el-menu-item index="Home">Home</el-menu-item>
            <el-menu-item index="Movies">Movies</el-menu-item>
            <el-submenu index="2">
                <template slot="title">Workspace</template>
                <el-menu-item index="2-1">item one</el-menu-item>
                <el-menu-item index="2-2">item two</el-menu-item>
                <el-menu-item index="2-3">item three</el-menu-item>
                <el-submenu index="2-4">
                    <template slot="title">item four</template>
                    <el-menu-item index="2-4-1">item one</el-menu-item>
                    <el-menu-item index="2-4-2">item two</el-menu-item>
                    <el-menu-item index="2-4-3">item three</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="3" disabled>Info</el-menu-item>
            <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">Orders</a></el-menu-item>
            <span class="float-right">
                    <el-menu-item index="5"><el-button type="" icon="el-icon-search" @click="SearchPostInputVisible = !SearchPostInputVisible"></el-button>
                        <search-post v-show="SearchPostInputVisible"/>
                    </el-menu-item>
                    </span>
        </el-menu>
    </div>
</template>

<script>
    import SearchPost from '../SearchPost'
    export default {
        name: "MainMenu",
        components: {SearchPost},
        data() {
            return {
                activeIndex: '1',
                SearchPostInputVisible: false,
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                this.$router.push({ name: key })
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>

</style>