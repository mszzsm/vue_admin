import Vue from 'vue'
import App from './App.vue'

import AppMessage from './components/Message.vue'
import AppQuestion from './components/Question.vue'
import AppResults from './components/Results.vue'
import AppStartScreen from './components/StartScreen.vue'

Vue.component('AppMessage', AppMessage);
Vue.component('AppQuestion', AppQuestion);
Vue.component('AppResults', AppResults);
Vue.component('AppStartScreen', AppStartScreen);


new Vue({
  el: '#app',
  render: h => h(App)
})
