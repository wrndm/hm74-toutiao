import Vue from 'vue'
import App from './App.vue'
import ELEMENT from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 1:默认索引  文件夹下如果存在 index.js index.vue index.json默认加载这些文件
// 2: 在使用vue-cli的时候 @符号在路径中做为前缀使用的时候，代表src目录

import router from '@/router'

Vue.use(ELEMENT)
Vue.config.productionTip = false

// 职责1：导入项目需要依赖的资源(包 css ...)
// 职责2：初始化跟实例 new Vue()选项render 作用是把某一个
// APP组件渲染在指定的容器(.$mount('#app'))内
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
