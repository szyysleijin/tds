<!--
07 明细
雷锦
 -->
<template>
   <div class='TVdetail'>

     <Header :title="data.title"/>
      <!-- 余额 -->
      <div class='sum'>
         <span>余额</span>
         <p>{{data.count}}</p>
      </div>
      <!-- 提示 -->
      <div class='hint'>
         温馨提示：仅显示近30天内的历史数据
      </div>
      <!-- 充值 -->
      <div class='TVinfo'>
         <ul>
            <li v-for='(item,i) of details' :key="i">
               <router-link to='/'>
                  <span>{{item.title}}</span>
                  <p>{{item.time}} <span>{{item.timeHMS}}</span></p>
                  <div :class="item.title=='充值'?'green':'black'">
                     <span v-if='item.title=="充值"'>+</span>{{item.count}}
                  </div>
               </router-link>
            </li>
         </ul>
      </div>

      <!-- TV明细 底部 -->
      <div class='tvfooter'>
         <router-link class='left' to='/tvcount'>任务DOS兑换TV点</router-link><router-link :to="{name:'tvcount',params:{count}}"  class='right' >UE的DOS兑换</router-link>
      </div>
   </div>
</template>

<script>
  const Header = () => import('@/components/Header')
   export default {
     components:{
       Header
     },
      data(){
         return {
            count:2, //点击UE充值
            title:'',
            data:{},
            details:[
               {title:'充值',time:'2018-11-07',timeHMS:'15:27:40',count:1000},
               {title:'发布任务',time:'2018-11-07',timeHMS:'15:27:40',count:1000},
               {title:'发布任务',time:'2018-11-07',timeHMS:'15:27:40',count:1000},
               {title:'充值',time:'2018-11-07',timeHMS:'15:27:40',count:1000},
               {title:'发布任务',time:'2018-11-07',timeHMS:'15:27:40',count:1000},
               {title:'充值',time:'2018-11-07',timeHMS:'15:27:40',count:1000},
               {title:'发布任务',time:'2018-11-07',timeHMS:'15:27:40',count:1000},
               {title:'充值',time:'2018-11-07',timeHMS:'15:27:40',count:1000},
               {title:'发布任务',time:'2018-11-07',timeHMS:'15:27:40',count:1000}
            ]
         }
      },
      methods:{
 
      },
      created(){
      //   console.log(JSON.parse(this.$route.query.data))
         this.data=JSON.parse(this.$route.query.data);
      }
   }
</script>

<style scoped>
   .TVinfo ul li a div.green{
      color: #33d8da;
   }
   .TVinfo ul li a div.black{
      color:#000;
   }
   .tvfooter .left {
      background: #fff;
      color: #33d8da;
      font-size: .3rem;
   }

   .tvfooter .right {
      font-size: .3rem;
      color: #fff;
      background: #33d8da;
   }

   .tvfooter {
      position: fixed;
      height: .8rem;
      line-height: .8rem;
      width: 100%;
      bottom: 0;
   }

   .tvfooter a {
      display: inline-block;
      width: 3.7rem;
      text-align: center;
   }

   .TVinfo ul li a div {
      position: absolute;
      right: .44rem;
      top: .44rem;
      color: #33d8da;
      font-size: .36rem;
   }

   .TVinfo ul li a p {
      color: #999;
      padding-top: .16rem;
      font-size: .24rem;
   }

   .TVinfo ul li a>span {
      margin-top: .5rem;
      color: #000;
      font-size: .3rem;
   }

   .TVinfo ul li {
      position: relative;
      padding-top: .16rem;
      height: 1.2rem;
      padding-left: .42rem;
      background: #fff;
   }

   .TVdetail .hint {
      padding-left: .42rem;
      line-height: .6rem;
      height: .6rem;
      background-color: #d9f8f3;
      color: #33d8da;
      font-size: .24rem;
   }

   .TVdetail .sum {
      height: 2.3rem;
      background: url('./../../assets/images/my_bg.png') no-repeat;
      background-size: 100% 100%;
      text-align: center;
   }

   .TVdetail .sum p {
      font-size: .6rem;
      color: #fff;
      margin-top: .3rem;
   }

   .TVdetail .sum span {
      margin-top: .5rem;
      display: inline-block;
      color: #fff;
      font-size: .24rem;
   }
   .TVdetail .top {
       background: #33d8da;
      height: 1.35rem;
      padding-top: .74rem;
      height: 1.35rem;
      font-size: 0.36rem;
      font-weight: normal;
      color: #ffffff;
   }
   .TVdetail .top span {
       width:6rem;
      text-align: center;
      display: inline-block;
   }

   .TVdetail .top p {
       float:left;
       margin-top:.1rem;
       width:.21rem;
       height:.38rem;
       background:url('./../../assets/images/enter_02.png')no-repeat;
      display: inline-block;
      margin-left:.37rem;
      transform: rotateY(180deg);
   }
</style>
