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
                username: this.username,
                password: this.password,
                grant_type: "password",
                client_secret: "8MXcqFWgFzTTXJuXl3d7l8Re7iOZyQed6p0bKGPt",
                client_id: 2,
                scope: "",
            };

            axios.post(this.endpointPrefix + '/oauth/token', data, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            )
                .then((data) => {
                    auth.login(data.token, data.user);

                    this.$router.push('/');
                })
                .catch(({response}) => {
                    alert(response.data.message);
                });
        }
    }
};
</script>
