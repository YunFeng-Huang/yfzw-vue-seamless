<template>
  <div id="app">
    <seamless></seamless>
  </div>
</template>

<script>
import seamless from './compontents/seamless'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components:{seamless},
  methods:{
  },
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

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;

  padding: 0;
}

</style>
