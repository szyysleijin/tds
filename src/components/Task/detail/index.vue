<!--xjy-->
<template>
    <div class="detail">
        <Header title="任务详情"/>
        <div class="top">
            <div class="des"><span class="app">APP任务下载注册任务</span><span>150DOS</span></div>
            <div class="surplus"><div class="img"><img src="../../../assets/images/icon_cs.png" alt=""></div><div class="frequency">剩余次数：50次</div></div>
        </div>
        <div class="p_num">已有 <span>1230</span> 人获得奖励</div>
        <div class="text">
            <div class="tit">【任务内容】</div>
            <p>1、下载XXXAPP，邀请人填写1234，即可完成任务</p>
            <p>2、完成一个任务量，可获得奖励，一个账号只限一次，多次无效</p>
            <p>3、完成任务需要提供注册截图、账号、填写邀请人截图</p>
            <p>4、一周内审核完成</p>
        </div>
        <div class="btn">
            <button class="bt1" @click="btnFn('领取')" v-if="btnFlag">领取任务</button>
            <button class="bt2" @click="btnFn('完成')" v-else>去完成</button>
        </div>
    </div>
</template>

<script>
const Header = () => import('@/components/Header')
export default {
    data() {
        return {
            btnFlag: true,
        }
    },
    created() {
        if (this.bus.Flag == '领取成功') {
            this.btnFlag = false
        }
    },
    components: {
        Header
    },
    methods: {
        btnFn: function(type) {
            if (type == '领取') {
                this.bus.Flag = '领取成功'
                this.$router.push('/result')
            } else if (type == '完成') {
                this.$router.push('/newtask')
            }

            // this.btnFlag = !this.btnFlag
        }
    }
}
</script>

<style lang="scss" scoped>
.detail {
    height: 100%;
    font-size: 0.3rem;
    display: flex;
    flex-direction: column;
    .top {
        background: #33d8da;
        padding: 0.33rem 0.37rem;
        color: #fff;
        .des {
            display: flex;
            font-size: 0.36rem;
            .app {
                flex: auto;
            }
        }
        .surplus {
            display: flex;
            margin-top: 0.24rem;
            .img {
                width: 0.45rem;
                height: 0.45rem;
                margin-right: 0.1rem;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .frequency {

            }
        }
    }
    .p_num {
        color: #33d8da;
        font-size: 0.36rem;
        background: #d9f8f3;
        text-align: center;
        padding: 0.2rem 0;
    }
    .text {
        padding: 0 0.33rem;
        color: #999;
        background: #fff;
        padding-bottom: 1.86rem;
        .tit {
            color: #33d8da;
            padding: 0.3rem 0;
        }
        p {
            line-height: 0.48rem;
            margin: 0;
        }
    }
    .btn {
        flex: auto;
        position: relative;
        button {
            width: 6.86rem;
            height: 0.8rem;
            margin: 0 0.32rem;
            text-align: center;
            position: absolute;
            border: none;
            outline: none;
            color: #fff;
            bottom: 0.3rem;
	        border-radius: 0.05rem;
        }
        .bt1 {
            background-color: #33d8da;
        }
        .bt2 {
            background-color: #41deab;
        }
    }
}
</style>
