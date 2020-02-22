require('./bootstrap');

window.Vue = require('vue');
window.Bus = new Vue();
import VueRouter from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import routes from './router';
import App from './components/App';
import PortalVue from 'portal-vue';

Vue.use(PortalVue);
Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes,
});
router.beforeResolve((to, from, next) => {
    if (to.name) {
        NProgress.start();
    }
    next();
});

router.afterEach((to, from) => {
    NProgress.done();
});

Vue.component('flash-message', require('./components/Utilities/FlashMessage'));
const app = new Vue({
    el: '#app',
    components: { App },
    router,
});
