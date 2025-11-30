import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'

import Vue3EasyDataTable from 'vue3-easy-data-table'
import 'vue3-easy-data-table/dist/style.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

const app = createApp(App)

app.component('EasyDataTable', Vue3EasyDataTable)
app.use(router)

app.mount('#app')
