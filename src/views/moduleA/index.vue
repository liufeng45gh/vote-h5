<template>
  

   <van-swipe  :loop=false class="my-swipe" :height="screenHeight" :touchable=false :show-indicators=false  :stop-propagation=true @touchmove.prevent.stop="touchmoveStop" initial-swipe="0" vertical  ref="swiper">
      <van-swipe-item>
        <locadingStart @loadComplated="loadComplated">
        </locadingStart>
      </van-swipe-item>
      <van-swipe-item>
        <locadingSuccess>
        </locadingSuccess>
      </van-swipe-item>
 
    </van-swipe>

 
</template>
<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import { Overlay, Button } from 'vant';
import locadingStart from '@/views/moduleA/loadingStart.vue';
import locadingSuccess from '@/views/moduleA/loadSuccess.vue';
import { Swipe, SwipeItem } from 'vant';



export default defineComponent({
  name: 'ModuleA',
  components: {
    Overlay,
    Button,
    locadingStart,
    locadingSuccess
  },
  setup() {
   
    const screenHeight = window.innerHeight;

    const swiper : any= ref(Swipe.SwipeInstance)

    const touchmoveStop = () => {
      return false;
    }

    const loadComplated =()=>{
      swiper.value.swipeTo(1);
    }

    return {
    screenHeight,
    touchmoveStop,
    loadComplated,
    swiper
    };
  }
});
</script>
<style  scoped>

/* For demo */
 .my-swipe .van-swipe-item {
    color: #fff;

  }

</style>
