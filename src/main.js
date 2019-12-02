// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import FastClick from "fastclick";
import VueRouter from "vue-router";
import App from "./App";
import router from "./router/index";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import publicFun from './public.js'

Vue.use(ElementUI);

Vue.prototype.hashParams = publicFun.obj

FastClick.attach(document.body);

Vue.config.productionTip = false;

Vue.use(VueRouter);

// if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
//   new Vue({
//     router,
//     render: h => h(App)
//   }).$mount("#app-box");
// } else {
//   new Vue({
//     pcrouter,
//     render: h => h(App)
//   }).$mount("#app-box");
// }

new Vue({
  router,
  render: h => h(App)
}).$mount("#app-box");
