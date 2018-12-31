<template>
  <div id="app">
    <router-view/>

    <layout></layout>
  </div>
</template>

<script>
    import '@/assets/styles/main.css';
    import Layout from './components/Layout';

    export default {
        name: 'app',
        components: { Layout }
    }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>