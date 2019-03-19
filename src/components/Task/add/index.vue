<!--zh-->
<template>
  <div id="newTask">
    <Header title="发布任务"/>
    <mt-cell is-link to="/taskAddEditor" value="带链接">
      <div slot="title">任务内容 <i class="text-red">*</i></div>
    </mt-cell>
    <mt-cell is-link @click.native="selectOptions(0,'type')">
      <div slot="title">奖励金额类型 <i class="text-red">*</i></div>
      <span :class="listsObj.type==null?'':'text-green'">{{listsObj.type==null?'请选择':listsObj.type}}</span>
    </mt-cell>
    <mt-cell >
      <div slot="title">奖励金额 <i class="text-red">*</i></div>
     <mt-field :class="listsObj.money==null?'':'active'"  placeholder="请填写" type="number" v-model="listsObj.money"></mt-field>
    </mt-cell>
    <mt-cell is-link @click.native="selectOptions(1,'peoples')">
      <div slot="title">任务人数 <i class="text-red">*</i></div>
      <span :class="listsObj.peoples==null?'':'text-green'">{{listsObj.peoples==null?'请选择':listsObj.peoples}}</span>
    </mt-cell>
    <div class="more">
      <mt-cell>
        <div slot="title">开启更多条件</div>
        <mt-switch v-model="more" @change="morePopupFn()"></mt-switch>
      </mt-cell>
      <div v-show="more">
        <mt-cell is-link v-if="moreTermArr[0].selected" @click.native="selectOptions(2,'admit')">
          <div slot="title">认证用户</div>
          <span>{{listsObj.admit==null?'请选择':listsObj.admit}}</span>
        </mt-cell>
        <mt-cell is-link v-if="moreTermArr[1].selected" @click.native="selectOptions(3,'level')">
          <div slot="title">最低用户等级</div>
          <span>{{listsObj.level==null?'请选择':listsObj.level}}</span>
        </mt-cell>
        <mt-cell is-link v-if="moreTermArr[2].selected" @click.native="selectOptions(4,'light')">
          <div slot="title">最低宝石亮度</div>
          <span>{{listsObj.light==null?'请选择':listsObj.light}}</span>
        </mt-cell>
        <mt-cell is-link v-if="moreTermArr[3].selected" @click.native="selectOptions(5,'sex')">
          <div slot="title">性别</div>
          <span>{{listsObj.sex==null?'请选择':listsObj.sex}}</span>
        </mt-cell>
        <mt-cell is-link v-if="moreTermArr[4].selected" @click.native="selectOptions(6,'ages')">
          <div slot="title">年龄段</div>
          <span>{{listsObj.ages==null?'请选择':listsObj.ages}}</span>
        </mt-cell>
      </div>
    </div>

    <!--更多条件-->
    <mt-popup v-model="morePopup" position="bottom" :closeOnClickModal="false">
      <div class="title">
        <div @click="morePopupFn(0)">取消</div>
        <div @click="morePopupFn(1)">确定</div>
      </div>
      <div class="hint"><span>i</span> 多增加一个条件，增加1000TV点</div>
      <ul>
        <li :class="item.selected?'active':''"
            v-for="(item,index) in moreTermArr"
            :key="index"
            @click="moreTermSelected(index,item.selected)"
        >{{item.name}}
        </li>
      </ul>
    </mt-popup>

    <!--条件选项-->
    <mt-popup v-model="selectedOptionPopup" position="bottom" >
      <div class="title">
        <div @click="selectedOptionPopup=false">取消</div>
        <div @click="selectedOptionPopup=false">确定</div>
      </div>
      <mt-picker :slots="slots[slotsIdx]" @change="selectOptionsChange"></mt-picker>
    </mt-popup>

    <div class="footer">
      <div class="text-green">{{moneyTv}}TV点</div>
      <div class="issue" @click="issue">发布</div>
    </div>

  </div>
</template>

