// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'// 引用element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css'// element-ui的css
Vue.use(ElementUI)// 使用emement-ui

var axios = require('axios')
axios.defaults.baseURL = 'http://localhost:8443/api'

Vue.prototype.$axios = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
