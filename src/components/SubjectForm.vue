<template>
    <div>
      <v-card>
        <v-card-title class="headline">Criar Nova Disciplina</v-card-title>
        <v-card-text>
          <v-form @submit.prevent="createSubject">
            <v-text-field v-model="newSubject.name" label="Nome" required></v-text-field>
            <v-text-field v-model="newSubject.courseLoad" label="Carga Horária" type="number" required></v-text-field>
            <v-text-field v-model="newSubject.professor" label="Professor" required></v-text-field>
            <v-text-field v-model="newSubject.course" label="Curso" required></v-text-field>
            <v-btn type="submit" color="primary">Criar Disciplina</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </div>
  </template>
  
  <script>
  import subjectService from '../services/SubjectService';
  
  export default {
    data() {
      return {
        newSubject: {
          name: '',
          courseLoad: 0,
          professor: '',
          course: '',
        },
      };
    },
    methods: {
      async createSubject() {
        try {
          await subjectService.createSubject(this.newSubject);
          this.$emit('subjectCreated', this.newSubject);
          this.newSubject = {
            name: '',
            courseLoad: 0,
            professor: '',
            course: '',
          };
        } catch (error) {
          console.error('Error creating subject:', error);
        }
      },
    },
  };
  </script>

  