<!--  
 任务 组件 （中间部分）
雷锦
 -->
<template>
   <div class='task-children'>
       <div  v-for="(item,i) in data" class='list' :key='i'>
         <p>
            {{item.title}} 
            
            <!-- 小图标 可领取 被驳回 进行中-->
            <span v-if="item.sub" :class="item.sub=='可领取'?'icon-01':item.sub=='被驳回'?'icon-03':'icon-02'">{{item.sub}}</span> 

            <span class='dos'>{{item.dos}}</span>
         </p>
         <p>
            <img src="../../../assets/images/icon_time.png" alt="">

            <span class='time'>{{item.time || data}}</span>

            <!-- TDS任务系统路由 跳转按钮 -->
            <router-link
               v-if="item.sid.slice(0,1)==1" 
               :to='item.status=="领取"?"/detail":item.status=="完成"?"/NewTask":item.status=="审核中"?"/status":"/result" '
               :class="item.status=='领取'?'status_lq':item.status=='完成'?'status_wc':item.status=='审核中'?'status_sh':'status_ss'">
                  {{item.status}}
            </router-link>
            <!-- 发布任务路由 跳转按钮 -->
            <router-link
               v-if="item.sid.slice(0,1)==2"
               :to="item.status=='审核'?'/verify':item.status=='进行中'?'':item.status=='已结束'?'':''"
               :class="item.status=='审核'?'status_lq':item.status=='进行中'?'status2_wc':item.status=='已结束'?'status2_ss':''">
                  {{item.status}}
            </router-link>
            <!-- 领取任务路由 跳转按钮 -->
            <router-link 
               v-if="item.sid.slice(0,1)==3" to='/detail' 
               :class="item.status=='待审核'?'status2_wc':item.status=='进行中'?'status2_wc':item.status=='已结束'?'status2_ss':'status_ss'">
                  {{item.status}}
            </router-link>
         </p>
      </div> 
   </div>
</template>

<script>
   export default {
      data() {
         return {
            list:'',
            is:this.count,
         }
      },
      computed:{
         toWhere(e){
            console.log(this.$route)
            return '/tvcount'
         }
      },
      created(){
      },
      watch:{
         $route(to,from){
            this.getData()
         }
      },
      methods:{
         
      },
      props:['count','testData','data']
   }
</script>

<style scoped>
      .status2_wc,.status2_ss{
         float:right;
         margin-right:.55rem;
         color:#33d8da;
         font-size: .3rem;
         border-radius: 0 5px;
      }
      .status2_ss{
         color:#999;
      }
      .task-children .list .status_lq,.status_wc,.status_ss{
         border-radius: 2rem;
         width: 1.4rem;
         height: .7rem;
         float: right;
         font-size: .3rem;
         color: #fff;
         margin-top: -.13rem;
         line-height: .7rem;
         margin-right: .3rem;
         text-align: center;
      }
     .task-children .list .status_lq {      /*领取*/
         background: #33D8DA
      }
      .status_wc{/*  完成 */
         background: #41DEAB
      }
      .status_sh{/* 审核中 #33d8da */
         color:#33d8da;
         font-size: .3rem;
         float: right;
         padding-right:.48rem;
      }
      .status_ss{    /* FF6C5F 申述 */
         background: #FF6C5F
      }


  .task-children .icon-01,.task-children .icon-02 ,.task-children .icon-03 {
      display: inline-block;
      width: 0.97rem;
      height: 0.32rem;
      background-size: 100% 100%;
      font-size: .24rem;
      text-align: center;
      color: #fff;
      margin-left: .18rem;

   }
   .icon-03{
      background: url('../../../assets/images/icon_01.png') no-repeat;
	  background:#FF6C5F;
	  border-radius:0 .2rem 0 .2rem;
   }
   .icon-01 {
      background: url('../../../assets/images/icon_01.png') no-repeat;
   }

   .icon-02 {
      padding: 0.02rem 0.1rem;
     font-size: 0.24rem;
     color: #fff;
     border-radius: 0 10px;
      background: url('../../../assets/images/icon_02.png') no-repeat;
   }

   .task-children {
      height: 10rem;
      background: #f0f0f0;
   }

   .ifImg {
      background: url('../../../assets/images/tip_bg.png') no-repeat;
      background-size: 100% 100%;
      height: 1.66rem;
      padding-left: .4rem;
      position: relative;
      width: 7.23rem;
      margin: 0 auto;
      z-index: 1
   }

   .ifImg p {
      margin-top: .25rem;
      width: 5rem;
      height: 0.29rem;
      font-size: 0.3rem;
      color: #ffffff;
   }

   .ifImg p:last-child {
      vertical-align: middle;
      width: 3.15rem;
      height: 0.23rem;
      font-size: 0.24rem;

   }

   .ifImg img {
      position: absolute;
      width: .8rem;
      width: .8rem;
      right: 0.1rem;
      top: .01rem;
      z-index: 111;
   }

   .task-children .list {
      margin: 0 auto;
      width: 7.02rem;
      height: 1.85rem;
      background: #ffffff;
      margin-bottom: .3rem;
   }

   .task-children .list p:nth-child(1) {
      border-bottom: 0.01rem dashed #ddd;
   }

   .task-children .list p:nth-child(1),
   .task-children .list p:nth-child(2) {
      padding-left: .3rem;
      height: .92rem;
      padding-top: .25rem;
   }

   .task-children .list p:nth-child(2) img {
      vertical-align: middle;
      width: .44rem;
      height: .44rem;
   }

   .dos {
      padding-right: .36rem;
      float: right;
   }

   .time {
      font-size: .24rem;
      color: #999
   }


</style>
