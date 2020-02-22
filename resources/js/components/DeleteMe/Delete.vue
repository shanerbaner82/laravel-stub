<template>
    <div class="h-full">
        <ModalWrapper :show="show" :closeable="true" @hide="show = false">
            <div
                class="bg-white p-6 rounded-lg w-full mx-4 sm:w-3/4 md:w-3/5 lg:w-1/2 xl:w-1/3"
            >
                <h4 class="text-2xl text-center font-bold text-gray-800">Behind the scenes we are using the following opinionated packages and custom Vue components</h4>
                <div class="max-w-2xl mt-4 flex flex-col text-center text-lg text-purple-500 font-bold">
                    <a class="mt-2 text-xl" href="https://laravel.com" target="_blank">Laravel</a>
                    <a class="mt-2 text-xl" href="https://vuejs.org/" target="_blank">VueJS</a>
                    <a class="mt-2 text-xl" href="https://router.vuejs.org/" target="_blank">Vue Router</a>
                    <a class="mt-2 text-xl" href="https://tailwindcss.com/" target="_blank">TailwindCss</a>
                    <a class="mt-2 text-xl" href="https://github.com/LinusBorg/portal-vue" target="_blank">Portal Vue</a>
                    <a class="mt-2 text-xl" href="https://laravel-news.com/building-a-flash-message-component-with-vue-js-and-tailwind-css" target="_blank">Jason Beggs Flash Messages</a>
                </div>
            </div>
        </ModalWrapper>
        <div class="flex h-full items-center justify-center text-center">
            <div>
                <h1 class="text-gray-600 text-4xl font-bold">{{word}}</h1>
                <button @click="show=true" class="text-xl text-purple-500 font-bold">Click Me</button>
            </div>
        </div>
    </div>

</template>

<script>
    import ModalWrapper from "../Utilities/ModalWrapper";
    export default {
        components: {ModalWrapper},
        name: "Delete",
        data() {
            return {
                show: false
            }
        },
        computed: {
            word() {
                return this.$route.params.word
            }
        }
    }
</script>

<style scoped>

</style>
