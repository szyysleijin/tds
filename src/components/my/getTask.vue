<!--  
领取任务
雷锦
 -->
 <template>
    <div class='getTask'>
        <!-- 顶部名称 -->
        <top :topName='topName'></top>
        <!-- 导航 -->
        <TDSnav :list='list'></TDSnav>

        <!-- 任务 list -->

        <ReleMiddle></ReleMiddle>
    </div>

 </template>

 <script>
 import top from './TopTemp'
 import TDSnav from './nav'
 import ReleMiddle from './childrenTemplate/task_children_one'
 export default {
     data(){
         return {
            topName:'领取的任务',
            list: [{
                  name: '全部',
                  path: '/getTask'
               },
               {
                  name: '进行中',
                  path: '/getTask_two'
               },
               {
                  name: '审核中',
                  path: '/getTask_three'
               },
               {
                  name: '已结束',
                  path: '/getTask_four'
               }
            ]   
         }
     },
     components:{
         TDSnav,
         ReleMiddle,
         top
     },
     methods:{
         
         getData(data){

         }
     },
     created(){
         var data = this.$store.state.getTask_data;
       
         this.getData()
     }
 }
 </script>

 <style>

 </style>
 
 