import { createMemoryHistory, createRouter } from 'vue-router'
import AdvantagesTele2 from '@/pages/AdvantagesTele2.vue';
import Plans from '@/pages/Plans.vue';
import Sales from '@/pages/Sales.vue';
import PromoPlan from '@/pages/PromoPlan.vue';
import Tecnologies from '@/pages/Tecnologies.vue';
import NewConnect from '@/pages/NewConnect.vue';



const routes = [
    { path: '/', name: 'main', component: AdvantagesTele2 },
    { path: '/plans', name: 'plan', component: Plans },
    { path: '/sales', name: 'sales', component: Sales },
    { path: '/promo', name: 'promo', component: PromoPlan },
    { path: '/technologies', name: 'technologies', component: Tecnologies },
    { path: '/connect', name: 'connect', component: NewConnect },
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})