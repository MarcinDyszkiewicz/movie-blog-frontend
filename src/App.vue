<template>
  <div id="app" class="min-h-screen flex flex-col">
    <layout></layout>

    <div class="container mx-auto max-w-2xl flex-grow">
      <router-view/>
    </div>

    <footer-main></footer-main>

  </div>
</template>

<script>
    import '@/assets/styles/main.css';
    import Layout from './components/Layout';
    import FooterMain from './components/FooterMain';

    export default {
        name: 'app',
        components: { Layout, FooterMain }
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