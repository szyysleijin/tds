<template>
  <div id="result">
    <Header title="操作成功"/>
    <div class="content" v-if="Flag == '领取成功'">
      <img src="../assets/images/img_success02.png" alt="">
      <div>领取成功</div>
      <span>快去完成任务吧</span>
      <button @click="checkFn('领取')">查看任务</button>
    </div>
    <div class="content" v-if="Flag == '申诉成功'">
      <img src="../assets/images/img_success02.png" alt="">
      <div>申诉成功</div>
      <span>工作人员将尽快为你审核</span>
      <button @click="checkFn('发布')">返回大厅</button>
    </div>
    <div class="content" v-else-if="Flag == '提交成功'">
      <img src="../assets/images/img_success02.png" alt="">
      <div>提交成功，等待审核</div>
      <button @click="checkFn('提交')">查看任务</button>
    </div>
    <div class="content" v-else-if="Flag == '发布成功'">
      <img src="../assets/images/img_success01.png" alt="">
      <div>发布成功</div>
      <button @click="checkFn('发布')">返回大厅</button>
    </div>
  </div>
</template>

<script>
const Header = () => import('@/components/Header')
export default {
    name: "hint",
    data() {
      return {
        Flag: '发布成功'
      }
    },
    created() {
        if (this.bus.Flag) {
          this.Flag = this.bus.Flag
        }
    },
    methods: {
      checkFn: function(type) {
        if (type == '领取') {
          this.$router.push('/detail')
        } else if (type == '提交') {
          this.$router.push('/status')
        } else if (type == '发布') {
          this.$router.push()     // 返回大厅
        }
      }
    },
    components: {
      Header
    }
}
</script>

<style lang="scss" scoped>
#result {
  height: 100%;
  display: flex;
  flex-direction: column;
  .content {
    flex: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    img {
      width: 3.04rem;
      height: auto;
    }
    div {
      color: #000;
    }
    span {
      font-size: 0.24rem;
      color: #999;
    }
    button {
      width: 1.78rem;
	    height: 0.6rem;
      background-color: #33d8da;
	    border-radius: 0.3rem;
      border: none;
      outline: none;
      color: #fff;
      margin-top: 0.3rem;
    }
  }
}
</style>

