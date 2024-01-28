<template>
  <v-container id="app-header">
    <v-row>
      <v-col align-self="center">
        <v-row justify="start" align="stretch">
          <v-img
            max-height="60"
            max-width="60"
            src="../assets/logo-mais-a-educacao.svg"
            alt="Logo +A Educação"
          ></v-img>
        </v-row>
      </v-col>
      <v-col align-self="center">
        <v-row justify="end" align="center">
          <v-avatar :image="urlProfile" size="48"></v-avatar>
          <strong>&nbsp;{{ name }}</strong>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import Util from '../services/Util.js'
  import Github from '../services/Github'

  export default {
    name: 'AppHeader',
    data: () => {
      return {
          urlProfile: 'https://www.nyackfire.org/wp-content/uploads/2021/12/male-placeholder.jpg',
          name: 'carregando...'
        }
    },

    mounted: function () {
      this.getInfoCandidate();
    },

    methods: {
      async getInfoCandidate() {
        const {name, avatar_url} = await Github.getUser('t7cabral')

        // Waiting time to show that the data is coming from an external API
        await Util.delay(1500);

        this.name = name
        this.urlProfile = avatar_url
      }
    },
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
