<template>
    <div>

            <!--Hot Posts-->

            <div class="mb-2">
                <hot-posts/>
            </div>

            <!--Main Block-->

            <div class="flex">
                <div id="main-block" class="w-3/4">

                <!--Popular Posts-->
                    <div class="m-2 text-left">
                        <h2 class="">Popular Posts</h2>
                    </div>
                    <popular-posts/>

                <!--Recent Post-->
                    <div class="m-2 text-left">
                        <h2 class="">Recent Posts</h2>
                    </div>
                    <recent-posts/>


                </div>
                <!--Right Aside-->

                <div class="right-aside w-1/4">

                </div>



        </div>
    </div>
</template>

<script>
    import HotPosts from "./homepage/HotPosts";
    import PopularPosts from "./homepage/PopularPosts";
    import RecentPosts from "./homepage/RecentPosts";

    export default {
        name: "Homepage",
        components: {RecentPosts, PopularPosts, HotPosts},
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