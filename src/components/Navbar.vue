<template>
    <nav class="light-blue">
        <div class="nav-wrapper">
            <router-link to="/" class="brand-logo">
                <img src="/img/icons/logo50.png" height="38" width="38"/>Марафон: Россия - русский язык</router-link>
            <ul class="right hide-on-med-and-down">

                <router-link
                        tag="li"
                        to="/"
                        exact
                        active-class="active"
                >
                    <a href="#">Вход</a>
                </router-link>

                <!--      <router-link
                              tag="li"
                              to="/tasks"
                              active-class="active"
                      >
                          <a href="#">Задание</a>
                      </router-link>-->

             <!--   <router-link
                        tag="li"
                        to="/profile"
                        active-class="active"
                >
                    <a href="#">Профиль</a>
                </router-link>-->

                <router-link
                        tag="li"
                        to="/history"
                        active-class="active"
                >
                    <a href="#">Этапы</a>
                </router-link>

                <router-link
                        tag="li"
                        to="/about"
                        active-class="active"
                >
                    <a href="#">О марафоне</a>
                </router-link>

                <router-link
                        tag="li"
                        to="/contacts"
                        active-class="active"
                >
                    <a href="#">Контакты</a>
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