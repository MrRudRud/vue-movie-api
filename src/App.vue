<template>
  <div id="app">
    <Header v-bind:title="title"></Header>
    <ul>
      <li v-for="(item, index) in list">
        {{ index + 1 }} - {{ item }}
      </li>
      <li v-bind:key="person.id" v-for="(person, index) in people">
        {{ index + 1 }} - {{ person.name }}
      </li>
      <li v-bind:key="value.id" v-for="(value, key, index) in profile">
        {{ index + 1 }} - {{ key }}:{{ value }}
      </li>
    </ul>
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>{{hello}}</h1>
    <HelloWorld v-for="person in people" v-bind:key="person.id"  msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'

export default {
  name: 'app',
  data() {
    return {
      hello: "Hello World",
      title: "Vue Movie DB",
      list: ["Scot", "Ryan", "Dino"],
      people: [
        { id: "1", name: 'RudRud' },
        { id: "2", name: 'Rush' }
      ],
      profile: {
        id: 1,
        name: 'RudRud',
        age: 32,
        job: 'Web Developer'
      }
    };
  },
  components: {
    HelloWorld,
    Header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
