<template>
  <div class="m-t-14px h-263px flex flex-col items-end justify-between">
    <div class="relative h-55px w-407px">
      <img :src="head" alt="" class="object-contain object-right-center" />
      <div class="absolute bottom-6px left-16px text-26px color-#fff">
        <span> 出入监控 </span>
        <span class="m-l-6px text-10px"> intelligent robot </span>
      </div>
    </div>

    <div class="h-69px flex items-center self-start text-16px color-#fff">
      <img src="@/assets/camera.png" class="m-l-30px" />
      <span>摄像头总数</span>
      <span class="m-l-6px m-r-20px text-24px color-#34fff8">462</span>
      <span>个</span>
    </div>
    <div class="h-144px w-409px flex">
      <img src="@/assets/r-b-2.png" />
      <img src="@/assets/r-b-2.png" />
    </div>
  </div>
</template>

<script setup lang="ts">
import head from '@/assets/head-2.png';
</script>

<style lang="scss" scoped>
.bg-bottom{
  background: url('@/assets/vibe-bottom.png') no-repeat;
  background-position: bottom right; /* 背景图片对齐到容器底部 */
}
</style>
