<template>
    
<div class="w-max ">

    <div class="w-box ">

         <div class="c-title" >  
                <img class="see-title" src="https://vote.klny.xyz/web/images/p2/b-t.png" @click="openTitle()"/>
        </div>
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

     <div class="b-text">
        <div>西南油气田公司工会、体协主办  </div>
        <div>“川油人”微信公众号技术支持</div>    
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

    <div class="rule-area" v-show="state.showTitle">
        <div class="rule-bg">
            &nbsp;
        </div>
        <div class="rule-content-2">
            <div class="btn-close" id="btn-rule-close" @click="closeTitle()"><img src="https://vote.klny.xyz/web/images/p2/close.png"/></div>
            <div class="text-1" >
                比赛内容
            </div>
            <div class="text-2" >
                比赛内容为中华人民共和国第九套广播体操，设混合团体组、混合创编组两个比赛组别。
            </div>

        
            <div class="text-2" >
                混合团体组：统一完成第九套广播体操整套标准动作，并使用标准音乐。
            </div>

            <div class="text-2" >
               混合创编组：第九套广播体操每一节动作至少完成2个8拍，中间环节可进行创编，创编部分鼓励加入健美操、健排舞、街舞或其它体育项目元素，音乐可根据创编内容自行剪辑。
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
        showTitle: false,
    });

     const closeRule = () =>{
       console.log("closeRule");
       state.showRule = false;
   }

     const openRule = () =>{
       state.showRule = true;
   }

     const closeTitle = () =>{
       console.log("closeRule");
       state.showTitle = false;
   }
     const openTitle = () =>{
       state.showTitle = true;
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
       
        //doCheckLogin();
        getCategorys().then(res => {
            //debugger
            //suppliers.value = res.data
            categorys.value = res.data;
            console.log(res.data)
        })
        wxShare()
    })
    return {
        categorys,state,closeRule,openRule,openTitle,closeTitle
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
    background-color: #d31114;
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

.c-title{
    width: 100%;
    text-align: center;
}

.see-title{
    width: 60%;
    position: absolute;
    left: 20%;
    top: 10.9rem;
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

.b-text{
  width: 100%;
  color: #ffb422;
  font-size: 0.5rem;
  text-align: center;
  margin-top: 2rem;
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

.rule-content-2{
    width: 90%;
    top: 7rem;
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