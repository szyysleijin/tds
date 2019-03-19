<template>
    <div class="deposit">
        <Header title="支付押金"/>
        <div class="top">
            <div class="des"><span class="app">APP任务下载注册任务</span><span>150DOS</span></div>
            <div class="surplus"><div class="img"><img src="../assets/images/icon_time.png" alt=""></div><div class="frequency">截至时间：2019-03-10</div><div class="check" @click="checkFn">查看详情<img src="../assets/images/enter_02.png" alt=""></div></div>
        </div>
        <div class="content">
            <div class="col">
                <img class="lft" src="../assets/images/icon_yj.png" alt="">
                <span>收货地址</span>
                <img class="rgt" src="../assets/images/enter.png" alt="">
            </div>
        </div>
        <div class="bot">
            <div class="money">押金：10000</div>
            <div class="bt" @click="pay">支付</div>
        </div>
        <Password v-if="PasswordShow" @PayFlag="payFn"/>
    </div>
</template>

<script>
const Header = () => import('@/components/Header')
const Password = () => import('@/components/Password')
export default {
    data () {
        return {
            PasswordShow: false
        }
    },
    methods: {
        checkFn: function() {
            this.$router.push('/detail')
        },
        payFn: function(data) {
            this.PasswordShow = data
        },
        pay: function() {
            this.PasswordShow = true
        }
    },
    components: {
        Header,
        Password
    },
}
</script>

<style lang="scss" scoped>
.deposit {
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
                flex: auto;  
            }
            .check {
                img {
                    width: 0.15rem;
                    height: auto;
                    margin-left: 0.1rem;
                }
            }
        }
    }
    .content {
        flex: auto;
        .col {
            padding: 0.26rem 0.32rem;
            background: #fff;
            display: flex;
            align-items: center;
            span {
                flex: auto;
                margin-left: 0.18rem;
            }
            .lft {
                width: 0.48rem;
                height: 0.48rem;
            }
            .rgt {
                width: 0.16rem;
                height: 0.3rem;
            }
        }
        
    }
    .bot {
        width: 100%;
        height: 0.8rem;
        display: flex;
        .money {
            width: 4.5rem;
            background: #fff;
            color: #33d8da;
            line-height: 0.8rem;
            text-align: center;
        }
        .bt {
            flex: auto;
            background: #33d8da;
            color: #fff;
            line-height: 0.8rem;
            text-align: center;
        }
    }
}
</style>
