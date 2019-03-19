<!--
footer 组件
雷锦
-->
<template>
   <!-- 底部 -->
   <div class='footer'>
      <div>
         <router-link to='/' class='hall' >
            <!-- icon_normal_dt-1.png    icon_active_dt.png -->
            <span :class="isActive==='/dos'?'icon2':'icon1'" ></span>
            <br>
            <span :class="isActive==='/dos'?'iconFont':''">大厅</span>
         </router-link>
         <router-link to='/taskAdd'>
            <!-- icon_pb.png -->
            <img class='icon-pb' src='../../assets/images/icon_pb.png' alt="">
         </router-link>
         <router-link to='/my' class='my'>
            <!-- icon_normal_dt.png    icon_active_my.png-->
            <span :class="$route.path=='/my'?'icon4':'icon3'" ></span>
            <br>
            <span :class="$route.path=='/my'?'iconFont':''">我</span>
         </router-link>
      </div>
   </div>
</template>

<script>
   export default {
      data(){
         return {
            isActive:''
         }
      },
      mounted(){
         this.isActive = this.$route.path;
      },
      methods:{

      },
      computed:{
         i(){
            if(this.isActive=='/one')  return './../../assets/images/icon_active_dt.png'
            else return '../../assets/images/icon_normal_dt-1.png'
         }
      }

   }
</script>

<style scoped>
   .icon4{
      background:url('./../../assets/images/icon_active_my.png') no-repeat;
      display: inline-block;
      width:.44rem;
      height:.44rem;
      background-size: 100% 100%;
   }
   .icon3{
      background:url('./../../assets/images/icon_normal_dt.png') no-repeat;
      display: inline-block;
      width:.44rem;
      height:.44rem;
      background-size: 100% 100%;
   }
   .icon2{
      background:url('./../../assets/images/icon_active_dt.png') no-repeat;
      display: inline-block;
      width:.44rem;
      height:.44rem;
      background-size: 100% 100%;
   }
   .icon1{
      background:url('./../../assets/images/icon_normal_dt-1.png') no-repeat;
      display: inline-block;
      width:.44rem;
      height:.44rem;
      background-size: 100% 100%;
   }
   .iconFont{
      color:#33d8da;
   }
   .footer {
      width: 100%;
      height: .98rem;
      background: #fff;
      position: fixed;
      bottom: 0;
   }

   .footer div a img {
      width: .43rem;
      height: .48rem;
      display: inline-block;
   }

   .footer div a {
      margin-top: .08rem;
      display: inline-block;
      width: 32%;
      text-align: center;
      font-size: .24rem;
      background: #fff;
   }

   .footer div .hall {
      padding-left: 1rem;
   }

   .footer div .my {
      padding-right: .5rem;
   }

   .footer div a .icon-pb {
      left: 3rem;
      position: fixed;
      bottom: 0;
      display: inline;
      width: 1.51rem;
      height: 1.58rem;
   }

   .footer div a .iconFont {
      margin-right: .05rem;
   }
</style>
