<!--xjy-->
<template>
    <div id="newTask">
        <Header title="完成任务"/>
        <div class="top">
            <div class="des"><span class="app">APP任务下载注册任务</span><span>150DOS</span></div>
            <div class="surplus"><div class="img"><img src="../../../assets/images/icon_cs.png" alt=""></div><div class="frequency">剩余次数：50次</div><div class="check" @click="checkFn">查看详情<img src="../../../assets/images/enter_02.png" alt=""></div></div>
        </div>
        <div class="remark">
            <textarea name="" id="" cols="30" rows="10" placeholder="根据任务说明输入手机号等注释" v-model="remark" @input="remarkFn"></textarea>
        </div>
        <div class="upload">
            <div class="txt">根据任务说明提交页面截图</div>
            <div class="ImgBox">
                <div id="showImg"></div>
                <div class="uploadImg"><img src="../../../assets/images/addimg.png" alt=""><input type="file" @change="selectImage($event)"></div>
            </div>
        </div>
        <div class="btn">
            <button :class="uploadImg==''?'':'bt'" @click="subFn">提交</button>
        </div>
    </div>
</template>

<script>
const Header = () => import('@/components/Header')
export default {
    data() {
        return {
            uploadImg: '',
            remark: ''
        }
    },
    updated() {
        var close = document.querySelector('#close');
        if (close) {
            var showImg = document.querySelector('#showImg');
            close.addEventListener('click', () => {
                this.uploadImg = '';
                showImg.innerHTML = ''
            })
        }
    },
    components: {
        Header,
    },
    methods: {
        selectImage: function(e) {
            var _this = this
            var file = e.currentTarget
            console.log(file.files[0])
            if (!file.files || !file.files[0]) {
                return;
            }
            var reader = new FileReader();
            reader.onload = function (evt) {
                _this.uploadImg = evt.target.result
                _this.bus.img = evt.target.result
                // console.log(evt.target.result)
                var showImg = document.querySelector('#showImg');
                showImg.innerHTML = `<img src="${evt.target.result}" style="width: 1.34rem; height: 1.34rem; margin-right: 0.3rem">
                    <img id="close" src="../../../../static/images/delete.png" style="width: 0.34rem; height: 0.34rem; position: absolute; top: -0.17rem; right: 0.17rem;">
                `
            }
            reader.readAsDataURL(file.files[0]);
        },
        checkFn: function() {
            this.$router.push('/detail')
        },
        subFn: function() {
            if (this.uploadImg != '') {
                this.bus.Flag='提交成功'
                this.$router.push('/result')
            }
        },
        remarkFn: function() {
            this.bus.remark = this.remark
        }
    }
}
</script>

<style lang="scss" scoped>
#newTask {
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
            background: #ddd;
        }
        .bt {
            background: #33d8da;
            color: #fff;
        }
    }
}
</style>

