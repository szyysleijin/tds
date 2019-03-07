import Vue from 'vue'
import Router from 'vue-router'

import Task from './../components/my/task.vue'

import TaskChildren_one from './../components/my/childrenTemplate/task_children_one' // TDS 任务系统 全部
import TaskChildren_two from './../components/my/childrenTemplate/task_children_two' // TDS 任务系统 可领取
import TaskChildren_three from './../components/my/childrenTemplate/task_children_three'  //TDS 任务系统 进行中
import TaskChildren_four from './../components/my/childrenTemplate/task_children_four'  //TDS 任务系统 审核中

import release_one from './../components/my/new_release/release_one' // 发布的任务 全部
import release_two from './../components/my/new_release/release_two' // 发布的任务 进行中
import release_three from './../components/my/new_release/release_three' //发布的任务 待审核
import release_four from './../components/my/new_release/release_four' // 发布的任务 已结束

import getTask_one from './../components/my/getTaskTemplate/getTask_one' // 领取的任务 全部
import getTask_two from './../components/my/getTaskTemplate/getTask_two' // 领取的任务 进行中
import getTask_three from './../components/my/getTaskTemplate/getTask_three' //领取的任务 待审核
import getTask_four from './../components/my/getTaskTemplate/getTask_four' // 领取的任务 已结束

import TVdetail from './../components/my/TVdetail'    //07 明细
import TVcount from './../components/my/TVrecharge'     //08 充值TV点
import my from './../components/my/my'                //  06 我的

import TVrechargeUE from './../components/my/TVrechargeUE'

import release from './../components/my/release' //发布的任务
import getTask from './../components/my/getTask' //领取的任务


Vue.use(Router)

export default new Router({
   linkActiveClass:'active',
   // linkExactActiveClass:'active',
	routes: [
      {path:'*',redirect:'/one'},
      {path:'/tvcount',component:TVcount,},
      {path:'/tvcountue',component:TVrechargeUE},
      {path:'/tv',component:TVdetail},
		{path:'/',redirect:'/one'},

		{path:'/my',component:my},
		{   //  TDS 任务系统
			path: '/one',
			component: Task,
			children:[
				{path:'',component:TaskChildren_one},
				{path:'/two',component:TaskChildren_two},
				{path:'/three',component:TaskChildren_three},
				{path:'/four',component:TaskChildren_four}
			]
		},
		{
			path: '/release',
			component: release,
			children:[
				{path:'/release_one',component:release_one},
				{path:'/release_two',component:release_two},
				{path:'/release_three',component:release_three},
				{path:'/release_four',component:release_four}
			]
		},
		{
			path: '/getTask',
			component: getTask,
			children:[
				{path:'/getTask_one',component:getTask_one},
				{path:'/getTask_two',component:getTask_two},
				{path:'/getTask_three',component:getTask_three},
				{path:'/getTask_four',component:getTask_four}
			]
		},


	]
})
