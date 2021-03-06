import Vue from 'vue'
import App from './App.vue'
import svgicon from 'vue-svgicon/component/svgicon.vue'

// register svgicon global
Vue.component('svgicon', svgicon)

new Vue({
  el: '#app',
  render: h => h(App)
})
