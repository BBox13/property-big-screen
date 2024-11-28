<template>
  <div>
    <div class="relative h-50px">
      <img :src="head" alt="" />
      <div class="absolute bottom-6px left-16px text-26px color-#fff">
        <span> 各业态收入 </span>
        <span class="text-14px"> Types of income </span>
      </div>
    </div>
    <div class="relative m-t-24px h-404px w-479px flex flex-col items-center justify-center border text-12px color-#fff">
      <img src="@/assets/income.png" alt="" />
      <div class="absolute left-24px top-66px">
        <span>学校教育</span>
        <span class="text-18px color-#fffc00"> 25%</span>
      </div>
      <div class="absolute left-24px top-146px">
        <span>产业园区</span>
        <span class="text-18px color-#fffc00"> 25%</span>
      </div>
      <div class="absolute left-24px top-242px">
        <span>社区街道</span>
        <span class="text-18px color-#fffc00"> 25%</span>
      </div>
      <div class="absolute left-24px top-320px">
        <span>办公楼宇</span>
        <span class="text-18px color-#fffc00"> 25%</span>
      </div>
      <div class="absolute right-24px top-69px">
        <span>康养医院</span>
        <span class="text-18px color-#fffc00"> 25%</span>
      </div>
      <div class="absolute right-24px top-149px">
        <span>城市服务</span>
        <span class="text-18px color-#fffc00"> 25%</span>
      </div>
      <div class="absolute right-24px top-246px">
        <span>文旅景区</span>
        <span class="text-18px color-#fffc00"> 25%</span>
      </div>
      <div class="absolute right-24px top-323px">
        <span>居民住宅 </span>
        <span class="text-18px color-#fffc00"> 25%</span>
      </div>
      <div class="absolute left-180px top-185px flex flex-col items-center">
        <span class="text-28.8px color-#ff3bea font-extrabold">19222 </span>
        <span class="text-12px color-#dbe5fa"> 八大业态</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import head from '@/assets/head.png';
</script>

<style lang="scss" scoped>
.border{
  box-shadow:
    0 0 0 0.1px #12e7e8, /* 上边框 */
    0 0 0 0.1px #12e7e8 inset, /* 下边框 */
    0 0 0 0.1px #12e7e8, /* 左边框 */
    0 0 0 0.1px #12e7e8 inset; /* 右边框 */
}
</style>
