import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 职责1：导入项目需要依赖的资源(包 css ...)
// 职责2：初始化跟实例 new Vue()选项render 作用是把某一个
// APP组件渲染在指定的容器(.$mount('#app'))内
new Vue({
  render: h => h(App)
}).$mount('#app')
