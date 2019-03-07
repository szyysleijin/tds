<!-- 
08 充值TV点 
雷锦
-->
<template>
   <div class='TVcount'>
      <div class='top'>
         <p @click='hist'></p>  
         <span>充值TV点</span>
      </div>
      <!-- 任务DOS兑换 -->
      <div class='TVcount-button'>
         <div>
            <router-link  to='/tvcount' >任务DOS兑换</router-link>
         </div>
       <!-- UE的DOS兑换 -->  
         <div>
            <router-link class='right'  to='/tvcountue' >UE的DOS兑换</router-link>
         </div>
      </div>
      
         <TVrechargeMd :data='data'></TVrechargeMd>
      <!-- button 底部 -->
      <router-link to='/' class='TVcountFooter'>
         确认兑换
      </router-link>
   </div>
</template>

<script>
   import TVrechargeMd from './TVrechargeMd/TVrechargeMd'
export default{
   data(){
      return {
        data:{
            title:'UE的DOS余额',
            titleCount:1000,
            sub:'TV点余额',
            subCount:1000,
            DOS:undefined,
            TV:undefined
         }
      }
   },
   methods:{
      hist(){
         this.$router.go(-1)
      }
   },
   components:{
      TVrechargeMd
   }
}
</script>

<style>
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

  

   .TVcount-button .right {
      border-bottom: 3px solid #fff;
   }

   .TVcount-button div a {
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

   .TVcount .top {
       background: #33d8da;
      height: 1.35rem;
      padding-top: .74rem;
      height: 1.35rem;
      font-size: 0.36rem;
      font-weight: normal;
      color: #ffffff;
   }
   .TVcount .top span {
       width:6rem;
      text-align: center;
      display: inline-block;
   }

   .TVcount .top p {
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
