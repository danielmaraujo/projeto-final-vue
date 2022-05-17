import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../pages/HomePage'
import CidadesCrud from '../pages/CidadesCrud'
import EstadosCrud from '../pages/EstadosCrud'

Vue.use(VueRouter)

const routes = [
  { path: '/',      name: 'HomePage',    component: HomePage   },
  { path: '/cidades', name: 'CidadesCrud', component: CidadesCrud },
  { path: '/estados', name: 'EstadosCrud', component: EstadosCrud }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
