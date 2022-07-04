<template>
  <div class=" top-bg">
  <div class="t-bg">
        <div class="category-title">{{category.name}}</div>
    </div>
    <!--
    <div class="logo"><img src="http://osi1i0y6i.bkt.clouddn.com/logo.png"/></div>
    -->
    <div class="right-total">
        <span> 票数: </span><span style="margin-left: 5px;" >{{pageState.totalVoteCount}}</span>
    </div>

    <div class="left-total">
      
       <router-link :to="{path: '/category'}" class="nav-link">
       <img src="https://vote.klny.xyz/web/images/btn-bk.png" />
        </router-link>
      
    </div>

    <div style="clear: both;"></div>
    <!--
    <div class="vote-tips">

        <span style="font-size: 28px;"> 温馨提示:</span><span style="font-size: 25px;">每类作品均需投票（可多选），每个作品每人每天只能投一票。</span>

        <span style="font-size: 28px;"> 温馨提示:</span><span style="font-size: 25px;">投票已经结束,谢谢您的参与</span>

    </div>
     -->

</div>


    <div class="w-max m-bg">
            <div  v-for="(appreciate ,index) in appreciateList" :class="getCardClass(index)" :objectId="appreciate.id">
                <div class="card-border">
                    <div class="card-title"><span class="c-rosewood">{{appreciate.title}}</span></div>
                    <div class="card-img">

                       
                        <router-link :to="{path: '/appreciate/detail', query: {id: appreciate.id }}" class="nav-link">
                        <img :src="appreciate.logo">
                        </router-link>
                        <!--
                        <img src="${appreciate.logo!}">
                         -->
                    </div>

                    <div class="vote-count">
                        <span class="c-rosewood">票数</span>
                        <span class="c-rosewood show-count">{{appreciate.voteCount}}</span>

                        <span class="c-red s-right">{{appreciate.top}} 号</span>
                    </div>



                </div>
                <div class="vote-btn" @click="doVote(appreciate.id)">&nbsp;</div>
                
            </div>
        
        <div style="clear: both;"></div>
    </div>


</template>
<script lang="ts">
import {  defineComponent, ref,onMounted, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getCategory,getAppreciateListByCategoryId,getVoteCount,voteSubmit,openWxLogin} from   '@/apis/moduleA';
import { Toast } from 'vant';

export default defineComponent({
  name: 'appreciateList',
  components: {
  
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const category: any = ref([]);
    const categoryId = route.query.categoryId;
    const appreciateList: any = ref([]);

    const pageState : any = reactive({
     totalVoteCount : 0,
   });

    const getCardClass = (index :number) => {
        if (index % 2 ==0) {
            return "card-item card-left";
        }
        return  "card-item card-right";;
      };

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
        appreciateList.forEach(item => {
            if(item.id == id){
                item.voteCount = item.voteCount +1
            }
        })
        pageState.totalVoteCount = pageState.totalVoteCount + 1
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
      getCategory(categoryId).then(res => {
        //debugger
        //suppliers.value = res.data
        category.value = res.data;
        //console.log(res.data)
        })
       getAppreciateListByCategoryId(categoryId).then(res => {
        //debugger
        //suppliers.value = res.data
        appreciateList.value = res.data;
        //console.log(res.data)
        })
        getVoteCount().then(res => {
        //debugger
        //suppliers.value = res.data
        pageState.totalVoteCount = res.data;
        console.log(res.data)
        })
    })
    return {
        categoryId,
        appreciateList,
        category,
        getCardClass,
        pageState,
        doVote
    };
  }
});
</script>
<style scoped lang="css">
body{
    margin: 0;
    background-color: #a11b0e;
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
    background-color: #831b10;
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
     background-color: #831b10;
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
     font-size: 2.9rem;
     margin-top: 13rem;
     padding: 0 3rem 0 3rem;
}

.vote-content{
    height: auto;
    position: relative;
    overflow: hidden;
    clear: both;

    border: 0;
    line-height: 54px;

    color: white;
    font-size: 1.9rem;
    margin-top: 2rem;
    text-align: left;
    padding: 0 2rem 0 2rem;
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