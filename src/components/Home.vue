<template>
    <div>
        <nav class="flex items-center justify-between flex-wrap bg-black p-2">
            <div class="flex items-center flex-no-shrink text-white mr-6">
                <!--<svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>-->
                <!--<span class="font-semibold text-xl tracking-tight">Tailwind CSS</span>-->
            </div>
            <div class="block lg:hidden">
                <button class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div class="max-w-xl block flex-grow lg:flex lg:items-center lg:w-auto lg:mr-auto lg:ml-auto">
                <div class="text-sm lg:flex-none">
                    <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4 lg:ml-auto">
                        Docs
                    </a>
                    <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
                        Examples
                    </a>
                    <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white">
                        Blog
                    </a>
                </div>
                <div class="ml-auto">
                    <a class="facebook" href="http://facebook.com" target="_blank" title="facebook"><i class="fab fa-facebook-square"></i></a>
                    <a class="twitter" href="http://twitter.com" target="_blank" title="twitter"><i class="fab fa-twitter"></i></a>
                    <a class="gplus" href="http://plus.google.com" target="_blank" title="gplus"><i class="fab fa-google-plus-g"></i></a>
                    <a class="youtube" href="http://youtube.com" target="_blank" title="youtube"><i class="fab fa-youtube"></i></a>
                    <a class="instagram" href="http://instagram.com" target="_blank" title="instagram"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </nav>

        <div class="container mx-auto max-w-xl">

        <!--//Logo-->

            <div>
                <img src="../assets/logo.png">
            </div>

        <!--Menu-->

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
                    <el-menu-item index="1">Home</el-menu-item>
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

            <!--Hot Posts-->

            <div>
                <hot-posts/>
            </div>

            <!--Popular Posts-->

            <div>
                <popular-posts/>
            </div>


        </div>
    </div>
</template>

<script>
    import SearchPost from './SearchPost'
    import HotPosts from "./homepage/HotPosts";
    import PopularPosts from "./homepage/PopularPosts";

    export default {
        components: {PopularPosts, HotPosts, SearchPost},
        data() {
            return {
                activeIndex: '1',
                SearchPostInputVisible: false,
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>