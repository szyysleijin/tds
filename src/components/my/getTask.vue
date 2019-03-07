<!--  
领取任务
雷锦
 -->
 <template>
    <div class='getTask'>
        <div class='top'>
            <p @click='hist'></p>
            <span>领取的任务</span>
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
         var data = this.$store.state.getTask_data;
       
         this.getData()
     }
 }
 </script>

 <style>
   .getTask .top {
       background: #33d8da;
      height: 1.35rem;
      padding-top: .74rem;
      height: 1.35rem;
      font-size: 0.36rem;
      font-weight: normal;
      color: #ffffff;
      
   }
   .getTask .top span {
	  padding-left:.5rem;
	  display: inline-block;
	  width:6rem;
      text-align: center;
   }

   .getTask .top p {
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
 
 