import Vue from 'vue';
import index from './views/Index';
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.config.debug = process.env.NODE_ENV === 'development';

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { index }
});
