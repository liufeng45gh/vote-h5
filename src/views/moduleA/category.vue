<template>
    <div class=" top-bg">
    <!--
    <div class="logo"><img src="/web/images/logo.png"/></div>
    <div class="right-total">
        <span style="color: white;"> 总投票数: </span><span style="color: #FFFF00;margin-left: 5px;">${allVoteCount?default(0)}</span>
    </div>
    <div class="left-total">
        <span style="color: white;"> 总作品数:</span><span style="color: #FFFF00;margin-left: 10px;">${allAppreciateCount?default(0)}</span>
    </div>
    -->
    <div style="clear: both;"></div>
      <!--
    <div class="vote-tips">

        <span style="font-size: 28px;"> 温馨提示:</span><span style="font-size: 25px;">每类作品均需投票（可多选），每个作品每人每天只能投一票。</span>

        <span style="font-size: 28px;"> 温馨提示:</span><span style="font-size: 25px;">投票已经结束，谢谢您的参与</span>

    </div>
    -->

</div>

<div class="w-max ">

    <div class="w-box ">
        <div class="c-item" v-for="category in categorys">
            <div class="c-img">
                <router-link :to="{path: '/appreciate/by-category', query: {categoryId: category.id }}" class="nav-link">
                <img :src="category.image"/>
                </router-link>
            </div>
        </div>
    </div>
    

    <div class="c-culture">
        <img class="see-rule" id="see-rule" src="https://vote.klny.xyz/web/images/p2/see-rule.png" @click="openRule()"/>
        
    </div>

    <div style="clear: both;"></div>

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
               投票时间为2022年7月9日-16日，用户每人每天可以为自己喜欢的每个组别作品投3票，根据投票数评出“最佳人气奖”。
            </div>

            
            <div class="text-2" >
                &nbsp;
            </div>
        </div>
    </div>
</div>
</template>
<script lang="ts">
import {  defineComponent, ref,onMounted ,reactive} from 'vue';
import { getCategorys,checkLogin,openWxLogin} from   '@/apis/moduleA';
import { wxShare} from   '@/apis/wxapi';

export default defineComponent({
  name: 'category',
  components: {
  
  },
  setup() {
    const categorys: any = ref([]);
   
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

    const doCheckLogin = () =>{
       checkLogin().then(res => {
            //debugger
            console.log(res.data)       
        }).catch(error => {
             console.log(error)
             if (error.status == 401) {
                openWxLogin();
             }
        });
   }

    onMounted(() => {
       
        doCheckLogin();
        getCategorys().then(res => {
            //debugger
            //suppliers.value = res.data
            categorys.value = res.data;
            console.log(res.data)
        })
        wxShare()
    })
    return {
        categorys,state,closeRule,openRule
    };
  }
});
</script>
<style scoped lang="css">
html,body,#app{
 height: 100%;
}

.c-item {
    width: 70%;
    margin: 0 auto;
    margin-top: 0.2rem;
    margin-bottom: 0.3rem;
}
.w-max {
    width: 100%;
    height: 100%;
    padding-top: 3rem;
    margin: 0;
    background-image: url(https://vote.klny.xyz/web/images/p2/bg-2.jpg);
    background-size: 100%;
    background-repeat:no-repeat;
    background-color: #a11b0e;
}

.w-box {
    width: 100%;
    height: 4.7rem;
    margin-top: 8rem;
    padding-top: 2rem;
  
    background-image: url(https://vote.klny.xyz/web/images/p2/b-1.png);
    background-size: 100%;
    background-repeat:no-repeat;
}

.c-culture{
    width: 100%;
    text-align: center;
    margin-top: 0.3rem;
}
.c-img img {
    width: 100%;
}

.c-culture img {
    width: 30%;
}

.see-rule{
    width: 32%;
    position: absolute;
    left: 34%;
    top: 17.9rem;
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
    top: 8rem;
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