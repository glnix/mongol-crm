<template>
    <div class="row">
        <div class="col s6 offset-s3">
            <h1>Login form</h1>

            <form>
                <div class="input-field">
                    <input id="login" type="text">
                    <label for="login">Login</label>
                </div>

                <div class="input-field">
                    <input id="password" type="password">
                    <label for="password">Password</label>
                </div>

                <a class="waves-effect waves-light btn-large" id="upload-btn">
                    <i class="material-icons right">face</i>Войти</a>

            </form>

        </div>
    </div>
</template>

<script>
    import router from "../router";

    export default {
        name: 'Login',
        components: {},
        mounted() {
            // router.push("/profile")
        }
    }
</script>

<style>
    .btn-large {
        margin-top: 1rem;
    }
</style>
