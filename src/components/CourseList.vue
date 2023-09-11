<template>
  <div>
    <h1 class="display-5 text-center">Cursos</h1>
    <v-data-table :items="items" :headers="headers"></v-data-table>
  </div>
</template>

<script>
import courseService from '../services/CourseService';
import { VDataTable } from 'vuetify/lib/components';

export default {
  components: {
    VDataTable,
  },
  data() {
    return {
      items: [],
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'Nome', value: 'name' }
      ],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        this.items = await courseService.getCourses();
      } catch (error) {
        console.error("Error:", error);
      }
    },
  },
};
</script>
