import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import VuetifyUseDialog from 'vuetify-use-dialog'
import { loadFonts } from './plugins/webfontloader'
import router from './router'

import Vue3Toasity from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

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

app.use(Vue3Toasity, { autoClose: 3000 });

app.use(router);

app.mount('#app');
