import { createApp } from 'vue'
import App from './App.vue'

import router from './router/routes'
import { createPinia } from "pinia";

import './assets/global.css';

//setup jQuery globally also
global.jQuery = require('jquery');
const $ = global.jQuery;
window.$ = $  ;

//import bootstrap here so its accessable in the entire app
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faUserCircle } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faUserCircle)



const pinia = createPinia();

const app = createApp(App);
app.use(router);
app.use(pinia);
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app');