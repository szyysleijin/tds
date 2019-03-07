<!--  
01人物大厅
雷锦
 -->

<template>
   <div class='task'>
      <!-- top -->
      <div class='title'>
         <h5>TDS任务系统 </h5>
         <!--  右侧图片 -->
         <div><span></span>|<span></span></div>
      </div>
      <!-- nav -->
      <taskNav :list='list'></taskNav>
      <!-- 子路由 -->
      <router-view />

      <taskFooter></taskFooter>
   </div>
</template>

<script>
   import taskFooter from './footer'
   import taskNav from './nav'
   export default {
      data() {
         return {
            count: 1,
            list: [{
                  name: '全部',
                  path: '/one'
               },
               {
                  name: '可领取',
                  path: '/two'
               },
               {
                  name: '进行中',
                  path: '/three'
               },
               {
                  name: '审核中',
                  path: '/four'
               }
            ]
         }
      },
      components: {
         taskFooter,
         taskNav
      },
      created(){
        
      }
   }
</script>

<style>
   .title {
      background: #33D8DA;
      height: 1.35rem;
   }
   .title h5 {
      float:left;
      padding-top:.74rem;
      height: 1.35rem;
      color: #fff;
      padding-left: .23rem;
      font-weight:normal;
      font-size: .36rem;
   }
   .title div{
      margin-right:.24rem;
      margin-top:.57rem;
      width:1.83rem;
      height:.67rem;
      border-radius:2rem;
      background:rgba(33,33,33,.3);
      float:right;
      line-height: .67rem;
      color:#fff;
      position: relative;
      text-align: center;
   }
   .title div span:first-child{
       vertical-align: middle;
      display: inline-block;
      width:.85rem;
      height:.67rem;
      background: url('./../../assets/images/more.png') no-repeat .28rem .23rem;
      background-size: 50% 25%;
   }
   .title div span:last-child{
      vertical-align: middle;
      display: inline-block;
      width:.85rem;
      height:.67rem;
      background: url('./../../assets/images/end.png') no-repeat .2rem .13rem;
      background-size: 40% 50%;
   }
</style>
