<template>
  <div>
    <h1 class="display-5 text-center">Alunos</h1>
    <v-data-table :items="items" :headers="headers"></v-data-table>
  </div>
</template>
  
<script>
import { VDataTable } from 'vuetify/lib/components';
import studentService from '../services/StudentService';

export default {
  components: {
    VDataTable,
  },
  data() {
    return {
      items: [],
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'Nome', value: 'name' },
        { text: 'Ano de Matrícula', value: 'startYear' },
        { text: 'Curso', value: 'course' },
      ],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        this.items = await studentService.getStudents();
      } catch (error) {
        console.error("Error:", error);
      }
    },
  },
};
</script>