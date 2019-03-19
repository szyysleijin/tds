<template>
	<div>
      <!-- TVcountinfo -->
      <div class='TVcountinfo'>
         <ul>
            <li>{{data.title}} <span class='count'>{{data.titleCount}}</span></li>
            <li>{{data.sub}} <span>{{data.subCount}}</span></li>
         </ul>
      
         <ul>
            <li><span class='DOS'>兑换数量(DOS）</span><input v-model='DOS' @input="handle($event)" maxlength="10" placeholder="大于1" type="text" class='countDOS'></li>
            <li><span class='DOS'>对应TV点</span><input v-model='TV' @input="handle2($event)" maxlength="10" placeholder="大于1" type="text" class='countDOS'></li>
         </ul>
      </div>
   </div>
</template>

<script>
   export default {
      data(){
         return {
            DOS:this.data.DOS,
            TV:this.data.TV
         }
      },
      methods:{
         handle(e){
            this.DOS = e.target.value.replace(/[^\d]/g,'')
         },
         handle2(e){
            this.TV = e.target.value.replace(/[^\d]/g,'')
         }
      },
      props:['data'],
      watch:{

      }
   }
</script>

<style>
    .TVcountinfo ul {
      margin-top: .3rem;
   }
   
   .TVcountinfo ul li {
      background: #fff;
      padding-left: .32rem;
      color: #000;
      font-size: .3rem;
      height: 0.8rem;
      line-height: .8rem;
   }
   
   .TVcountinfo ul li span {
      float: right;
      padding-right: .3rem;
      color: #33d8da;
   }
  .TVcountinfo ul li .DOS{
     width:40%;
     color:#000;
     float:left;
  }
   
   .TVcountinfo ul li .countDOS {
      color: #999;
      font-size: .3rem;
      width:60%;
      height:100%;
      border:0;
      padding-right:.35rem;
      text-align: right;
      outline:none
   }
</style>
