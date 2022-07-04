<template>

<div class="page-bg-2">


<img class="b2-5" :src="resources['/web/images/p2/bj-2.jpg']"/>


<img class="p2-title" id="btn-start-vote"  @click="startVote()" :src="resources['/web/images/p2/box.gif']"/>


<img class="see-rule" id="see-rule" :src="resources['/web/images/p2/see-rule.png']" @click="openRule()"/>

<div class="rule-area" v-show="state.showRule">
    <div class="rule-bg">
        &nbsp;
    </div>
    <div class="rule-content">
        <div class="btn-close" id="btn-rule-close" @click="closeRule()"><img src="https://vote.klny.xyz/web/images/p2/close.png"/></div>
        <div class="text-1" >
            投票规则
        </div>
        <div class="text-2" >
            1. 搜索关注“昆仑能源”微信公众号，投票日期12月24日18时至12月30日24时，点击本篇稿件下方的“阅读原文”或识别下面二维码均可进入投票页面参与投票。
        </div>

        <div class="text-qrcode" >
            <img src="https://vote.klny.xyz/web/images/p2/qrcode.png"/>
        </div>

        <div class="text-2" >
            2.每天每人每个栏目作品只能投5票（单个作品不能重复投）。
        </div>

        <div class="text-2" >
            3.投票时间：12月24日18时至12月30日24时
        </div>
        <div class="text-2" >
            4.此次投票数据统计将在主办单位的严格监督下进行，确保其准确性和权威性。
        </div>
        <div class="text-2" >
            5. 严禁不正当刷票行为，一经查实，取消参选资格。
        </div>
        <div class="text-2" >
            &nbsp;
        </div>
    </div>
</div>



</div>
  
</template>

<script lang="ts">
import {defineComponent, onMounted, ref, watch,reactive} from "vue";
import { useRoute, useRouter } from 'vue-router';
import {getResource} from   '@/apis/moduleA';

export default defineComponent({
  name: "locadingSuccess",
  props: {
    value: {
      type: [Array, Object, String, Number],
      default: null,
    },
    width: {
      type: [String, Number],
      default: '25em'
    }
  },
  setup(props, ctx) {
   
    const resources: any = ref([]);

    const router = useRouter();


    //let timer = 0;
   const state: any = reactive({
     showRule : false,
     processCurrent: 0,
     increaseQuantity: 10
   });

   const closeRule = () =>{
       console.log("closeRule");
       state.showRule = false;
   }

     const openRule = () =>{
       state.showRule = true;
   }
   const startVote = () =>{
       router.push(`/category`)
   }


  
   

  
    /* 初始化 */
    onMounted(() => {
      getResource().then(res => {
        //debugger
        //suppliers.value = res.data
        resources.value = res.data;
        //console.log(res.data)
       
      
      })
    })
  
    return {
      resources,
      state,
      closeRule,
       openRule,
       startVote    
    }
  }
})
</script>

<style scoped lang="css">
.page-bg-2{
    height: 100%;
    width: 100%;
    position: relative;
    background: #a11b0e;
}

.wish-loop-bg{
    width: 100%;
    position: absolute;
    left: 0rem;
    top: 0rem;
}
.b2-5{
    width: 100%;
    position: absolute;
    left: 0rem;
    top: 0rem;
}

.p2-title{
    width: 30%;
    position: absolute;
    left: 35%;
    top: 6rem;
}
.baby{
    width: 91%;
    position: absolute;
    left: 4.5%;
    top: 11.8rem;
}
.wish-input-bg{
    width: 98%;
    position: absolute;
    left: 1%;
   bottom: 0.0rem;
}

.wish-input{
  width: 75%;
  position: absolute;
  left: 12.5%;
   bottom: 9.0rem;
  height: 2.3rem;
  background: transparent;
  border: none;
  text-indent: 1rem;
}

.see-rule{
    width: 32%;
    position: absolute;
    left: 34%;
    top: 15rem;
}

.font-2{
    width: 24.3rem;
    position: absolute;
    left: 1rem;
    bottom: 1rem;
}

.rule-bg{
    width: 100%;
    height: 100%;
    top: 0;
    position: absolute;
    background-color: black;
    opacity: 0.8;
}

.rule-content{
    width: 90%;
    top: 1rem;
    position: absolute;
    background-color: white;
    border-color: #ffaf8f;
    border:3px solid #ffaf8f;
    border-radius:15px ;
    left: 4%;
}

.btn-close{
    float: right;
    margin-right: 0.3rem;
    margin-top: 0.3rem;
    height: 1.1rem;;
    line-height:  1.1rem;;
}

.btn-close img{
    width: 1.1rem;
    line-height:  1.1rem;
}

.text-1{
    color: black;
    font-size: 0.6rem;
    font-weight: bold;
    text-align: center;
    width: 100%;
    margin-top: 1rem;
    line-height: none;
}

.text-2{
    color: black;
    font-size: 0.4rem;
    margin-top: 0.4rem;
    text-align: left;
    padding: 0 1rem 0 1rem;
    line-height: none;
}
.text-qrcode{
    text-align: center;
}

.text-qrcode img{
  width: 3rem;
  margin-top: 0.3rem;
}


</style>
