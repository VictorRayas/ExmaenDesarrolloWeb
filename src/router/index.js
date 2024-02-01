import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter);

const routes = [
    //la ruta base
    {
        path: '/',
        component:()=> import('../components/LandPage.vue')
    },
    
    {
        path: '/paginacion',
        name: 'paginacion',
        component:()=> import('../components/Paginacion.vue')
    },
    {
        path: '/formulario',
        name:'formulario',
        component: () => import('../components/Formulario.vue')
    },
    
]


const router = new VueRouter({ routes, })
export default router;