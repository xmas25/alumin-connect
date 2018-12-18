import Vue from 'vue'
import App from './App'
import global_ from './components/Global'

Vue.prototype.GLOBAL = global_
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/index/main', 'pages/search/main', 'pages/charts/main', 'pages/topic/main', 'pages/user/main', 'pages/user-edit/main', 'pages/user-topic/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#000',
      navigationBarTitleText: '校友足迹',
      navigationBarTextStyle: 'white'
    },
    tabBar: {
      'list': [
        {
          'pagePath': 'pages/index/main',
          'text': '校友足迹',
          'iconPath': '/static/img/foot.png',
          'selectedIconPath': '/static/img/foot-active.png'
        },
        {
          'pagePath': 'pages/topic/main',
          'text': '校友圈子',
          'iconPath': '/static/img/topic.png',
          'selectedIconPath': '/static/img/topic-active.png'
        },
        {
          'pagePath': 'pages/user/main',
          'text': '个人中心',
          'iconPath': '/static/img/user.png',
          'selectedIconPath': '/static/img/user-active.png'
        }
      ]
    }
  }
}
