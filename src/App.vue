<template>
    <div id="app">
        <main>
            <Navbar/>
            <div class="container">
                <router-view/>
            </div>
        </main>

        <footer class="page-footer light-blue">
            <div class="footer-copyright light-blue">
                <div class="container">
                    © 2020 УрФУ
                </div>
            </div>
        </footer>

    </div>
</template>

<script>
    import Navbar from "./components/Navbar";

    export default {
        components: {Navbar}
    }

</script>

<style>
    @import "~materialize-css/dist/css/materialize.min.css";

    #app {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
    }

    main {
        flex: 1 0 auto;
    }
</style>
