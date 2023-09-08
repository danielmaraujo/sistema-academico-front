<template>
  <div>
    <h1 class="display-5 text-center">Alunos</h1>
    <v-data-table :items="items" :headers="headers"></v-data-table>
  </div>
</template>
  
<script>
import axios from 'axios';
import { VDataTable } from 'vuetify/lib/components';

export default {
  components: {
    VDataTable, // Register the component
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
        const response = await axios.get('https://sistema-academico-api-ezbw.onrender.com/students');
        this.items = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  },
};
</script>