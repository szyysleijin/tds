<!--
01人物大厅
雷锦
 -->
<template>
  <div class='task'>
    <div class="header">
      <div class="title">TDS任务系统</div>
      <div class="icon">
        <div class="ico lt">
          <img src="../../assets/images/more.png" alt="">
        </div>
        <div class="ico">
          <img src="../../assets/images/close.png" alt="">
        </div>
      </div>
    </div>
     <!-- nav -->
    <div class='classify'>
      <div>
          <ul>
            <li :class='n==i?"active":""' v-for='(item,i) in list' :key='i' @click='isactive($event,i)'>{{item.name}}</li>
            <div v-if="jxCount" class='red'></div>
          </ul>
      </div>
    </div>
    <!-- 您当前有X项正在进行中的任务   点到进行中自动消失-->
    <div class='ifImg' v-if='count' @click='goMsg($event)'>
        <img src="../../assets/images/icon_close.png" alt="" @click.stop='isShow'>
        <p>您当前有{{count}}项正在进行中的任务</p>
        <p >赶快戳我去完成任务</p>
    </div>
    <!-- 子组件 -->
    <task :data='arr'></task>
    <!-- footer -->
    <taskFooter></taskFooter>
  </div>
</template>

<script>
  const Header = () => import('@/components/Header');
  import taskFooter from './footer'
  import task from './task/task.vue'

  export default {
    data() {
      return {
        //showRed:0,     //导航进行中的小红点
        arr:[],        //传给子组件的数据
        n:0,           //添加class 样式，默认第一个
        data:'',
        count: 0,      //几项进行中的任务 ，控制显示隐藏
        jxCount:false,
        ygCount:0,
        list: [{       // nav文字
              name: '全部',
            },
            {
              name: '可领取',
            },
            {
              name: '进行中',
            },
            {
              name: '审核中',
            }
        ]
      }
    },
    components: {
      taskFooter,
      task,
      Header
    },
    created() {
      this.arr=this.$store.state.data
      this.data=this.$store.state.data
      for(let val of this.data){
        if(val.sub=='进行中'){
            this.count++;
            this.jxCount=true
        }
      }
    },
    methods:{
      goMsg(e){
        this.n=2;
        this.count=false;
        for(let val of this.data){
          if(val.sub=='进行中'){
              this.arr=[]
              this.arr=this.arr.concat(val)
          }
        }
      },
      isShow(){
        this.count=false;
      },
      isactive(e,i){
        this.n=i
        // 如果点击元素HTML为
        if(e.target.innerHTML.replace(/(^\s*)|(\s*$)/g, "")=='可领取'){
               for(let val of this.data){
                  if(val.sub=='可领取'){
                     this.arr=[]
                     this.arr=this.arr.concat(val)
                  }
               }
            }else if(e.target.innerHTML.replace(/(^\s*)|(\s*$)/g, "")=='进行中'){
               for(let val of this.data){
                  if(val.sub=='进行中'){
                     this.arr=[]
                     this.arr=this.arr.concat(val)
                     this.count=false;
                     this.jxCount=false;
                  }
               }
            }else if(e.target.innerHTML.replace(/(^\s*)|(\s*$)/g, "")=='审核中'){
               for(let val of this.data){
                  if(val.status=='审核中'){
                     this.arr=[]
                     this.arr=this.arr.concat(val)
                  }
               }
            }else{
               for(let val of this.data){
                  this.arr=this.$store.state.data
               }
            }
      }
    }
  }
</script>

<style scoped lang="scss">
	.task{
		padding-bottom:3rem;
	}
   .active,.router-link-active{
      border-bottom:3px solid #fff;
   }
 .ifImg {
      background: url('../../assets/images/tip_bg.png') no-repeat;
      background-size: 100% 100%;
      height: 1.66rem;
      padding-left: .4rem;
      position: relative;
      width: 7.23rem;
      margin: 0 auto;
      z-index: 1;
      p{
        margin-top: .25rem;
        width: 5rem;
        height: 0.29rem;
        font-size: 0.3rem;
        color: #ffffff;
      }
      p:last-child{
        vertical-align: middle;
        width: 3.15rem;
        height: 0.23rem;
        font-size: 0.24rem;
      }
      img{
        position: absolute;
        width: .8rem;
        width: .8rem;
        right: 0.1rem;
        top: .01rem;
        z-index: 111;
      }
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
  .header {
    background: #33d7d9;
    position: relative;
    .title {
      padding: 0.24rem;
      font-size: 0.36rem;
      color: #fff;
    }
    .icon {
      width: 1.8rem;
      background: rgba($color: #000000, $alpha: 0.3);
      border-radius: 0.35rem;
      display: flex;
      align-items: center;
      position: absolute;
      right: 0.24rem;
      top: 50%;
      transform: translateY(-50%);
      z-index: 2;
      .ico {
        flex: auto;
        display: flex;
        padding: 0.1rem 0;
        justify-content: center;
        align-items: center;
        img {
          width: 0.4rem;
          height: auto;
        }
      }
      .lt {
        border-right: 1px solid #fff;
      }
    }
  }
</style>
