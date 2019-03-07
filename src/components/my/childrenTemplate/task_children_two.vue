<!-- 
任务大厅02
雷锦
 -->
<template>
   <div>
      <task_children_one :count='count'></task_children_one>
   </div>
</template>

<script>
   import task_children_one from './task_children_one'
   export default {
      data() {
         return {
            count: 1
         }
      },
      components: {
         task_children_one
      }

   }
</script>

<style>
</style>
