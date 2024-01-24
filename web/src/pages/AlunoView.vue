<template>
  <v-container>

    <p class="text-h4 block">Consulta de Alunos</p>

    <v-row>
      <v-col>
        <v-row>
          <v-breadcrumbs :items="['Home', 'Aluno']"></v-breadcrumbs>
        </v-row>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="bg1">barra de pesquisa</v-col>
      <v-col class="bg2">botao +</v-col>
    </v-row>

    <v-row>&nbsp;</v-row>

    <v-row>
      <v-col class="bg3">
        <v-data-table-virtual
          :headers="student_headers"
          :items="student_data"
          height="400"
          item-value="name"
        ></v-data-table-virtual>
      </v-col>
    </v-row>


  </v-container>
</template>


<script setup>


const student_headers = [
  { title: 'CÓDIGO', align: 'start', key: 'IdStudent' },
  { title: 'ALUNO', align: 'start', key: 'Name' },
  { title: 'CPF', align: 'start', key: 'CPF' },
]

const student_data = [
    {
      'IdStudent': '1001',
      'Name': 'Thiago Alves Cabral',
      'CPF': '001.001.002-01',
    },
    {
      'IdStudent': '1002',
      'Name': 'Alive Barbosa Cabral',
      'CPF': '002.001.002-02',
    },
]

</script>

<style>
.bg1 {
  background-color: blue;
}

.bg2 {
  background-color: red;
}

.bg3 {
  background-color: green;
}

.bg4 {
  background-color: rgb(201, 186, 52);
}

</style>