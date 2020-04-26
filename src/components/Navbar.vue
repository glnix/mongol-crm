<template>
    <nav class="teal">
        <div class="nav-wrapper">
            <router-link to="/" class="brand-logo">Mongol Russian Test</router-link>
            <ul class="right hide-on-med-and-down">

                <router-link
                        tag="li"
                        to="/"
                        exact
                        active-class="active"
                >
                    <a href="#">Login</a>
                </router-link>

                <router-link
                        tag="li"
                        to="/tasks"
                        active-class="active"
                >
                    <a href="#">Tasks</a>
                </router-link>

                <router-link
                        tag="li"
                        to="/profile"
                        active-class="active"
                >
                    <a href="#">Profile</a>
                </router-link>

                <router-link
                        tag="li"
                        to="/history"
                        active-class="active"
                >
                    <a href="#">History</a>
                </router-link>

            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>
    nav {
        padding: 0 2rem;
    }
</style>