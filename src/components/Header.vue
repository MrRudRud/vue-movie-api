<template>
    <header>
        <h1>{{ title }}</h1>
        <transition name="fade">
            <h2 v-if="show">{{ fullName }}</h2>
        </transition>
        <button @click="show = !show ">press</button>
    </header>
</template>

<script>
    export default {
        name: 'Header',
        props: {
            title: String
        },
        data() {
            return {
                show: false,
                firstName: 'Scott',
                lastName: 'Bradly',
                name: 'Scott'
            };
        },
        computed: {
            newTitle: function () {
                if(this.name === 'Scott')
                return this.title =  this.title.split('').reverse().join('');
            },
            fullName: function () {
                return  this.firstName + ' ' + this.lastName;
            }
        }
    }
</script>

<style scoped>
    h1 {
        background-color: #111;
        padding: 10px;
        color: aliceblue;
    }
    .fade-enter-active, .fade-leave-active {
        transition: all 0.3s ease;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
        transform: scale(0);
    }
</style>
