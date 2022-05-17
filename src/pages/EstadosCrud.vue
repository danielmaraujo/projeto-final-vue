<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
           <h1> EstadosCrud </h1>
           <v-data-table
              :headers="headers"
              :items="estados"
              :search="search"
              sort-by="id"
              class="elavation-1">
           </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios"

export default {
  name: "EstadosCrud",
  data: () => ({
    search:"",
    headers: [
      { text: "Id", value: "id"},
      { text: "Nome", value: "nome"},
      { text: "Capital", value: "capital"},
      { text: "País", value: "pais"}
    ],
    estados: []
  }),
  methods: {
    inicializa() {
      axios.get('http://localhost:3000/estados')
        .then((response) => {
          this.estados = response.data
        })
        .catch((error)=> console.log(error))
    }
  },
  created() {
    this.inicializa()
  }
};
</script>