<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
           <h1> CidadesCrud </h1>
           <v-data-table
              :headers="headers"
              :items="cidades"
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
  name: "CidadesCrud",
  data: () => ({
    search:"",
    headers: [
      { text: "Id", value: "id"},
      { text: "Nome", value: "nome"},
      { text: "Estado", value: "estado"},
      { text: "País", value: "pais"},
      { text: "Número de Habitantes", value: "num_habitantes"}
    ],
    cidades: []
  }),
  methods: {
    inicializa() {
      axios.get('http://localhost:3000/cidades')
        .then((response) => {
          this.cidades = response.data
        })
        .catch((error)=> console.log(error))
    }
  },
  created() {
    this.inicializa()
  }
};
</script>