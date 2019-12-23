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

                    </span>
                </div>


                <router-view/>
                <!--Content-->


            </div>

        </div>



    </div>
</template>

<script>
    import LeftNavigation from "./LeftNavigation";

    export default {
        components: {LeftNavigation},
        name: "panel",
        data() {
            return {
                inPanel: true
            }
        },
    }
</script>
