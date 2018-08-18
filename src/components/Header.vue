<template>
    <header>
        <h1>{{ title }}</h1>
        <h1>{{ fullName }}</h1>
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
</style>
