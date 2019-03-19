<template>
    <div class="header">
        <div class="back" @click="backFn"><img src="../assets/images/back.png" alt=""></div>
        <div class="title">{{ title }}</div>
        <div class="icon">
            <div class="ico lt">
                <img src="../assets/images/more.png" alt="">
            </div>
            <div class="ico">
                <img src="../assets/images/close.png" alt="">
            </div>
        </div>    
    </div>
</template>

<script>
export default {
    props: ['title'],
    methods: {
        backFn: function() {
            this.$router.back(-1)
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
    padding: 0.3rem 0;
    font-size: 0.36rem;
    color: #fff;
    background: #33d8da;
    position: relative;
    .back {
        position: absolute;
        left: 0.3rem;
        img {
            width: 0.46rem;
            height: auto;
        }
    }
    .title {
        text-align: center;
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
