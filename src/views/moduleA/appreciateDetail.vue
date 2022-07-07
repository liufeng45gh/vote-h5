<template>
    <div class=" top-bg">
    <div class="t-bg">
        <div class="category-title">{{pageState.category.name}}</div>
    </div>
    <!--
    <div class="logo"><img src="http://osi1i0y6i.bkt.clouddn.com/logo.png"/></div>
    -->
    <div class="right-total">
        <span> 票数: </span><span style="margin-left: 5px;">{{pageState.appreciate.voteCount}}</span>
    </div>

    <div class="left-total">
        <router-link :to="{path: '/appreciate/by-category', query: {categoryId: pageState.category.id }}" class="nav-link">
            <img src="https://vote.klny.xyz/web/images/btn-bk.png" />
        </router-link>
    </div>

    <div style="clear: both;"></div>


</div>


<div class="vote-title">{{pageState.appreciate.title}}</div>

<div class="vote-content"  v-html="pageState.appreciate.content"></div>

<div class="vote-bottom" objectId="{{pageState.appreciate.id}}"> <div class="vote-btn  detail-vote-btn" @click="doVote(pageState.appreciate.id)">&nbsp;</div></div>
</template>


<script lang="ts">
import {  defineComponent, ref,onMounted, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getAppreciate,getAppreciateListByCategoryId,getVoteCount,voteSubmit,openWxLogin} from   '@/apis/moduleA';
import { Toast } from 'vant';

export default defineComponent({
  name: 'appreciateDetail',
  components: {
  
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const appreciateId = route.query.id;

    const pageState : any = reactive({
     appreciate : ref([]),
     category : ref([]),
   });

  

    const doVote = (id: any) =>{
         console.log(id);
        const data_send =  reactive({
            appreciateId : id,
            random: Math.random
        });
       
        voteSubmit(data_send).then(res => {
        //debugger
        //suppliers.value = res.data
        //pageState.voteCount = res.data;
        console.log(res.data)
        pageState.appreciate.voteCount = pageState.appreciate.voteCount +1;
        Toast.success('投票成功');
        }).catch(error => {
             console.log(error)
             if (error.status == 401) {
                openWxLogin();
             }else {
                 Toast(error.data.message)
             }
        });
    }



    onMounted(() => {
      getAppreciate(appreciateId).then(res => {
        //debugger
        //suppliers.value = res.data
        //category.value = res.data;
        pageState.category = res.data.category;
        pageState.appreciate = res.data.appreciate;
        //console.log(res.data)
        })
    })
    return {
        pageState,
        doVote
    };
  }
});

</script>


<style  lang="css">
body{
    margin: 0;
    background-color: #f58b34;
}
.wrap{

}
.w-max{
    width:100%;
    padding-top: 20px;
}

.top-bg{
    background-image: url(http://osi1i0y6i.bkt.clouddn.com/bg_top.jpg);
    background-size:100% 100%;
    background-repeat:no-repeat;
    height: 1.3rem;
    background-color: #c05a22;
}

.logo{
     width: 84px;
     height: 94px;
     margin-left: 80px;
     margin-top: 20px;
     float: left;
}
.logo img{
    width: 84px;
    height: 94px;
}

.left-total{
  background: 0;
  position: absolute;
  top: 0.3rem;
  left: 0.2rem;
  width: 1.2rem;
}

.left-total img {
    width: 100%;
}
.right-total{
   color: white;
   background: 0;
   text-shadow: none;
   box-shadow: none;
   height: 1.3rem;
   line-height: 1.3rem;
   font-size: 0.4rem;
   position: absolute;
   top: 0px;
   right: 0.2rem;
   opacity: 0.9;
}

.t-bg{
     background-color: #c05a22;
     opacity: 0.8;
}

.m-bg{
    background-color: #a11b0e;
    padding-bottom: 3rem;
    padding-top: 0.1rem;
}

.vote-tips{
    width: 60%;
    margin: 0 auto;
    color: white;
    text-align: center;
    margin-top: 160px;
}

.category-title{
    height: 1.3rem;
    line-height: 1.3rem;
    margin: 0 auto;
    font-size: 0.5rem;
    text-align: center;
    color: white;
}


.card-item{
     width: 46%;
     margin-top: 0.2rem;
}

.card-border{
  background-color: white;
  border-color: #ffaf8f;
  border:0.08rem solid #ffaf8f;
  border-radius: 0.31rem ;
}

.card-title{
    width: 100%;
    margin: 0.1rem auto 0.1rem auto;
    text-align: center;
    height: 1.2rem;
    line-height: 0.7rem;
    font-size: 0.4rem;
    font-weight: bold;
}

.card-img{
    width: 90%;
    height: 4rem;
    margin: 0.2rem auto;
}

.card-left{
    margin-left: 0.1rem;
    float: left;
}

.card-right{
    margin-right: 0.1rem;
    float: right;
}

.card-img img{
    width: 100%;
    height: 100%
}

.vote-count{
    width: 100%;
    height: 0.8rem;
    line-height: 0.8rem;
    margin: 0.1rem auto 0.1rem 0.1rem;
    text-align: left;
    font-size: 0.4rem;
    font-weight: bold;
}

.s-right{
    float: right;
    margin-right: 0.5rem;
}

.c-red{
   color: red;
}

.c-rosewood{
   margin-left: 0.2rem;
}

.source{
    width: 100%;
    margin: 30px auto 10px auto;
    text-align: center;
    height: 106px;
   line-height: 53px;
   font-size: 38px;
}

.vote-btn{
    width: 70%;
    color: black;
    letter-spacing: 5px;
    background: 0;
    text-shadow: none;
    height: 1rem;
    background-image: url(https://vote.klny.xyz/web/images/btn-vote.png);
    background-size:100%;
    background-repeat:no-repeat;
    border-radius: 10px;
    text-align: center;
    line-height: 1rem;
    margin: 0.5rem auto 0.8rem auto;
    font-size: 48px;
    font-weight: bold;
}


.vote-title{
     font-weight: bold;
     font-family: PingFangSC-Medium;
     border: 0;
     position: relative;
     overflow: hidden;
     text-align: center;
      color: white;
     font-size: 0.6rem;
     margin-top: 0.3rem;
     padding: 0 0.3rem 0 0.3rem;
}

.vote-content{
    height: auto;
    position: relative;
    overflow: hidden;
    clear: both;

    border: 0;
    line-height: 1.0rem;

    color: white;
    font-size: 0.5rem;
    margin-top: 0.3rem;
    text-align: left;
    padding: 0 0.2rem 0 0.2rem;
}

.vote-content img{
    width: 100%;
    display: block;
    margin: 4px auto;
}

.vote-content video{
    width: 100%;
    display: block;
    margin: 4px auto;
    height: auto;
}


.vote-content p{
    word-wrap: break-word;
    color: white;
    margin-top: 24px;
    text-indent: 2rem;
}
.vote-bottom{
 width: 100%;
}
.detail-vote-btn{
    width: 30%;
}


.bottom-line {
    border-bottom: .5px solid #e8e8e8;
}
.padding-side {
    padding-left: 17px;
    padding-right: 17px;
}

.c-item{
     width: 47%;
     margin-top: 20px;
}

.c-img{
    width: 100%;
    height: auto;
}
.c-img img{
    width: 100%;
}

.c-left{
    margin-left: 20px;
    float: left;
}

.c-right{
    margin-right: 20px;
    float: right;
}

.to_index{
   position: fixed;
   bottom: -5px;
   width: 100%;
   height: auto;
}

.to_index img{
   width: 100%;
   height: auto;
}
</style>