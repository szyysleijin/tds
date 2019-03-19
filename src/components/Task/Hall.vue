<!--xjy-->
<template>
    <div class="hall">
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
        <div class="img">
            <img src="../../assets/images/TDS_bg.png" alt="">
        </div>
        <p>开通需支付50DOS，有效期自开通日起一年内有效</p>
        <div class="btn">
          <router-link tag="button" to="/one" style="margin-top: 0.3rem">
            立即体验
          </router-link>
            <!--<button >立即体验</button>-->
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.hall {
    height: 100%;
    background: #fff;
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
    .img {
        width: 100%;
        margin-top: 2rem;
        img {
            width: 100%;
            height: auto;
        }
    }
    p {
        font-size: 0.24rem;
        color: #666;
        text-align: center;
    }
    .btn {
        display: flex;
        button {
            height: 1rem;
            flex: 1;
            margin: 0 0.6rem;
            border-radius: 0.5rem;
            outline: none;
            border: none;
            font-size: 0.48rem;
            color: #fff;
            background: linear-gradient(to right, #34d8d8, #40dead);
        }
    }
}
</style>
