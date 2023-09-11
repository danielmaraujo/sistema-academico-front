<template>
  <div>
    <h1 class="display-5 text-center">Professores</h1>
    <v-data-table :items="items" :headers="headers"></v-data-table>
  </div>
</template>

<script>
import professorService from '../services/ProfessorService';
import { VDataTable } from 'vuetify/lib/components';

export default {
  components: {
    VDataTable,
  },
  data() {
    return {
      items: [],
      headers: [
        { text: 'Usuário', value: 'username' },
        { text: 'Nome', value: 'name' },
      ],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        this.items = await professorService.getProfessors();
      } catch (error) {
        console.error("Error:", error);
      }
    },
  },
};
</script>
