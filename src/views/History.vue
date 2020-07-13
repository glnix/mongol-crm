<template>
    <div class="steps-container">
        <loading ref="loading"/>
        <div class="step-container">
            <img class="step" src="/img/steps/step_icons/1.png" v-on:click="stepClick1"/>
            <p class="step-desc">По городам России</p>
        </div>
        <div class="step-container">
            <img class="step" src="/img/steps/step_icons/2.png" v-on:click="stepClick2"/>
            <p class="step-desc">Имя - это судьба</p>
        </div>
        <div class="step-container">
            <img class="step inactive" src="/img/steps/step_icons/3.png"/>
            <p class="step-desc">Designed it yourself</p>
        </div>
        <div class="step-container">
            <img class="step inactive" src="/img/steps/step_icons/4.png"/>
            <p class="step-desc">Язык современного Рунета</p>
        </div>
        <div class="step-container">
            <img class="step inactive" src="/img/steps/step_icons/5.png"/>
            <p class="step-desc">Кухня</p>
        </div>
        <div class="step-container">
            <img class="step inactive" src="/img/steps/step_icons/6.png"/>
            <p class="step-desc">Твой старт-ап</p>
        </div>
    </div>
</template>

<script>

    import LoadingComponent from "../components/LoadingComponent";

    export default {
        name: 'History',
        components: {'Loading': LoadingComponent},
        methods: {
            stepClick1: function () {
                this.$refs.loading.showLoading(() => this.$router.push({name: 'Task', params: {step: '1'}}))
            },
            stepClick2: function () {
                this.$refs.loading.showLoading(() => this.$router.push({name: 'Task', params: {step: '2'}}))
            },
        },
        mounted() {

        },
        created() {

        }
    }
</script>

<style>
    .steps-container {
        display: flex;
        justify-content: center;
    }

    .step-container {
        position: relative;
        text-align: center;
    }

    .step-container:not(:last-child):after {
        position: absolute;
        top: 2.5em;
        right: 0;
        content: "→";
        font-size: 2em;
    }

    .step {
        width: 10rem;
        height: 10rem;
        margin: 1.2rem;
    }

    .step-desc {
        margin: 0;
    }

    .step.inactive {
        opacity: 0.3;
    }

</style>
