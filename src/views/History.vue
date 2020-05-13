<template>
    <div class="steps-container">
        <loading ref="loading"/>
        <div class="step-container">
            <img class="step" src="/img/steps/step_icons/1.png" v-on:click="stepClick1"/>
            <p class="step-desc">Русские города</p>
        </div>
        <div class="step-container">
            <img class="step active" src="/img/steps/step_icons/2.png"  v-on:click="stepClick2"/>
            <p class="step-desc">Имя</p>
        </div>
        <div class="step-container">
            <img class="step inactive" src="/img/steps/step_icons/3.png"/>
            <p class="step-desc">Сделай своими руками</p>
        </div>
        <div class="step-container">
            <img class="step inactive" src="/img/steps/step_icons/4.png"/>
            <p class="step-desc">Язык интернета</p>
        </div>
        <div class="step-container">
            <img class="step inactive" src="/img/steps/step_icons/5.png"/>
            <p class="step-desc">Еда</p>
        </div>
        <div class="step-container">
            <img class="step inactive" src="/img/steps/step_icons/6.png"/>
            <p class="step-desc">Стартап</p>
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
        top: 5.5em;
        right: 0;
        content: "→";
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
