import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

//import jquery
import jQuery from 'jquery'
window.$ = jQuery


//fontawessome
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import '@/assets/css/styles.css'
import '@/assets/js/scripts.js'

createApp(App).use(router).mount('#app')
