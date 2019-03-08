<template>
    <div class='top'>
        <p @click='hist'></p>
        <span>{{topName}}</span>
    </div> 
</template>

<script>
export default {
    props:['topName'],
    methods:{
        hist(){
            this.$router.go(-1)
         }
    }
}
</script>

<style>
    .top {
      background: #33d8da;
      height: 1.35rem;
      padding-top: .71rem;
      height: 1.35rem;
      font-size: 0.36rem;
      font-weight: normal;
      color: #ffffff;
      text-align:center;
      position: relative;
   }
    .top span {
	 
	  display: inline-block;
	  width:6rem;
      text-align: center;
   }
    .top p {
       left:.37rem;
       position: absolute;
       width:.21rem;
       height:.38rem;
       background:url('./../../assets/images/enter_02.png')no-repeat;
      display: inline-block;
      margin-top:.1rem;
      transform: rotateY(180deg);
   }
</style>


