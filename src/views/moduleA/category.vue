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

    
    <div class="c-item" v-for="category in categorys">
        <div class="c-img">
            <router-link :to="{path: '/appreciate/by-category', query: {categoryId: category.id }}" class="nav-link">
            <img :src="category.image"/>
            </router-link>
        </div>
    </div>
    

    <div class="c-culture">
        <a href="https://www.cnpc.com.cn/cnpc/gyqywh/qywh_index.shtml">
        <img class="see-culture" id="see-culture" src="https://vote.stack.xin/web/images/culture.png"/>
        </a>
    </div>

    <div style="clear: both;"></div>
</div>
</template>
<script lang="ts">
import {  defineComponent, ref,onMounted } from 'vue';
import { getCategorys} from   '@/apis/moduleA';
import { wxShare} from   '@/apis/wxapi';

export default defineComponent({
  name: 'category',
  components: {
  
  },
  setup() {
    const categorys: any = ref([]);
   


    onMounted(() => {
      getCategorys().then(res => {
        //debugger
        //suppliers.value = res.data
        categorys.value = res.data;
        console.log(res.data)
    
      
      })
      wxShare()
    })
    return {
        categorys
    };
  }
});
</script>
<style scoped lang="css">
html,body,#app{
 height: 100%;
}

.c-item {
    width: 80%;
    margin: 0 auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
}
.w-max {
    width: 100%;
    height: 100%;
    padding-top: 3rem;
    margin: 0;
    background-image: url(https://vote.stack.xin/web/images/bc.jpg);
    background-size: 100%;
    background-repeat:no-repeat;
    background-color: #a11b0e;
}

.c-culture{
    width: 100%;
    text-align: center;
    margin-top: 1rem;
}
.c-img img {
    width: 100%;
}

.c-culture img {
    width: 40%;
}
</style>