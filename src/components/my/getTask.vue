<!--
领取任务
雷锦
 -->
 <template>
    <div class='getTask'>
      <!-- title -->
      <Header title="领取的任务"/>
        <!-- 导航 -->
          <div class='classify'>
            <div>
               <ul>
                  <li @click='isactive($event,i)' :class='n==i?"active":""' v-for='(item,i) in list' :key='i'>
                     {{item.name}}
                  </li>
               </ul>
            </div>
         </div>

        <!-- 任务 list 组件-->
        <task :data='arr'></task>
    </div>

 </template>

 <script>
   const Header = () => import('@/components/Header')
 import task from './task/task'
 export default {
     data(){
         return {
            arr:[],
            n:0,
            data:'',
            topName:'领取的任务',
            list: [{
                  name: '全部'
               },
               {
                  name: '进行中'
               },
               {
                  name: '审核中'
               },
               {
                  name: '已结束'
               }
            ]   
         }
     },
     components:{
      task,
      Header
     },
     methods:{
       isactive(e,i){ 
            this.n=i;
            if(e.target.innerHTML.replace(/(^\s*)|(\s*$)/g, "")=='已结束'){
               for(let val of this.data){
                  if(val.status=='已结束'){
                     this.arr=[]
                     this.arr=this.arr.concat(val)
                  }
               }
            }else if(e.target.innerHTML.replace(/(^\s*)|(\s*$)/g, "")=='进行中'){
               for(let val of this.data){
                  if(val.status=='进行中'){
                     this.arr=[]
                     this.arr=this.arr.concat(val)
                  }
               }
            }else if(e.target.innerHTML.replace(/(^\s*)|(\s*$)/g, "")=='审核中'){
               for(let val of this.data){
                  if(val.status=='审核'){
                     this.arr=[]
                     this.arr=this.arr.concat(val)
                  }else{        //无数据返回空数组
                     this.arr=[]
                  }
               }
            }else{
               for(let val of this.data){
                  this.arr=this.$store.state.getTask_data
               }
            }
         },
     },
     created(){
        this.data = this.$store.state.getTask_data;
        this.arr = this.$store.state.getTask_data;
     }
 }
 </script>

 <style scoped lang='scss'>
 .active{
      border-bottom:3px solid #fff;
    }
    .classify {
     .red{
        width:.2rem;
        height:.2rem;
        background:#ff0000;
        border-radius:.3rem;
        position:absolute;
        right:2.1rem;
        top	:0.1rem;
     }
      background: #33D8DA;
      margin-bottom:.3rem;
      div {
        position:relative;
        height: .72rem;
        line-height: .72rem;
        width: 7rem;
        margin: 0 auto;
      }
      li{
        float: left;
        width: 25%;
        text-align: center;
        font-size: .3rem;
        color: #fff;
        position:relative;  
      }
   }
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

