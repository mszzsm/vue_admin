<template>
  <div class="trening">
    <h1> Trening </h1>
    <AppStartScreen v-if="state == 'start'"></AppStartScreen>
    <AppQuestion v-else-if="state == 'question'"></AppQuestion>
    <AppMessage v-else-if="state == 'message'"></AppMessage>
    <AppResults v-else-if="state == 'result'"></AppResults>
    <div v-else>Unknown state</div>
  </div>

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      state: '2'
    }
  }
}
</script>

<style scope>

.trening {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
