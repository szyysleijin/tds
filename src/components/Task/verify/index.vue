<!--xjy-->
<template>
    <div class="verify">
        <Header title="完成任务"/>
        <div class="top">
            <div class="des"><span class="app">APP任务下载注册任务</span><span>150DOS</span></div>
            <div class="surplus"><div class="img"></div><div class="frequency">剩余次数：50次</div><div class="check" @click="checkFn">查看详情<img src="../../../assets/images/enter_02.png" alt=""></div></div>
        </div>
        <div class="option">
            <div class="col"><div class="lft">用户姓名</div><div class="rgt">李*</div></div>
            <div class="col"><div class="lft">完成时间</div><div class="rgt">2019-02-10  18:45:12</div></div>
        </div>
        <div class="remark">手机号：13512345678</div>
        <div class="upload">
            <div class="txt">用户完成任务截图</div>
            <div class="ImgBox">
                <div id="showImg"></div>
                <div class="uploadImg"><img src="../../../assets/images/addimg.png" alt=""></div>
            </div>
        </div>
        <div class="rea">
            <textarea name="" id="" cols="30" rows="10" placeholder="请输入不通过理由"></textarea>
        </div>
        <div class="btn">
            <button class="bt1">通过</button>
            <button class="bt2">不通过</button>
        </div>
    </div>
</template>

<script>
const Header = () => import('@/components/Header')
export default {
    components: {
        Header,
    },
    methods: {
        checkFn: function() {
            this.$router.push('/detail')
        }
    }
}
</script>

<style lang="scss" scoped>
.verify {
    min-height: 100%;
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
    .option {
        background: #fff;
        padding: 0 0.3rem;
        margin-bottom: 0.3rem;
        .col {
            display: flex;
            border-bottom: 1px solid #f2f2f2;
            padding: 0.3rem 0;
            .lft {
                flex: auto;
            }
        }
    }
    .remark {
        padding: 0.3rem;
        height: 1.65rem;
        background: #fff;
        margin-bottom: 0.3rem;
        box-sizing: border-box;
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
    .rea {
        width: 100%;
        height: 1.65rem;
        box-sizing: border-box;
        padding: 0.3rem;
        background: #fff;
        margin-top: 0.3rem;
        textarea {
            width: 100%;
            height: 100%;
            border: none;
            outline: none;
            resize: none;
        }
        ::placeholder {
            color: #999;
        }
    }
    .btn {
        height: 1.4rem;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        button {
            width: 3.3rem;
            height: 0.8rem;
            border: none;
            outline: none;
            color: #fff;
            border-radius: 0.05rem;
        }
        .bt1 {
            background: #33d8da;
        }
        .bt2 {
            margin-left: 0.3rem;
            background: #fff;
            color: #999;
        }
        // button {
        //     width: 6.86rem;
        //     height: 0.8rem;
        //     margin: 0 0.32rem;
        //     text-align: center;
        //     position: absolute;
        //     border: none;
        //     outline: none;
        //     color: #fff;
        //     bottom: 0.3rem;
	    //     border-radius: 0.05rem;
        //     background: #33d8da;
        // }
    }
}
</style>
