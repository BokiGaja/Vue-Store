import VueRouter from 'vue-router'
import AppCustomers from './components/AppCustomers';
import AppProducts from './components/AppProducts';
import AppLatestPurchases from './components/AppLatestPurchases';
import AppProduct from './components/AppProduct'

const routes = [
    { path: '/customers/:id', name: 'latestPurchases', props: true,  component: AppLatestPurchases},
    { path: '/customers', name: 'customers', component: AppCustomers},
    { path: '/products/:id', name: 'product', component: AppProduct},
    { path: '/products', name: 'products', component: AppProducts}
];

export const  router = new VueRouter({
    mode: 'history',
    routes
});