<!-- 
TDS任务系统 进行中 组件
雷锦
-->
<template>
   <div class='release'>
      <!--import task_children_one from './task_children_one'  -->
      <task_children_one></task_children_one>
      <tdsfooter></tdsfooter>          
   </div>
</template>

<script>

   import tdsfooter from './../footer'
   import taskNav from './../nav'
   import task_children_one from './task_children_one'
   export default {
      data() {
         return {

         }
      },
      components: {
         taskNav,
         task_children_one,
         tdsfooter
      },
      methods:{
         hist(){
            this.$router.go(-1);
            //history.go(-1)
         }
      }
   }
</script>

<style>
   .release .top {
      background: #33d8da;
      height: 1.35rem;
      text-align: center;
      padding-top: .74rem;
      height: 1.35rem;
      font-size: 0.36rem;
      font-weight: normal;
      color: #ffffff;
   }

   .release .top span {
      text-align: center;
      display: inline-block;

   }

   .release .top img {
      position: relative;
      left: -2.37rem;
      transform: rotateY(180deg);
   }


</style>
