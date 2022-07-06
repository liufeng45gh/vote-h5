<template>

<div class="page-bg-1">
 
    <img class="img-bg-1" :src="resources['/web/images/p1/bg-1.jpg']"/>

    <img class="a-4" :src="resources['/web/images/p1/a-4.png']"/>

    <img class="title-1" :src="resources['/web/images/p1/box.gif']"/>

    <div class="process-text">{{state.processCurrent}}%</div>

    <img class="process-bg" :src="resources['/web/images/p1/process-bg.png']"/>

    <img class="process-front" :src="resources['/web/images/p1/process-front.png']" :style="{width: state.processCurrent + '%'}"/>
    <!--
    <img class="loading" id="start-btn" src="/web/img/page1/loading.png"/>
    -->


</div>
  
</template>

<script lang="ts">
import {defineComponent, onMounted, ref, watch,reactive} from "vue";
import {getResource} from   '@/apis/moduleA';

export default defineComponent({
  name: "locadingStart",
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
    const loadComplated = () => {
      ctx.emit('loadComplated')
    }

    //let timer = 0;
   const state: any = reactive({
     timer : 0,
     processCurrent: 0,
     increaseQuantity: 10
   });


    const resetIncreaseQuantity = ()=>{
      if (state.processCurrent < 20) {
          state.increaseQuantity = 20;
      }else if (state.processCurrent < 40) {
          state.increaseQuantity = 20;
      }else if (state.processCurrent < 60) {
          state.increaseQuantity = 10;

      }else if (state.processCurrent < 80) {
            state.increaseQuantity = 10;
      }
    }


    const increaseProcess =() =>{
      console.log("increaseProcess called");
        state.processCurrent = state.processCurrent + state.increaseQuantity;
        if (state.processCurrent>91) {
            state.processCurrent = 91;
            doLoadFinish();
        }
        resetIncreaseQuantity();
    }

    const doLoadFinish = ()=>{
      clearInterval(state.timer);
      state.processCurrent = 92;
      setTimeout(loadComplated,1000);

    }
    /* 初始化 */
    onMounted(() => {
      getResource().then(res => {
        //debugger
        //suppliers.value = res.data
        resources.value = res.data;
        //console.log(res.data)
        state.timer = setInterval(increaseProcess ,500)
      
      })
    })
  
    return {
      loadComplated,
      resources,
      state,
      increaseProcess
    }
  }
})
</script>

<style scoped lang="css">
.page-bg-1{
    height: 100%;
    width: 100%;
    position: relative;
    background: #a11b0e;
}



.img-bg-1{
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0px;
}

.a-4{
    width: 70%;
    position: absolute;
    left: 15%;
    top: 4rem;
}

.title-1{
    width: 80%;
    position: absolute;
    left: 10%;
    top: 5rem;
}

.process-text{
    width: 100%;
    position: absolute;
    left: 0%;
    top: 14.3rem;
    color: white;
    text-align: center;
    font-size: 0.5rem;
}

.process-bg{
    width: 92%;
    position: absolute;
    left: 4%;
    top: 15rem;
}

.process-front{
    width: 10%;
    position: absolute;
    left: 4%;
    top: 15rem;
    height: 0.13rem;
}


.loading{
       width: 9rem;
       position: absolute;
       left: 8rem;
       bottom: 5.0rem;
}

.font-1{

}

.praise-bg{
    width: 18rem;
    height: 2.5rem;
    position: absolute;
    left: 3.8rem;
    top: 14rem;
}
.praise-div{
     width: 18rem;
      height: 2.5rem;
      position: absolute;
      left: 3.8rem;
      top: 14rem;
     color: white;
     font-size: 1rem;
     line-height: 2.5rem;
}


.map-1{
     width: 22rem;
     position: absolute;
     left: 1.9rem;
     top: 17.6rem;
}

.ma-1{
   width: 4rem;
       position: absolute;
       left: 1rem;
       bottom: 1rem;
}





.title-3{
    color: #3385ff;
    font-size: 1.6rem;
    text-align: center;
    width: 100%;
    position: absolute;
    top: 119rem;
    font-weight: bold;
    transition: all .1s linear;
}

.title-4{
    color: #f03726;
    font-size: 1.5rem;
    -webkit-text-stroke: 0.005rem white;
    text-align: center;
    width: 100%;
    position: absolute;
    top: 123rem;
    font-weight: bold;
    transition: all .1s linear;
}

.btn-1{
     width: 9.8rem;
     position: absolute;
     left: 8.0rem;
     top: 33.4rem;
     text-align: center;
     font-size: 1.7rem;
     color: white;
     background-color: #AD7923;
     border-radius: 0.4rem;
     height: 2.5rem;
     text-decoration-line: none;
}

.music-switch {
    width: 3.0rem;
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
}



</style>
