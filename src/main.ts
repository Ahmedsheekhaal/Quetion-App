import { createApp } from 'vue'
import App from './App.vue'
import './tailwind.css'
import { createRouter, createWebHistory} from 'vue-router'

import home from './Pages/home.vue'
import one from './Pages/AddQuations.vue'
const router = createRouter({
routes:[
    // {path:'/' , component:home},
    // {path:'/addquation' , component:one},
],
history: createWebHistory()
});
const app = createApp(App)
app.use(router)
app.mount('#app')

