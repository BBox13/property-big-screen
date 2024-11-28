<template>
  <div class="h-268px flex flex-col items-end justify-between">
    <div class="relative h-50px w-383px">
      <img :src="head" alt="" class="object-contain object-right-center" />
      <div class="absolute bottom-6px left-16px text-26px color-#fff">
        <span> 环境监测 </span>
        <span class="m-l-6px text-10px"> Environmental Monitoring </span>
      </div>
    </div>
    <div class="h-80px w-378px flex justify-between bg-bottom text-18px color-#fff">
      <div class="h-80px flex items-center">
        <div class="relative m-b-20px">
          <img src="@/assets/vibe-round.png" alt="" />
          <img class="absolute left-18px top-18px" src="@/assets/vibe-weather.png" />
        </div>
      </div>
      <div class="h-54px flex flex-col items-center justify-between">
        <span>多云转晴</span>
        <span class="heat">34℃</span>
      </div>
      <div class="h-54px flex flex-col items-center justify-between">
        <span>体感温度</span>
        <span>38℃</span>
      </div>
      <div class="h-54px flex flex-col items-center justify-between">
        <span>空气质量</span>
        <span>34</span>
      </div>
    </div>

    <div class="h-80px w-368px flex justify-between bg-bottom text-18px color-#fff">
      <div class="h-54px flex flex-col items-center justify-between">
        <span class="color-#46e5f1">PM2.5</span>
        <span>10μg/m³</span>
      </div>
      <div class="h-54px flex flex-col items-center justify-between">
        <span class="color-#46e5f1">AQI</span>
        <span>125</span>
      </div>
      <div class="h-54px flex flex-col items-center justify-between">
        <span class="color-#46e5f1">温度</span>
        <span>34℃</span>
      </div>
      <div class="h-54px flex flex-col items-center justify-between">
        <span class="color-#46e5f1">湿度</span>
        <span>34</span>
      </div>
      <div class="h-54px flex flex-col items-center justify-between">
        <span class="color-#46e5f1">风速</span>
        <span>25m/s</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import head from '@/assets/head.png';
</script>

<style lang="scss" scoped>
.bg-bottom{
  background: url('@/assets/vibe-bottom.png') no-repeat;
  background-position: bottom right; /* 背景图片对齐到容器底部 */
}

.heat{
  font-size: 30px; /* 字体大小 */
  font-weight: bold; /* 可选，设置字体粗细 */
  background: linear-gradient(to right, #6bb2ff, #83e9fe); /* 渐变色 */
  -webkit-background-clip: text; /* 让背景渐变色应用于文本 */
  color: transparent; /* 隐藏文本的原始颜色 */
}
</style>
