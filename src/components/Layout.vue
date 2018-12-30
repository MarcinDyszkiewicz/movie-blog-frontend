<!--<template>-->
    <!--<div>-->
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
    <!--</div>-->
<!--</template>-->
<script>
    export default {
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