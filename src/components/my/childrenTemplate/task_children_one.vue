<!--  
 任务 组件 （中间部分）
雷锦
 -->
<template>
   <div class='task-children'>
      <div class='ifImg' v-if='is' @click='goMsg'>
         <img src="../../../assets/images/icon_close.png" alt="" @click.stop='isShow'>
         <p>您当前有{{count}}项正在进行中的任务</p>
         <p >赶快戳我去完成任务</p>
      </div>

       <div :class='toggClass' v-for="(item,i) in list" class='list' :key='i'>
         <p>{{item.title}} <span v-if="item.sub" :class="item.sub=='可领取'?'icon-01':item.sub=='被驳回'?'icon-03':'icon-02'">{{item.sub}}</span> <span class='dos'>{{item.dos}}</span></p>
         <p>
            <img src="../../../assets/images/icon_time.png" alt="">
            <span class='time'>{{item.time || data}}</span>
            <router-link v-if="item.sid.slice(0,1)==1" :to='item.status=="申诉"?"/my":"/tvcount"' :class="item.status=='领取'?'status_lq':item.status=='完成'?'status_wc':item.status=='审核中'?'status_sh':'status_ss'">{{item.status}}</router-link>
            <router-link v-if="item.sid.slice(0,1)==2" to='/home' :class="item.status=='审核'?'status_lq':item.status=='进行中'?'status2_wc':item.status=='已结束'?'status2_ss':''">{{item.status}}</router-link>
            <router-link v-if="item.sid.slice(0,1)==3" to='/home' :class="item.status=='待审核'?'status2_wc':item.status=='进行中'?'status2_wc':item.status=='已结束'?'status2_ss':'status_ss'">{{item.status}}</router-link>
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
         toggClass(){
            for(var val of this.list){

            }
         },
         toWhere(e){
            console.log(this.$route)
            return '/tvcount'
         }
      },
      created(){
         //this.list =this.$store.state.release_data;
         this.list =this.$store.state.data;
         this.getData()
         //console.log(1)
      },
      watch:{
         $route(to,from){
            this.getData()
         }
      },
      methods:{
//          to(e){
//              console.log('申述')
//             if(e.currentTarget.innerHTML=='申述'){
//                   console.log('申述')
//                   this.$router.push('/my')
//             }
//          },
      isShow(e){
		  if(e.currentTarget.tagName=='IMG')
			this.is=false
      },
       goMsg(e){
		   
           this.$router.push('/three')
       },
       getData(){
          let arr=[]
          if(this.$route.path=='/two'){
             var data = this.list;
             for(var val of data){
                if(val.sub=='可领取'){
                   arr =arr.concat(val)
                }
             }
          }else if(this.$route.path=='/three'){
             var data = this.list;
             for(var val of data){
                if(val.sub=='进行中'){
                   arr =arr.concat(val)
                }
             }
          }else if(this.$route.path=='/four'){
             var data = this.list;
             for(var val of data){
                if(val.status=='审核中'){
                   arr =arr.concat(val)
                }
             }
          }else if(this.$route.path=='/one'){
             return ;
          }

          //release_data  测试模拟数据
          var release_data = this.$store.state.release_data;
          if(this.$route.path=='/release'){
             for(var val of release_data){
                arr = arr.concat(val)
               
             }
          }else if(this.$route.path=='/release_two'){
              for(var val of release_data){
               if(val.status=='进行中'){
                  arr = arr.concat(val)
               }
              }
          }else if(this.$route.path=='/release_three'){
             for(var val of release_data){
               if(val.status=='审核'){
                  arr = arr.concat(val)
               }
             }
          }else if(this.$route.path=='/release_four'){
             for(var val of release_data){
               if(val.status=='已结束'){
                  arr = arr.concat(val)
               }
             }
          }
          // getTask_data  测试模拟数据
         var getTask_data = this.$store.state.getTask_data;
         if(this.$route.path=='/getTask'){
             for(var val of getTask_data){
                arr = arr.concat(val)
               
             }
          }else if(this.$route.path=='/getTask_two'){
              for(var val of getTask_data){
               if(val.status=='进行中'){
                  arr = arr.concat(val)
               }
              }
          }else if(this.$route.path=='/getTask_three'){
             for(var val of getTask_data){
               if(val.status=='审核'){
                  arr = arr.concat(val)
               }
             }
          }else if(this.$route.path=='/getTask_four'){
             for(var val of getTask_data){
               if(val.status=='已结束'){
                  arr = arr.concat(val)
               }
             }
          }
         this.list=arr;
       },



      },
      props:['count','testData']
   }
</script>

<style>
      .status2_wc,.status2_ss{
         float:right;
         margin-right:.55rem;
         color:#33d8da;
         font-size: .3rem;
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
      background: url('../../../assets/images/icon_02.png') no-repeat;
   }

   .task-children {
      height: 10rem;
      padding-top: .3rem;
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
