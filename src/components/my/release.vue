<!--  
发布任务
雷锦
 -->
 <template>
    <div class='release'>
        <!-- 顶部名称 -->
        <Top :topName='topName'></Top>
        <!-- 导航 -->
        <TDSnav :list='list'></TDSnav>

        <!-- 任务 list -->

        <ReleMiddle></ReleMiddle>
    </div>

 </template>

 <script>
 import Top from './TopTemp'
 import TDSnav from './nav'
 import ReleMiddle from './childrenTemplate/task_children_one'
 export default {
     data(){
         return {
            topName:'发布的任务',
            list: [{
                  name: '全部',
                  path: '/release'
               },
               {
                  name: '进行中',
                  path: '/release_two'
               },
               {
                  name: '待审核',
                  path: '/release_three'
               },
               {
                  name: '已结束',
                  path: '/release_four'
               }
            ]   
         }
     },
     components:{
         TDSnav,
         ReleMiddle,
        Top
     },
     methods:{

         getData(data){

         }
     },
     created(){
         var data = this.$store.state.release_data;
       
         this.getData()
     }
 }
 </script>

 <style>


 </style>
 
 