<template>
    <div class="row">
        <div class="col s6 offset-s3">
            <h1>Task #1</h1>

            <video width="100%" height="100%" controls class="task-video-container">
                <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                        type="video/mp4">
            </video>

            <a class="waves-effect waves-light btn-large" id="upload-btn">
                <i class="material-icons right">publish</i>Загрузить ответ</a>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'Task',
        components: {}
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
