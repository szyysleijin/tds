<!--
08 充值TV点
雷锦
-->
<template>
   <div class='TVcount'>

     <Header :title="open==1?'充值TV点':'充值UE点'"/>
      <!-- 任务兑换 -->
      <div class='TVcount-button'>
         <div @click='open1' >
           <span :class='open==1?"cli":""'>任务DOS兑换</span>
         </div>
       <!-- UE的DOS兑换 -->  
         <div @click='open2' > 
            <span :class='open==2?"cli":""'>UE的DOS兑换</span>
         </div>
      </div>

      <!-- 充值组件 -->
      <TVrechargeMd :data='data'></TVrechargeMd>
      <!-- button 底部 -->
      <router-link to='/' class='TVcountFooter'>
         确认兑换
      </router-link>
   </div>
</template>

<script>
  const Header = () => import('@/components/Header')
  import TVrechargeMd from './tv/tv'
export default{
    components:{
      Header,
      TVrechargeMd
    },
   data(){
      return {
         open:1,
         data:{
            title:'任务DOS兑换',
            titleCount:1000,
            sub:'TV点余额',
            subCount:1000,
            DOS:undefined,
            TV:undefined
          }
      }
   },
   methods:{
      open1(){
         this.open=1;
         this.data.title='任务DOS兑换';
         this.data.sub='TV点余额';
      },
      open2(){
         this.open=2;
         this.data.title='UE的DOS余额';
         this.data.sub='UE点余额'  ;
      }
   },
   created(){
      if(this.$route.params.count==undefined)
         this.open=1;
      else{
         this.open = this.$route.params.count
         this.data.title='UE的DOS余额';
         this.data.sub='UE点余额'  ;
      }
   }
}
</script>

<style scoped>
   .TVcountFooter {
      display: inline-block;
      width: 6.86rem;
      height: .81rem;
      line-height: .81rem;
      text-align: center;
      border-radius: 0.05rem;
      background-color: #33d8da;
      font-size: .3rem;
      color: #fff;
      font-weight: normal;
      position: fixed;
      left: .32rem;
      bottom: .30rem;
   }

   .TVcountinfo ul {
      margin-top: .3rem;
   }

   .TVcountinfo ul li {
      background: #fff;
      padding-left: .32rem;
      color: #000;
      font-size: .3rem;
      height: 0.8rem;
      line-height: .8rem;
   }

   .TVcountinfo ul li span {
      float: right;
      padding-right: .3rem;
      color: #33d8da;
   }

   .TVcountinfo ul li .countDOS {
      color: #999;
      font-size: .3rem;
   }

   .TVcount-button .cli {
      border-bottom: 3px solid #fff;
   }
   .TVcount-button div span{
      display: inline-block;
      width:65%;
      height:.7rem;

   }
   .TVcount-button div  {
      width: 2.3rem;
      color: #fff;
      height: .71rem;
      display: inline-block;
   }

   .TVcount-button div {
      float: left;
      width: 49%;
      text-align: center;
   }

   .TVcount-button {
      line-height: .70rem;
      height: .72rem;
      background: #33D8DA;
   }

</style>
