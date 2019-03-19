import Vue from 'vue'
import Router from 'vue-router'

const NewTask = () => import('@/components/Task/new');
const TaskDetail = () => import('@/components/Task/detail');
const Status = () => import('@/components/Task/status');
const Verify = () => import('@/components/Task/verify');
const Result = () => import('@/components/Result');
const Hall = () => import('@/components/Task/Hall');
const PayDeposit = () => import('@/components/PayDeposit');
const TaskAdd = () => import('@/components/Task/Add/index');
const TaskAddEditor = () => import('@/components/Task/Add/content');

import Task from './../components/my/task.vue'	//TDS 任务系统
import TVdetail from './../components/my/TVdetail'    //07 明细
import TVcount from './../components/my/TVrecharge'     //08 充值TV点
import my from './../components/my/my'                //  06 我的
import release from './../components/my/release' //发布的任务
import getTask from './../components/my/getTask' //领取的任务

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hall',
      component: Hall
    },
    {
      path: '/newtask',
      name: 'NewTask',
      component: NewTask
    },{
      path: '/detail',
      component: TaskDetail
    },{
      // 审核结果不同状态
      path: '/status',
      component: Status
    },{
      // 审核任务
      path: '/verify',
      component: Verify
    },{
      path: '/result',
      component: Result
    },{
      // 任务大厅
      path: '/hall',
      component: Hall
    },{
      // 支付押金
      path: '/paydeposit',
      component: PayDeposit
    },{
      //任务添加富文本
      path: '/taskAdd',
      component: TaskAdd
    }
    ,{
      //新增任务富文本
      path: '/taskAddEditor',
      component: TaskAddEditor
    } ,
    {path:'/TVdetail',name:'TVdetail',component:TVdetail}, // 明细
		{path:'/dos',component:Task},  //TDS 任务系统
		{path:'*',redirect:'/dos'},   //重定向 
		{path:'/tvcount',component:TVcount, name:'tvcount'}, //充值
		{path:'/my',component:my,name:'my'},  //我的
	  	{   //  TDS 任务系统
			path: '/task',
			component: Task,
		},
		{ //  发布的任务
			path: '/release',
			component: release
		},
		{ //  领取的任务
			path: '/getTask',
			component: getTask
		}
  ]
})
