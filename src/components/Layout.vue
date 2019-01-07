<template>
    <div>
        <top-nav/>

        <div class="container mx-auto max-w-2xl">

            <!--//Logo-->
            <main-logo/>

            <!--Menu-->
            <main-menu/>

        </div>


        <!--<div>-->
            <!--<router-link to="/">Home</router-link>-->
            <!--<router-link to="/about">About</router-link>-->
            <!--<router-link to="/dashboard">Dashboard</router-link>-->
        <!--</div>-->

    <!--<div v-if="authenticated && user">-->
        <!--<p>Hello, {{ user.name }}</p>-->

        <!--<router-link to="/logout">Logout</router-link>-->
    <!--</div>-->

    <!--<router-link to="/login" v-else>Login</router-link>-->

        <!--<div style="margin-top: 2rem">-->
            <!--<router-view></router-view>-->
        <!--</div>-->
    </div>
</template>
<script>
    import TopNav from "./TopNav";
    import MainLogo from "./Layout/MainLogo";
    import MainMenu from "./Layout/MainMenu";
    import HotPosts from "./homepage/HotPosts";
    export default {
        components: {HotPosts, MainMenu, MainLogo, TopNav},
        data() {
            return {
                authenticated: auth.check(),
                user: auth.user
            };
        },

        mounted() {
            Event.$on('userLoggedIn', () => {
                this.authenticated = true;
                this.user = auth.user;
            });
        },
    }
</script>