<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  font-size: 0.30rem;
  background-color: #f2f2f2;
  color: #333;
  padding: 0;
  margin: 0;
}
html, body, #app {
  width: 100%;
  height: 100%;
}
</style>
