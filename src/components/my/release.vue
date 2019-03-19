<!--
发布任务
雷锦
 -->
 <template>
    <div class='release'>

      <Header title="发布的任务"/>
        <!-- 导航 -->
         <div class='classify'>
            <div>
               <ul>
                  <li @click='isactive($event,i)' :class='n==i?"active":""' v-for='(item,i) in list' :key='i'>
                  <!-- <router-link  :to='item.path'> -->
                     {{item.name}}
                  <!-- <div v-if='item.name==showRed && ($route.path=="/one" || $route.path=="/two" || $route.path=="/three" ||$route.path=="/four")' class='red'></div> -->
                  <!-- </router-link> -->
                  
                  </li>
               </ul>
            </div>
         </div>
        <!-- 任务 list -->

        <task :data='arr'></task>
    </div>

 </template>

 <script>
   const Header = () => import('@/components/Header')
 import task from './task/task'
 export default {
     data(){
         return {
            data:'',
            arr:[],
            topName:'发布的任务',
            n:0,
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
        task,
        Header
     },
     methods:{
        isactive(e,i){
            this.n=i;
            if(e.target.innerHTML.replace(/(^\s*)|(\s*$)/g, "")=='已结束'){
               for(let val of this.data){
                  if(val.status=='已结束'){
                     this.arr=[];
                     this.arr=this.arr.concat(val);
                  }
               }
            }else if(e.target.innerHTML.replace(/(^\s*)|(\s*$)/g, "")=='进行中'){
               for(let val of this.data){
                  if(val.status=='进行中'){
                     this.arr=[];
                     this.arr=this.arr.concat(val);
                  }
               }
            }else if(e.target.innerHTML.replace(/(^\s*)|(\s*$)/g, "")=='待审核'){
               for(let val of this.data){
                  if(val.status=='审核'){
                     this.arr=[];
                     this.arr=this.arr.concat(val);
                  }
               }
            }else{
               for(let val of this.data){
                  this.arr=this.$store.state.release_data;
               }
            }
        }
     },
     created(){
        this.data = this.$store.state.release_data;
        this.arr = this.$store.state.release_data;
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

