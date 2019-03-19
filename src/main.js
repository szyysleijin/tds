// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.prototype.bus = new Vue();
Vue.config.productionTip = false;
Vue.use(MintUI);
/* eslint-disable no-new */

import Vuex from 'vuex';
Vue.use(Vuex);

let store = new Vuex.Store({
  state:{
    data: [{
      title: '邀新注册任务单',
      sub: '可领取',
      dos: '150DOS',
      time: '02-19',
      status: '领取',
      sid:'1-1'
    },
		{
		  title: '邀新注册任务单',
		  sub: '可领取',
		  dos: '150DOS',
		  time: '02-19',
		  status: '领取',
		  sid:'1-1'
		},
		{
		  title: '邀新注册任务单',
		  sub: '可领取',
		  dos: '150DOS',
		  time: '02-19',
		  status: '领取',
		  sid:'1-1'
		},
		{
		  title: '邀新注册任务单',
		  sub: '可领取',
		  dos: '150DOS',
		  time: '02-19',
		  status: '领取',
		  sid:'1-1'
		},
		{
		  title: '邀新注册任务单',
		  sub: '可领取',
		  dos: '150DOS',
		  time: '02-19',
		  status: '领取',
		  sid:'1-1'
		},
      {
        title: 'APP任务下载注册任务',
        sub: '进行中',
        dos: '150DOS',
        time: '02-15',
        status: '完成',
        sid:'1-2'
      },
      {
        title: '抽水工作任务单',
        sub: '',
        dos: '150DOS',
        time: '02-09',
        status: '审核中',
        sid:'1-3'
      },
      {
        title: '邀请注册任务单',
        sub: '',
        dos: '150DOS',
        time: '02-19',
        status: '申诉',
        sid:'1-4'
      }
    ],
    //发布任务模拟数据
    release_data:[{
      title: '邀新注册任务单',
      sub: '可领取',
      dos: '150DOS',
      time: '剩余次数：50次',
      status: '审核',
      sid:'2-1'
    },
      {
        title: 'APP任务下载注册任务',
        sub: '进行中',
        dos: '150DOS',
        time: '剩余次数：50次',
        status: '进行中',
        sid:'2-2'
      },
      {
        title: '抽水工作任务单',
        sub: '',
        dos: '150DOS',
        time: '剩余次数：50次',
        status: '已结束',
        sid:'2-3'
      }
    ],
    // 领取的任务模拟数据
    getTask_data:[{
      title: '抽水工作任务单',
      sub: '',
      dos: '150DOS',
      time: '剩余次数：50次',
      status: '待审核',
      sid:'3-1'
    },
      {
        title: 'APP任务下载注册任务',
        sub: '进行中',
        dos: '150DOS',
        time: '剩余次数：50次',
        status: '进行中',
        sid:'3-2'
      },
      {
        title: '抽水工作任务单',
        sub: '',
        dos: '150DOS',
        time: '剩余次数：50次',
        status: '已结束',
        sid:'3-3',
      },
      {
        title: '测试任务单',
        sub: '被驳回',
        dos: '150DOS',
        time: '剩余次数：50次',
        status: '查看',
        sid:'3-4'
      }
    ]
  },
  mutations:{

  },
  getters:{

  }
});
Vue.filter('data',(val)=>{
  // 日期过滤器
  var data = new Date(val)
  var yy = data.getFullYear();
  var mm = data.getMonth()+1;
  mm = mm>9 ? mm : '0'+mm
  var dd = data.getDate();
  dd = dd>9 ? dd : '0'+dd
  return `${yy}-${mm}-${dd}`
})

Vue.filter('datatime',(val)=>{
  // 日期过滤器, 时分秒
  var data = new Date(val)
  var yy = data.getFullYear();
  var mm = data.getMonth()+1;
  mm = mm>9 ? mm : `0${mm}`
  var dd = data.getDate();
  dd = dd>9 ? dd : `0${dd}`

  var hh = data.getHours();
  hh = hh>9 ? hh : '0'+hh
  var mi = data.getMinutes()
  mi = mi>9 ? mi : '0'+mi
  var ss = data.getSeconds()
  ss = ss>9 ? ss : '0'+ss
  return `${yy}-${mm}-${dd} ${hh}:${mi}:${ss}`
});

Vue.filter('currency',(val)=>{
  // 价格过滤器¥2.00
  return '¥'+val.toFixed(2)
});
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});


