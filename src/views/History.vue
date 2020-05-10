<template>
    <div class="steps-container">
        <div class="step-container">
            <img class="step" src="/img/steps/step_icons/1.png" v-on:click="stepClick1"/>
            <p class="step-desc">Русские города</p>
        </div>
        <div class="step-container">
            <img class="step inactive" src="/img/steps/step_icons/2.png"/>
            <p class="step-desc">Имя</p>
        </div>
        <div class="step-container">
            <img class="step inactive" src="/img/steps/step_icons/3.png"/>
            <p class="step-desc">Сделай своими руками</p>
        </div>
        <div class="step-container">
            <img class="step inactive" src="/img/steps/step_icons/4.png"/>
            <p class="step-desc">Второй язык</p>
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

    export default {
        name: 'History',
        components: {},
        methods: {
            stepClick1: function (event) {
                this.$router.push({name: 'Task', params: {step: '1essdsdsdsd'}})
            }
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
        text-align: center;
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
        opacity: 0.2;
    }

</style>