<script>
  const Header = () => import('@/components/Header');
  import { Toast } from 'mint-ui';

  const moreTerm = [
    {
      id: 0,
      name: '认证用户',
      selected: false
    },
    {
      id: 1,
      name: '最低用户等级',
      selected: false
    },
    {
      id: 2,
      name: '最低宝石亮度',
      selected: false
    },
    {
      id: 3,
      name: '性别',
      selected: false
    },
    {
      id: 4,
      name: '年龄段',
      selected: false
    },
  ];
  const slots=[
    [
      {
        flex: 1,
        values: ['P币', 'CV', '任务DOS', 'CNV'],
        className: 'slot1',
        textAlign: 'center'
      },
    ],
    [
      {
        flex: 1,
        values: ['100', '200', '500', '1000','2000','5000'],
        className: 'slot1',
        textAlign: 'center'
      },
    ],
    [
      {
        flex: 1,
        values: ['是', '否'],
        className: 'slot1',
        textAlign: 'center'
      },
    ],
    [
      {
        flex: 1,
        values: ['贫农', '贫农2','贫农3','贫农4','贫农6','贫农1','贫农1','贫农1','贫农1','贫农1','贫农1','贫农1'],
        className: 'slot1',
        textAlign: 'center'
      },
    ],
    [
      {
        flex: 1,
        values: ['贫农', '贫农1','贫农1','贫农1','贫农1','贫农1','贫农1','贫农1','贫农1','贫农1','贫农1','贫农1'],
        className: 'slot1',
        textAlign: 'center'
      },
    ],
    [
      {
        flex: 1,
        values: ['男', '女'],
        className: 'slot1',
        textAlign: 'center'
      },
    ],
    [
      {
        flex: 1,
        values: ['24岁以下', '25岁-35岁', '36岁-40岁', '41岁以上'],
        className: 'slot1',
        textAlign: 'center'
      }
    ]

  ];
  export default {
    name: "index",
    components:{
      Header
    },
    data() {
      return {
        more: false,//开启更多条件
        morePopup: false,//条件弹窗
        moreTermArr: moreTerm,//条件列表
        selectedOptionPopup:false,//条件选项弹窗
        slots: slots,//条件选项列表
        slotsIdx:0,//条件选项下标
        listsObjState:null,

        //页面选中列表值
        listsObj:{
          name:null,
          moneyType:null,
          money:null,
          peoples:null,
          admit:null,
          level:null,
          light:null,
          sex:null,
          ages:null,
        },
        moneyTv:0
      }
    },
    methods: {
      moreTermSelected(index, selected) {//选择更多条件
        return this.moreTermArr[index].selected = !selected;
      },
      morePopupFn(type) {//条件弹窗显示或隐藏
        if(type==0){//取消
          this.more=false;
          this.morePopup = false;
        }else if (type == 1) {//确定
          this.moneyTvCount();
          return this.morePopup = false;
        } else {//跟随switch状态展示弹窗
          if(this.more==false){
            this.moneyTv=0
          }
          return this.morePopup = this.more;
        }
      },
      moneyTvCount(){//计算TV点
        let sum=0;
        for (let i in this.moreTermArr){
          this.moreTermArr[i].selected==true?sum+=1000:sum+=0;
        }
        this.moneyTv=sum;
      },
      selectOptions(idx,type){//调用列表
        this.selectedOptionPopup=true;
        this.slotsIdx=idx;
        this.listsObjState=type;
      },
      selectOptionsChange(picker, values) { //列表选项
        let state=this.listsObjState;
        this.listsObj[state]=values[0];
        if(this.listsObj.admit=='否'){
          this.moreTermArr[3].selected=false;
          this.moreTermArr[4].selected=false;
        }
      },
      issue(){//确定
        if(this.listsObj.name==null||this.listsObj.name==null||this.listsObj.name==null||this.listsObj.name==null){
          Toast('请选择或填写必填项');
          return false;
        }
      }

    }
  }
</script>

<style lang="scss">
  #newTask {
    .mint-cell {
      border-bottom: 1px solid #eee;
      .text-green {
        color: #33d8da;

      }
      .text-red {
        color: red;
      }
      .mint-field-core{
        text-align: right;
      }
      .active{
        .mint-field-core{
          color: #33d8da;
        }
      }
    }
    .mint-cell .mint-field{
      border-bottom: none;
    }
    .more {
      margin-top: 0.24rem;
    }
    .mint-switch-input:checked + .mint-switch-core {
      background-color: #6ad56d;
      border-color: #6ad56d;
    }
    .mint-popup {
      width: 100%;
      .title {
        display: flex;
        justify-content: space-between;
        padding: 0.26rem 0.3rem;
      }
      .hint {
        background-color: #ffe5e3;
        color: #ff1601;
        font-size: 0.24rem;
        padding: 0.18rem 0.3rem;
        span {
          display: inline-block;
          width: 0.26rem;
          height: 0.26rem;
          line-height: 0.26rem;
          font-size: 0.24rem;
          text-align: center;
          border-radius: 50%;
          margin-right: 0.1rem;
          background-color: #ff6c5f;
          color: #fff;
        }
      }
      ul {
        padding-left: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li {

          list-style: none;
          width: 3.28rem;
          height: 0.6rem;
          line-height: 0.6rem;
          text-align: center;
          margin: 0 0.15rem;
          margin-bottom: 0.24rem;
          border-radius: 0.3rem;
          border: solid 0.01rem #999999;
          color: #999;
          &.active {
            background-color: #33d8da;
            border-color: #33d8da;
            color: #fff;
          }
        }
      }
    }
    .footer{
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      div{
        width: 50%;
        text-align: center;
        padding: 0.26rem 0;
        background-color: #fff;
        &.text-green{
          color: #33d8da;
        }
        &.issue{
          background-color: #33d8da;
          color: #fff;
        }
      }
    }

  }

</style>
