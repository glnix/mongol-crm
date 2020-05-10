<template>
    <div class="row">
        <div class="col s6 offset-s3">
            <h1>Task #1</h1>

            <video width="100%" height="100%" controls  :src="videoSource"
                   type="video/mp4" class="task-video-container"/>
            <a class="waves-effect waves-light btn-large" id="upload-btn">
                <i class="material-icons right">publish</i>Загрузить ответ</a>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'Task',
        components: {},
        mounted() {
        },
        data() {
            return {
                videoSource: "https://www.w3schools.com/tags/"+this.$route.params.step+".mp4"
            }
        },
    }
</script>

<style>
    .task-video-container:focus {
        outline: none;
    }

    .btn-large {
        margin-top: 1rem;
    }
</style>
