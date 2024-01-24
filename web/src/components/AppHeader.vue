<template>
  <v-container id="app-header">
    <v-row>
      <v-col align-self="center">
        <v-row justify="start" align="stretch">
          <v-img
            max-height="60"
            max-width="60"
            src="https://maisaedu.com.br/hubfs/site-grupo-a/logo-mais-a-educacao.svg"
            alt="Logo +A Educação"
          ></v-img>
        </v-row>
      </v-col>
      <v-col align-self="center">
        <v-row justify="end" align="center">
          <v-avatar image="https://avatars.githubusercontent.com/u/3072256?v=4" size="48"></v-avatar>
          <strong>&nbsp;Thiago Cabral</strong>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>

export default {
  name: 'AppHeader'
}

</script>

<style>
#app-header {
  color: #FFF;
  box-shadow: 0px 2px 0px 0px rgb(48 74 144);
  box-shadow: 0px 3px 5px 0px rgb(48 74 144);
  background: linear-gradient(
    45deg,
    rgb(130 154 230) 12%,
    rgb(199 109 174) 84%
  );
  background-blend-mode: normal;
}

</style>
