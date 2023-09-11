import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import StartPage from './components/StartPage.vue';
import StudentList from './components/StudentList.vue';
import SubjectList from './components/SubjectList.vue';
import CourseList from './components/CourseList.vue';
import ProfessorList from './components/ProfessorList.vue';

import vuetify from './plugins/vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(VueRouter);

const app = new Vue({
  el: '#app',
  render: (h) => h(App),
  router: new VueRouter({
    routes: [
      { path: '/', component: StartPage },
      { path: '/alunos', component: StudentList },
      { path: '/disciplinas', component: SubjectList },
      { path: '/cursos', component: CourseList },
      { path: '/professores', component: ProfessorList },
    ],
    mode: 'history',
  }),
  vuetify,
});

export default app;
