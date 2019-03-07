<!-- 
导航 组件 
雷锦
-->
<template>
   <div class='classify'>
      <div>
         <ul>
            <li v-for='(item,i) in list' :key='i'>
               <router-link  :to='item.path'>
				{{item.name}}
				<div v-if='item.name==showRed && ($route.path=="/one" || $route.path=="/two" || $route.path=="/three" ||$route.path=="/four")' class='red'></div>
			   </router-link>
			   
            </li>
         </ul>
      </div>
   </div>
</template>

<script>
   export default {
      data() {
         return {
            n:0,  //默认激活第一个 active
            
         }
      },
      methods:{
      },
      props:['list'],
      created(){
         
      },
	  computed:{
		  showRed(){
			  for(var val of this.list){
				  if(val.name=='进行中'){
					  return '进行中'
				  }
			  }
		  }
	  }
   }
</script>

<style>
	.classify .red{
		width:.2rem;
		height:.2rem;
		background:#ff0000;
		border-radius:.3rem;
		position:absolute;
		right:.3rem;
		top	:0.1rem;}
   .active,.router-link-active{
      border-bottom:3px solid #fff;
   }
   .classify {
      background: #33D8DA;
   }

   .classify div {
      height: .72rem;
      line-height: .72rem;
      width: 7rem;
      margin: 0 auto;
   }

   .classify li a {
      float: left;
      width: 25%;
      text-align: center;
      font-size: .3rem;
      color: #fff;
	  position:relative;  
   }
</style>
