<template>
    <div class="h-full overflow-y-scroll">
        <portal-target name="modals" multiple />
        <div class="flex flex-col w-full h-screen">
            <Navbar :user="user" />
            <div class="flex-1 w-full lg:hidden mt-32">
                <router-view></router-view>
            </div>
        </div>
        <FlashMessage></FlashMessage>
    </div>

</template>

<script>
    import FlashMessage from "./Utilities/FlashMessage";
    import Navbar from "./Utilities/Navbar";
    export default {
        name: 'App',
        components: { FlashMessage, Navbar },
        props: ['user'],
        mounted() {
            window.localStorage.setItem('user', this.user);
            Bus.$emit('flash-message', {
               text: 'Welcome to the stub!',
               type: 'success'
            });
        },
    };
</script>

<style scoped></style>
