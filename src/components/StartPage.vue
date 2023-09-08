<template>
  <v-container fluid>
    <v-layout class="d-flex align-center justify-center" fill-height>
      <v-flex xs12>
        <v-card elevation="3" class="pa-5 text-center">
          <h1 class="display-2">Sistema Acadêmico</h1>
          <v-btn
            to="/students"
            color="primary"
            large
            class="mt-4"
          >
            Alunos
          </v-btn>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
  
  <script>
  export default {
    name: 'StartPage',
  };
  </script>
  