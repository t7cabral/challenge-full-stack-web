<template>
  <v-col
    class="mx-auto"
    max-width="300"
  >
    <v-list>
      <v-list-subheader>Módulo Acadêmico</v-list-subheader>

      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :value="item"
        color="primary"
        variant="plain"
        :to="item.to"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title v-text="item.text"></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-col>
</template>




<script>

export default {
  name: 'AppMenu',
  data: () => ({
      items: [
        { text: 'Home', icon: 'mdi-home', to: '/' },
        { text: 'Alunos', icon: 'mdi-account-multiple', to: '/aluno' },
      ],
    }),
}
</script>

<style>
#title-menu {
  color: #00a0a6;
  font-weight: bold;
}
</style>