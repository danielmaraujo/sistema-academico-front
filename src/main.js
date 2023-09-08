import Vue from 'vue'; // Import Vue
import VueRouter from 'vue-router'; // Import Vue Router

import App from './App.vue';
import StartPage from './components/StartPage.vue';
import StudentList from './components/StudentList.vue';

import vuetify from './plugins/vuetify';
import 'vuetify/dist/vuetify.min.css';

// Use Vue Router
Vue.use(VueRouter);

// Create the Vue 2 app instance
const app = new Vue({
  el: '#app', // This specifies the HTML element with the id "app" to mount the app
  render: (h) => h(App),
  router: new VueRouter({
    routes: [
      { path: '/', component: StartPage },
      { path: '/students', component: StudentList },
    ],
    mode: 'history', // Use history mode for routing
  }),
  vuetify,
});

