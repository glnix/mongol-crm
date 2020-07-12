<template>
    <div class="row">
        <div class="col s8 offset-s2">
            <loading ref="loading"/>
            <h1>{{ title }}</h1>

            <video width="100%" height="100%" controls :src="videoSource"
                   type="video/mp4" class="task-video-container" v-show="showVideo"/>

            <div v-html="description"></div>
            <input class="fileInput" type="file" id="file" ref="file" v-on:change="handleFileUpload"/>
            <a class="waves-effect waves-light btn-large light-blue" id="upload-btn" v-on:click="addFiles">
                <i class="material-icons right">publish</i>{{ uploadBtnTitle }}</a>
            <div class="fileName">{{ file }}</div>

        </div>
    </div>
</template>

<script>
    import LoadingComponent from "../components/LoadingComponent";

    export default {
        name: 'Task',
        components: {'Loading': LoadingComponent},
        mounted() {
            if (this.$route.params.step === '1') {
                this.title = 'По городам России'
                this.showVideo = true
                this.description = "Здравствуйте, друзья! Мы объявляем старт марафона по русскому языку. И первая наша тема – «Города России». Мы хотим чуть ближе познакомить вас с географией и культурой России. Перед вами видео о Екатеринбурге. Посмотрите его, пожалуйста, и перейдите по ссылке, чтобы выполнить конкурсные задания: \n" +
                    "<a href='https://drive.google.com/drive/folders/1Jypkpwgv614zMy1zgWbwQH574bQmRkAV'>Ссылка</a><br>" +
                    "Обращаем ваше внимание на то, что в разделе «О марафоне» вы можете прочитать, как работать на этом сайте."
            } else if (this.$route.params.step === '2') {
                this.title = 'Имя'
                this.showVideo = false
                this.description = "Расскажи про свое имя."
            }
        },
        data() {
            return {
                videoSource: "https://videos1.hb.bizmrg.com/step1.mp4",
                title: "",
                showVideo: false,
                description: "",
                file: null,
                uploadBtnTitle: "Выбрать файл"
            }
        },
        methods: {
            handleFileUpload: function () {
                this.file = this.$refs.file.files[0].name;
            },
            addFiles: function () {
                if (this.file == null) {
                    this.$refs.file.click();
                } else {
                    this.$refs.loading.showLoading(() => {
                            alert("Ответ загружен");
                            this.$router.push('History');

                        }
                    );
                }
            }
        }
    }
</script>

<style>
    .task-video-container:focus {
        outline: none;
    }

    .btn-large {
        margin-top: 1rem;
    }

    .fileName {
        margin-top: 1rem;
    }

    .fileInput {
        display: none;
    }
</style>
