<!-- 
TDS任务系统 审核中组件
雷锦
-->
<template>
   <div class='receive'>
 
      <task_children_one></task_children_one>

      <!-- footer 组件 -->
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
            this.$router.go(-1)
         }
      }
   }
</script>

<style>
 
</style>
