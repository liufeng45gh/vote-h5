<template>
  <div class="module-a">{{ msg }}</div>
  <ul>
    <li class="module-desc">响应式以375的设计稿为准</li>
    <li class="module-desc">数据管理仓库vuex</li>
    <li class="module-desc">请求接口axios，axios放置于utils文件夹下</li>
    <li class="module-desc">引入的ui组件库为vant，建议按需引入组件，而非全局注入</li>
    <li class="module-desc">接口存放路径为apis</li>
    <li class="module-desc">环境参数配置在.env文件</li>
    <li class="module-desc">eslin相关校验配置完毕</li>
  </ul>
  <Button type="primary" text="已经引入vant组件" @click="handleShowStatus(1)" />
  <Overlay :show="isShow" @click="handleShowStatus(0)" />
</template>
<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import { Overlay, Button } from 'vant';

export default defineComponent({
  name: 'ModuleA',
  components: {
    Overlay,
    Button
  },
  setup() {
    const store = useStore();
    const msg = computed(() => store.state.moduleA.title);
    const isShow = ref(false);

    const handleShowStatus = (status) => {
      if (status) {
        isShow.value = true;
        store.commit('moduleA/MODULEA.CHANGE_TITLE', '遮罩显示');
      } else {
        isShow.value = false;
        store.commit('moduleA/MODULEA.CHANGE_TITLE', '遮罩隐藏');
      }
    };

    return {
      msg,
      isShow,
      handleShowStatus
    };
  }
});
</script>
<style lang="less" scoped>
.module-a {
  font-size: 18px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #232324;
  line-height: 24px;
  padding: 10px;
  box-sizing: border-box;
}
.module-desc {
  width: 100%;
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #999999;
  line-height: 18px;
  padding: 10px;
}
</style>
