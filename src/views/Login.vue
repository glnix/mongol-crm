<template>
    <div class="row">
        <loading ref="loading"/>
        <div class="col s6 offset-s3 ">
            <h1>Войти</h1>

            <form >
                <div class="input-field">
                    <input id="login" type="text">
                    <label for="login">Имя пользователя</label>
                </div>

                <div class="input-field">
                    <input id="password" type="password">
                    <label for="password">Пароль</label>
                </div>

                <a class="waves-effect waves-light btn-large light-blue" id="login-btn" v-on:click="onLogin">
                    <i class="material-icons right">face</i>Войти</a>

            </form>

        </div>
    </div>
</template>

<script>

    import LoadingComponent from "../components/LoadingComponent";

    export default {
        name: 'Login',
        components: {'Loading': LoadingComponent},
        mounted() {

        },
        methods: {
            onLogin: function () {
               this.$refs.loading.showLoading(() =>{
                   this.$router.push('History')
               });
            }
        }
    }
</script>

<style>
    .btn-large {
        margin-top: 1rem;
    }

</style>
