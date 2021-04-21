import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Forgot from './components/Forgot.vue'
import Reset from './components/Reset.vue'
import Depo from './components/Depo.vue'
import Kategori from './components/Kategori.vue'
import Urun from './components/Urun.vue'
import Stok from './components/Stok.vue'




Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {path: '/', component: Home},
        {path: '/login', component: Login},
        {path: '/register', component: Register},
        {path: '/forgot',component: Forgot},
        {path: '/reset/:token', component: Reset},
        {path: '/depo', component: Depo},
        {path: '/kategori', component: Kategori},
        {path: '/urun', component: Urun},
        {path: '/stok', component: Stok}

    
        
    ]
})