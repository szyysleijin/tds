<!-- 
06 我的
雷锦
 -->
<template>
   <div class='my'>
      <!-- 顶部名称 -->
      <top :topName='topName'></top>
      <!-- 头像，电话姓名 -->
      <div class='header'>
         <img src="./../../assets/images/addimg.png" alt="">
         <div>
            <p>{{obj[0].name}}</p>
            <p>{{obj[0].telephone}}</p>
         </div>
      </div>
      <!-- TV点 任务DOS-->
      <div class='tv'>
         <div @click='goMyTV'>
            <p>TV点</p>
            <p>{{TV.count}}</p>
         </div>

         <div @click='goMyDOS'>
            <p>任务DOS</p>
            <p>{{DOS.count}}</p>
         </div>
      </div>

      <!-- 充值tv点  发布的任务 领取的任务-->
      <div class='getTV'>
         <ul>
            <li>
               <router-link to='/tv'>
                  <img src="./../../assets/images/icon_my_TV.png" alt="">
                  <span>充值TV点</span>
                  <img src="./../../assets/images/enter.png" alt="">
               </router-link>
            </li>
            <li>
               <router-link to='/release'>
                  <img src="./../../assets/images/icon_my_pb.png" alt="">
                  <span>发布的任务</span>
                  <img src="./../../assets/images/enter.png" alt="">
               </router-link>
            </li>
            <li>
               <router-link to='/getTask'>
                  <img src="./../../assets/images/icon_my_rw.png" alt="">
                  <span>领取的任务</span>
                  <img src="./../../assets/images/enter.png" alt="">
               </router-link>
            </li>
         </ul>
      </div>



      <!-- footer -->
      <taskFooter></taskFooter>
   </div>
</template>

<script>
   import top from './TopTemp'
   import taskFooter from './footer'
   export default {
      data() {
         return {
            topName:'我的',
            obj: [
               {
                  name: '李先生',
                  telephone: '13712345678'
               }
            ],
            TV:{
               count:1000,   //余额,
               title:'TV明细',

            },
            DOS:{
               count:1000,   //余额,
               title:'DOS明细'
            }
         }
      },
      components: {
         taskFooter,
         top
      },
      methods:{
         goMyTV(e){
             this.$router.push({path:'/TVdetail',query:{data:JSON.stringify(this.TV)}})
         },
         goMyDOS(){
            this.$router.push({path:'/TVdetail',query:{data:JSON.stringify(this.DOS)}})
         }
      }
   }
</script>

<style>
   .my .getTV li a img {
      width: .48rem;
      height: .48rem;
      vertical-align: middle;
   }

   .my .getTV li a img:last-child {
      width: .1rem;
      height: .16rem;
      float: right;
      margin-top: .45rem;
      margin-right: .42rem
   }

   .my .getTV li {
      vertical-align: middle;
      height: 1rem;
      background: #fff;
      line-height: 1rem;
      padding-left: .32rem;
      border-bottom:.01rem dashed #eee;
   }
   .my .getTV li:last-child{
      border-bottom:0;
   } 
   .my .getTV li span{
      padding-left:.18rem;
      vertical-align: middle;
   }
   .my .getTV li a{
      display: inline-block;
      width:100%;
   }

   .my .tv {
      margin: 0 auto;
      width: 7.02rem;
      height: 1.81rem;
      background: #fff;
      border-radius: .1rem;
      position: relative;
      top: -.5rem;
   }

   .my .tv div {
      height: 1.81rem;
      float: left;
      text-align: center;
      width: 50%;
      padding-top: .4rem;
   }

   .my .tv div p:first-child {
      font-size: .24rem;
      margin-bottom: .18rem;
      color: #999;
   }

   .my .tv div p:last-child {
      color: #333;
      font-size: .36rem;
   }

   .my .header {
      height: 2.3rem;
      background: #33d8da;
      padding-left: .32rem;
      padding-top: .3rem;
   }

   .my .header div {
      margin-top: .15rem;
      margin-left: .31rem;
      float: left
   }

   .my .header div p {
      font-size: .36rem;
      color: #fff;
   }

   .my .header div p:first-child {
      margin-bottom: .1rem;
   }

   .my .header img {
      float: left;
      width: 1.24rem;
      height: 1.24rem;
      border-radius: 2rem;
   }


</style>
