<template>
  <v-app>
    <v-main>

      <v-container>

        <v-row>
          <AppHeader/>
        </v-row>
      
      <v-row>&nbsp;</v-row>
      <v-row class="center-region">
        <v-col sm="4" md="4" lg="3">
          <AppMenu/>
        </v-col>
        <v-col style="background-color:
        rgb(227, 233, 224);">
          <HelloWorld/>
        </v-col>
      </v-row>
      <v-row>&nbsp;</v-row>

      <v-row style="background-color: yellow;">
        <v-col>FOOTER</v-col>
      </v-row>


      </v-container>




      

      


      
      
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppMenu from './components/AppMenu.vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',

  components: {
    AppHeader,
    AppMenu,
    HelloWorld,
  },

  data: () => ({
    //
  }),
}
</script>

<style>
.center-region {
  border: 1px solid rgb(237 240 235);
  border-radius: 3px;
}
</style>
