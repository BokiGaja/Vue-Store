import AppCustomers from './components/AppCustomers';
import AppProducts from './components/AppProducts';
import VueRouter from 'vue-router'



const routes = [
    { path: '/customers', name: 'customers', component: AppCustomers},
    { path: '/products', name: 'products', component: AppProducts}
];


export const  router = new VueRouter({
    mode: 'history',
    routes
});