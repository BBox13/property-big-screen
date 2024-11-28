<template>
  <div>
    <div class="relative h-50px">
      <img :src="head" alt="" />
      <div class="absolute bottom-6px left-16px text-26px color-#fff">
        <span> 项目分布 </span>
        <span class="text-14px"> Project distribution </span>
      </div>
    </div>
    <div class="m-t-24px h-404px w-479px flex flex-col items-center justify-center border">
      <div class="h-357px w-437px flex items-center justify-center container">
        <div class="corner top-left"></div>
        <div class="corner top-right"></div>
        <div class="corner bottom-left"></div>
        <div class="corner bottom-right"></div>
        <div class="h-310px w-400px text-14px font-500">
          <div class="m-b-10px flex color-#00ffcc">
            <span class="m-l-16px w-72px">项目名称</span>
            <span class="w-88px text-center">期数</span>
            <span class="w-88px text-center">地点</span>
            <span class="w-88px text-center">业态</span>
            <span class="w-88px text-center">负责人</span>
          </div>
          <vue3-seamless-scroll class="h-280px overflow-hidden" :list="scrollList" :hover="true" :step="0.4" :wheel="true" :is-watch="true">
            <div
              v-for="(item, index) in scrollList"
              :key="index"
              class="gradient h-40px flex items-center rounded-4px color-#fff"
              :class="item.color"
            >
              <span class="m-l-16px w-72px">项目名称</span>
              <span class="w-88px text-center">期数</span>
              <span class="w-88px text-center">地点</span>
              <span class="w-88px text-center">业态</span>
              <span class="w-88px text-center">负责人</span>
            </div>
          </vue3-seamless-scroll>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import head from '@/assets/head.png';
import { Vue3SeamlessScroll } from "vue3-seamless-scroll";

const scrollList = [
  {
    color: '',
  },
  {
    color: '',
  },
  {
    color: 'blue',
  },
  {
    color: '',
  },
  {
    color: '',
  },
  {
    color: '',
  },
  {
    color: 'red',
  },
  {
    color: '',
  },
  {
    color: '',
  },
  {
    color: '',
  },
  {
    color: 'yellow',
  },

];
</script>

<style lang="scss" scoped>
.border{
  box-shadow:
    0 0 0 0.1px #12e7e8, /* 上边框 */
    0 0 0 0.1px #12e7e8 inset, /* 下边框 */
    0 0 0 0.1px #12e7e8, /* 左边框 */
    0 0 0 0.1px #12e7e8 inset; /* 右边框 */
}
.container{
  background-color: rgba(0, 24, 67, 0.5);
  position: relative;

    /* 四个角的L型 */
    .corner {
      position: absolute;
      width: 10px;
      height: 10px;
    }

    /* 左上角 */
    .top-left {
      top: 0;
      left: 0;
      border-left: 2px solid #12e7e8;
      border-top: 2px solid #12e7e8;
    }

    /* 右上角 */
    .top-right {
      top: 0;
      right: 0;
      border-right: 2px solid #12e7e8;
      border-top: 2px solid #12e7e8;
    }

    /* 左下角 */
    .bottom-left {
      bottom: 0;
      left: 0;
      border-left: 2px solid #12e7e8;
      border-bottom: 2px solid #12e7e8;
    }

    /* 右下角 */
    .bottom-right {
      bottom: 0;
      right: 0;
      border-right: 2px solid #12e7e8;
      border-bottom: 2px solid #12e7e8;
    }
}

.blue {
  background: linear-gradient(to right,
    rgba(255, 255, 255, 0) 0%,     /* 左侧渐变透明 */
    #0d7b8b 50%,        /* 中间深蓝色 */
    rgba(255, 255, 255, 0) 100%);  /* 右侧渐变透明 */
  /* 这里 rgba(255, 255, 255, 0) 表示透明，rgba(0, 0, 255, 1) 表示纯蓝色 */
}

.red {
  background: linear-gradient(to right,
    rgba(255, 255, 255, 0) 0%,     /* 左侧渐变透明 */
    #80187f 50%,        /* 中间深蓝色 */
    rgba(255, 255, 255, 0) 100%);  /* 右侧渐变透明 */
  /* 这里 rgba(255, 255, 255, 0) 表示透明，rgba(0, 0, 255, 1) 表示纯蓝色 */
}

.yellow {
  background: linear-gradient(to right,
    rgba(255, 255, 255, 0) 0%,     /* 左侧渐变透明 */
    #606b4d 50%,        /* 中间深蓝色 */
    rgba(255, 255, 255, 0) 100%);  /* 右侧渐变透明 */
  /* 这里 rgba(255, 255, 255, 0) 表示透明，rgba(0, 0, 255, 1) 表示纯蓝色 */
}
</style>
