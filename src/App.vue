<template>
  <div id="app" class="min-h-screen flex flex-col">
    <layout></layout>

    <div class="container w-full mx-auto max-w-2xl flex-grow">
      <panel v-if="layout"/>
        <router-view v-if="!layout"/>
    </div>
<!--podzielić na dwa layouty i w srodku nich wbic router view-->
    <footer-main/>

  </div>
</template>

<script>
    import '@/assets/styles/main.css';
    import Layout from './components/Layout';
    import FooterMain from './components/FooterMain';
    import Panel from "./components/panel/Panel";

    export default {
        name: 'app',
        components: {
            Panel,
            Layout, FooterMain },
        computed: {
            layout() {
                return this.$route.meta.panel
            }
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
  }
</style>
