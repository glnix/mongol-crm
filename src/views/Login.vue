<template>
    <div class="row">
        <div class="col s6 offset-s3">
            <h1>Войти</h1>

            <form>
                <div class="input-field">
                    <input id="login" type="text">
                    <label for="login">Имя пользователя</label>
                </div>

                <div class="input-field">
                    <input id="password" type="password">
                    <label for="password">Пароль</label>
                </div>

                <a class="waves-effect waves-light btn-large" id="login-btn" v-on:click="onLogin">
                    <i class="material-icons right">face</i>Войти</a>

            </form>

        </div>
    </div>
</template>

<script>

    export default {
        name: 'Login',
        components: {},
        mounted() {

        },
        methods: {
            onLogin: function (event) {

            }
        }
    }
</script>

<style>
    .btn-large {
        margin-top: 1rem;
    }

</style>
