<template>
  <div id="app">
    <p>
      <svgicon class="vue-logo" icon="vue" width="15rem" height="15rem"></svgicon>
    </p>
    <h1>Vue Svg Icon</h1>
    <div>
      <h2>Direction (default: right)</h2>
      <p>
        <svgicon icon="arrow" width="50" height="50" dir="left"></svgicon>
        <svgicon icon="arrow" width="50" height="50" dir="up"></svgicon>
        <svgicon icon="arrow" width="50" height="50"></svgicon>
        <svgicon icon="arrow" width="50" height="50" dir="down"></svgicon>
      </p>
      <h2>Fill (default: fill)</h2>
      <p>
        <svgicon icon="arrow" width="50" height="50"></svgicon>
        <svgicon icon="arrow" width="50" height="50" :fill="false"></svgicon>
      </p>
      <h2>Size (defalt: px)</h2>
      <p>
        <svgicon icon="arrow" width="50" height="50"></svgicon>
        <svgicon icon="arrow" width="10em" height="10em"></svgicon>
      </p>
      <h2>Color (defalt: inherit)</h2>
      <p style="color: darkorange">
        <svgicon icon="arrow" width="50" height="50"></svgicon>
        <svgicon icon="arrow" width="50" height="50" color="red"></svgicon>
        <svgicon icon="arrow" width="50" height="50" color="green"></svgicon>
        <svgicon icon="arrow" width="50" height="50" color="blue"></svgicon>
      </p>
      <h2>Multi Color (define by path/shape order)</h2>
      <p>
        <svgicon icon="vue" width="100" height="100" color="red green"></svgicon>
      </p>
      <p>
        <svgicon icon="colorwheel" width="200" height="200" :color="colors"></svgicon>
      </p>
    </div>
  </div>
</template>

<script>
import 'icons/arrow'
import 'icons/vue'
import 'icons/colorwheel'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      colors: '#FBAD20 #F5EB13 #B8D433 #6BC9C6 #058BC5 #34469D #7E4D9F #C63D96 #ED1944'
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
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

.vue-logo path[pid="1"] {
    color: #42b983
}

.vue-logo path[pid="2"] {
    color: #35495e
}
</style>
