<template>
  <div id="app">
    <router-link to="/">
      <Header v-bind:title="title"></Header>
    </router-link>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>
 
<script>
import Header from './components/Header.vue'

export default {
  name: 'app',
  data() {
    return {
      title: "Vue Movie DB",
      show: true,
    };
  },
  components: {
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

  /* padding-top: 0px; */
}

a {
  text-decoration: none;
}

h1 {
  margin-top: 0px;
  margin-bottom: 0px;
}

.fade-enter-active, .fade-leave-active {
    transition: all 0.3s ease;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
    /* transform: translateX(100%); */
    transform: scale(0);
}

</style>
