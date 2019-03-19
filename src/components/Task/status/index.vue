<!--xjy-->
<template>
    <div class="status">
        <Header title="完成任务"/>
        <div class="top">
            <div class="des"><span class="app">APP任务下载注册任务</span><span>150DOS</span></div>
            <div class="surplus"><div class="img"></div><div class="frequency">剩余次数：50次</div><div class="check" @click="checkFn">查看详情<img src="../../../assets/images/enter_02.png" alt=""></div></div>
        </div>
        <div class="remark">
            <!-- <textarea name="" id="" cols="30" rows="10" placeholder="根据任务说明输入手机号等注释"></textarea> -->
            <p>{{ remark ||  "根据任务说明输入手机号等注释" }}</p>
        </div>
        <div class="upload">
            <div class="txt">根据任务说明提交页面截图</div>
            <div class="ImgBox">
                <div id="showImg"></div>
                <div class="uploadImg"><img :src="img" alt=""></div>
            </div>
        </div>
        <div class="nopass" v-if="statusFlag=='nopass'">
            <div class="tit">不通过理由</div>
            <div class="reason">这里是不通过的理由这里是不通过的理由这里是不通过的理由这里是不通过的理由这里是不通过的理由这里是不通过的理由</div>
        </div>
        <div class="btn">
            <button class="bt1" v-if="statusFlag=='verifying'">审核中</button>
            <button class="bt2" v-else-if="statusFlag=='nopass'">重新审核</button>
        </div>
    </div>
</template>

<script>
const Header = () => import('@/components/Header')
export default {
    data() {
        return {
            statusFlag: 'verifying',         // nopass-审核未通过  verifying-审核中
            img: '',
            remark: ''
        }
    },
    created() {
        this.img = this.bus.img
        this.remark = this.bus.remark
    },
    methods: {
        checkFn: function() {
            this.$router.push('/detail')
        }
    },
    components: {
        Header,
    },
}
</script>

<style lang="scss" scoped>
.status {
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
                background: #d9f8f3;
                border-radius: 50%;
                margin-right: 0.1rem;
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
    .remark {
        width: 100%;
        min-height: 1.65rem;
        padding: 0.3rem;
        background: #fff;
        margin-bottom: 0.3rem;
        box-sizing: border-box;
        p {
            word-wrap:break-word;
            color: #999;
        }
        textarea {
            width: 100%;
            height: 100%;
            outline: none;
            border: none;
            resize: none;
        }
        ::placeholder {
            font-size: 0.3rem;
            color: #999;
        }
    }
    .upload {
        background: #fff;
        padding: 0.3rem 0.37rem;
        .txt {
            color: #999;
        }
        .ImgBox {
            padding-top: 0.3rem;
            display: flex;
            .uploadImg {
                width: 1.34rem;
                height: 1.34rem;
                position: relative;
                overflow: hidden;
                img {
                    width: 100%;
                    height: 100%;
                }
                input {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    opacity: 0;
                }
            }
            #showImg {
                position: relative;
            }
        }
    }
    .nopass {
        .tit {
            color: #999;
            padding: 0.24rem 0.3rem;
        }
        .reason {
            background: #fff;
            padding: 0.3rem;
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
            background: #ddd;
        }
        .bt2 {
            background: #ff6c5f;
        }
    }
}
</style>
