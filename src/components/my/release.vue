<!--  
发布任务
雷锦
 -->
 <template>
    <div class='release'>
        <div class='top'>
            
            <p @click='hist'></p>
            <span>发布的任务</span>
        </div> 
        <!-- 导航 -->
        <TDSnav :list='list'></TDSnav>

        <!-- 任务 list -->

        <ReleMiddle></ReleMiddle>
    </div>

 </template>

 <script>
 import TDSnav from './nav'
 import ReleMiddle from './childrenTemplate/task_children_one'
 export default {
     data(){
         return {
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
         ReleMiddle
     },
     methods:{
         hist(){
             this.$router.go(-1)
         },
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
   .release .top {
       background: #33d8da;
      height: 1.35rem;
      padding-top: .74rem;
      height: 1.35rem;
      font-size: 0.36rem;
      font-weight: normal;
      color: #ffffff;
   }
   .release .top span {
	  padding-right:.5rem;
	  display: inline-block;
	  width:6rem;
      text-align: center;
   }


   .release .top p {
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
 
 