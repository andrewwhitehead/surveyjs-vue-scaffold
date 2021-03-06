import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "@bcgov/bootstrap-theme/dist/css/bootstrap-theme.min.css";

// https://www.npmjs.com/package/vue-fontawesome-icon
// import material-icon scss
import "font-awesome/css/font-awesome.min.css";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

new Vue({
  render: h => h(App),
  data: {
    survey: window.survey
  }
}).$mount("#app");
