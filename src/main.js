import { createApp } from 'vue'

import App from './App.vue'

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

import {createPinia} from 'pinia'

const pinia = createPinia()

createApp(App)
.use(pinia)
.mount('#app')
