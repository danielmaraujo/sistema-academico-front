<template>
  <div>
    <v-container>
      <h1 class="display-2 text-center">Disciplinas</h1>
      <v-btn @click="showCreateSubjectForm" color="primary">Criar Nova Disciplina</v-btn>
      <v-data-table :items="items" :headers="headers">
        <template v-slot:item="{ item }">
          <tr>
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.courseLoad }}</td>
            <td>{{ item.professor }}</td>
            <td>{{ item.course }}</td>
            <td>{{ item.students }}</td>
            <td>
              <v-btn @click="toggleStudentForm(item)" color="primary">Adicionar Aluno</v-btn>
            </td>
          </tr>
        </template>
      </v-data-table>
      <new-subject-form v-if="showForm" @subjectCreated="handleSubjectCreated"></new-subject-form>
      
      <v-divider></v-divider>
      <v-card v-if="showStudentForm">
        <v-card-title class="headline">Associar Aluno</v-card-title>
        <v-card-text>
          <v-form @submit.prevent="associateStudent(selectedSubject)">
            <v-text-field v-model="selectedSubject.studentId" label="ID do Aluno" required></v-text-field>
            <v-btn type="submit" color="success">Associar Aluno</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import subjectService from '../services/SubjectService';
import { VDataTable, VContainer, VBtn, VForm, VTextField, VCard, VCardTitle, VCardText, VDivider } from 'vuetify/lib';
import NewSubjectForm from './SubjectForm.vue';

export default {
  components: {
    VDataTable,
    VContainer,
    VBtn,
    VForm,
    VTextField,
    VCard,
    VCardTitle,
    VCardText,
    VDivider,
    NewSubjectForm,
  },
  data() {
    return {
      items: [],
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'Nome', value: 'name' },
        { text: 'Carga Horária', value: 'courseLoad' },
        { text: 'Professor', value: 'professor' },
        { text: 'Curso', value: 'course' },
        { text: 'Alunos', value: 'students' },
        { text: 'Ações', value: 'actions' },
      ],
      showForm: false,
      showStudentForm: false,
      selectedSubject: { studentId: '' },
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        this.items = await subjectService.getSubjects();
        this.items.forEach((item) => {
          item.studentId = '';
        });
      } catch (error) {
        console.error('Error:', error);
      }
    },
    showCreateSubjectForm() {
      this.showForm = true;
    },
    handleSubjectCreated(newSubject) {
      try {
        this.items.push({ ...newSubject, studentId: '' });
        this.showForm = false;
      } catch (error) {
        console.error('Error creating subject:', error);
      }
    },
    toggleStudentForm(subject) {
      this.selectedSubject = { ...subject, studentId: '' };
      this.showStudentForm = !this.showStudentForm;
    },
    async associateStudent(subject) {
      try {
        const { id: subjectId, studentId } = subject;
        await subjectService.associateStudent(subjectId, studentId);
        this.showStudentForm = false;
      } catch (error) {
        console.error('Error associating student:', error);
      }
    },
  },
};
</script>
