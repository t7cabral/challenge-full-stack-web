<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <AppHeader/>
        </v-row>
    
        <v-row>&nbsp;</v-row>
        <v-row class="center-region">
          <v-col xs="12" sm="4" md="3" lg="3">
            <AppMenu/>
          </v-col>
          <v-col xs="12" sm="8" md="9" lg="9" style="background-color: #f8f8f8;">
            <!--<router-view></router-view>-->
            <RouterView />
          </v-col>
        </v-row>
        <v-row>&nbsp;</v-row>
        <v-row>
            <AppFooter />
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppMenu from './components/AppMenu.vue'
import AppFooter from './components/AppFooter.vue'
import { RouterView } from 'vue-router'

//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',

  components: {
    AppHeader,
    AppMenu,
    AppFooter,
    RouterView,
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
