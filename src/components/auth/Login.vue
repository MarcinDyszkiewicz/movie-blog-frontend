<template>
    <div>
        <h1>Login</h1>

        <p>
            <label for="username">username
                <input id="username" type="text" name="username" v-model="username">
            </label>
        </p>

        <p>
            <label for="password">Password
                <input id="password" type="password" name="password" v-model="password">
            </label>
        </p>

        <button @click="login">Login</button>
    </div>
</template>

<script>
    import axios from 'axios'
    import { login } from "../../utils/jwt"

export default {
    data() {
        return {
            username: '',
            password: '',
            endpointPrefix: 'http://porady-prawnicze.test:8080'
        };
    },

    methods: {
        login() {
            let data = {
                //rails
                user: {
                    email: this.username,
                    password: this.password,
                },
                "Content-Type": "application/json"


                //laravel

                // username: this.username,
                // password: this.password,
                // grant_type: "password",
                // client_secret: "8MXcqFWgFzTTXJuXl3d7l8Re7iOZyQed6p0bKGPt",
                // client_id: 2,
                // scope: "",
            };

            // axios.post(this.endpointPrefix + '/oauth/token',
            axios.post("http://localhost:3000/login", data,
                {
                headers: {'Content-Type': 'application/json'}
                })
                .then((response) => {
                    // console.log(response.headers['authorization'].split(" ", 2).pop());
                    let token = response.headers['authorization'].split(" ", 2).pop();
                    login(token);
                    this.$router.push('/');
                })
                .catch((response) => {
                    console.log(response);
                    alert(response.data);
                });
        }
    }
};
</script>
