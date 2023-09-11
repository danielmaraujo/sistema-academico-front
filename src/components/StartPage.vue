<template>
  <v-container fluid>
    <v-layout class="d-flex align-center justify-center" fill-height>
      <v-flex xs12>
        <v-card elevation="3" class="pa-5 text-center">
          <h1 class="display-2">Sistema Acadêmico</h1>
          <v-btn
            to="/alunos"
            color="primary"
            large
            class="mt-4 spaced-button"
          >
            Alunos
          </v-btn>
          <v-btn
            to="/disciplinas"
            color="primary"
            large
            class="mt-4 spaced-button"
          >
            Disciplinas
          </v-btn>
          <v-btn
            to="/cursos"
            color="primary"
            large
            class="mt-4 spaced-button"
          >
            Cursos
          </v-btn>
          <v-btn
            to="/professores"
            color="primary"
            large
            class="mt-4 spaced-button"
          >
            Professores
          </v-btn>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped>
.spaced-button {
  margin-right: 10px; /* Adjust the margin as needed */
}
</style>
  
<script>
export default {
  name: 'StartPage',
};
</script>
  