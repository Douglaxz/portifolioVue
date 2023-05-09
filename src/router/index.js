import { createRouter, createWebHistory } from 'vue-router'
import historia from '../views/minhahistoria.vue'
import familia from '../views/familia.vue'
import emprego from '../views/emprego.vue'
import hobbie from '../views/hobbie.vue'
import conhecimento from '../views/conhecimento.vue'
import treinamentoDiv from '../views/treinamentoDiv.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'minhahistoria',
      component: historia
    },
    {
      path: '/familia',
      name: 'familia',
      component: familia
    },
    {
      path: '/emprego',
      name: 'emprego',
      component: emprego
    },    
    {
      path: '/conhecimento',
      name: 'conhecimento',
      component: conhecimento
    },
    {
      path: '/hobbie',
      name: 'hobbie',
      component: hobbie
    },         
    {
      path: '/treinamentoDiv',
      name: 'treinamentoDiv',
      component: treinamentoDiv
    },
   /*  {
      path: '/contato',
      name: 'contato',
      component: contato
    } */


  ]
})

export default router
