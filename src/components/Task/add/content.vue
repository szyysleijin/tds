<!--zh-->
<template>
    <div id="content">
      <Header title="任务内容"/>
      <div class="textare">
        <mt-field  placeholder="任务标题（不超过12个字）" v-model="title"></mt-field>
        <quill-editor ref="myTextEditor"
                      :content="content"
                      :options = "editorOption"
                      @change="onEditorChange($event)">
        </quill-editor>

      </div>
      <div class="hint">完成任务需要提交</div>
      <mt-cell>
        <div slot="title">页面截图</div>
        <mt-switch v-model="img" @change="morePopupFn()"></mt-switch>
      </mt-cell>
      <mt-cell>
        <div slot="title">手机号等注释</div>
        <mt-switch v-model="phone" @change="morePopupFn()"></mt-switch>
      </mt-cell>
      <div class="save">保存</div>
    </div>
</template>

<script>
  const Header = () => import('@/components/Header');
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
  import { quillEditor } from 'vue-quill-editor'


 export default {
   components: {
     quillEditor,
     Header
   },
   data(){
    return{
      title:'',
      img:'',
      phone:'',
      content:'示例：这里是示例内容',
      //富文本工具栏
      editorOption:{
        modules:{
          toolbar:[
            ['bold', 'italic', 'underline', 'strike'],    //加粗，斜体，下划线，删除线
            ['blockquote', 'code-block'],     //引用，代码块
            [{ 'size': ['small', false, 'large', 'huge'] }], // 字体大小
            [{ 'color': [] }, { 'background': [] }],     // 字体颜色，字体背景颜色
            [{ 'font': [] }],     //字体
            [{ 'align': [] }],    //对齐方式
            ['clean'],    //清除字体样式
            ['image','link']    //上传图片、上传视频

          ]
        }
      }
    }
   },
   methods: {
     onEditorBlur(){//失去焦点事件
     },
     onEditorFocus(){//获得焦点事件
     },
     onEditorChange({ editor, html, text }) {
       //富文本编辑器  文本改变时 设置字段值
       this.content = html

     }
   }
 }
</script>

<style lang="scss">
  #content{
    .textare{
      background-color: #fff;
    }
    .needsclick{
      -webkit-touch-callout: text !important;
      -webkit-user-select: text !important;
      -khtml-user-select: text !important;
      -moz-user-select: text !important;
      -ms-user-select: text !important;

      * {
        -webkit-touch-callout: text !important;
        -webkit-user-select: text !important;
        -khtml-user-select: text !important;
        -moz-user-select: text !important;
        -ms-user-select: text !important;
      }
    }
    .hint{
      font-size: 0.24rem;
      color: #999;
      padding: 0.24rem 0.25rem;
    }
    .ql-toolbar.ql-snow + .ql-container.ql-snow{
      height: 6rem;
    }
    .mint-switch-input:checked + .mint-switch-core {
      background-color: #6ad56d;
      border-color: #6ad56d;
    }
    .save{
      width: 6.85rem;
      margin: 0 auto;
      text-align: center;
      background-color: #33d8da;
      color: #fff;
      margin-top: 0.44rem;
      padding: 0.2rem 0;
      border-radius: 3px;
    }
  }

</style>
