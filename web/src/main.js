import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import VuetifyUseDialog from 'vuetify-use-dialog'
import { loadFonts } from './plugins/webfontloader'
import router from './router'

import App from './App.vue'

loadFonts()

const app = createApp(App);
app.use(vuetify);
app.use(VuetifyUseDialog, {
  confirmDialog: {
    title: 'Tem certeza?',
    confirmationText: 'Sim',
    cancellationText: 'Não',
  },
  useSnackbar : {
    closeButtonText: 'Fechar'
  }
});
app.use(router);
app.mount('#app');
