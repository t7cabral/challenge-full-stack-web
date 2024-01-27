<template>
  <v-container id="app-footer">
    <v-row>
      <v-col>
        <v-row justify="center" align="center">
          <p>Frontend com Vue 3 e Vuetify</p>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style>
#app-footer {
  
  color: #FFF;
  box-shadow: 0px 3px 5px 0px rgb(48 74 144);
  border: 1px solid rgba(100, 100, 100, 1);

  background: linear-gradient(
    45deg,
    rgb(130 154 230) 12%,
    rgb(199 109 174) 84%
  );
  background-blend-mode: normal;
}
</style>