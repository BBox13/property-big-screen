<template>
  <div class="m-t-20px h-274px flex flex-col items-end">
    <div class="relative h-55px w-407px">
      <img :src="head" alt="" class="object-contain object-right-center" />
      <div class="absolute bottom-6px left-16px text-26px color-#fff">
        <span> 设备保养 </span>
        <span class="m-l-6px text-10px"> Equipment maintenance </span>
      </div>
    </div>

    <div class="w-407px flex flex-col border color-#fff">
      <div class="m-y-14px m-l-25px flex items-center">
        <img :src="icon" alt="" />
        <span class="m-x-13px text-20px">|</span>
        <span class="text-16.5px">设备保养总数</span>
      </div>
      <div class="m-l-28px flex justify-between">
        <div class="relative">
          <img :src="round" alt="" class="h-167px w-167px" />
          <div class="absolute left-50px top-60px flex flex-col items-center justify-center">
            <span class="text-30px font-bold"> 2888</span>
            <span class="text-12px">设备总数</span>
          </div>
        </div>
        <div class="flex flex-col justify-between m-r-35px">
          <div class="flex items-center flex-none">
            <div class="e-0-l w-40px h-40px m-r-5px"></div>
            <div class="e-0-r w-102px h-46px flex flex-col p-l-4px">
              <span class="text m-y-4px text-16.42px" style="--shadow-color:55,211,255">1280</span>
              <span class=" text-9.85px text-#dcdcdc">本月设备保养计划</span>
            </div>
          </div>
          <div class="flex items-center">
            <div class="e-1-l w-40px h-40px m-r-5px"></div>
            <div class="e-1-r w-102px h-46px flex flex-col p-l-4px">
              <span class="text m-y-3px text-16.42px" style="--shadow-color:55,255,234">1280</span>
              <span class="text-9.85px text-#dcdcdc">已保养设备数</span>
            </div>
          </div>
          <div class="flex items-center">
            <div class="e-2-l w-40px h-40px m-r-5px"></div>
            <div class="e-2-r w-102px h-46px flex flex-col p-l-4px">
              <span class="text m-y-2px text-16.42px" style="--shadow-color:255,229,124">1280</span>
              <span class="text-9.85px text-#dcdcdc">已维修设备数</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import head from '@/assets/head-2.png';
import round from '@/assets/e-0.png';
import icon from '@/assets/e-icon.png';
</script>

<style lang="scss" scoped>
.bg-bottom{
  background: url('@/assets/vibe-bottom.png') no-repeat;
  background-position: bottom right; /* 背景图片对齐到容器底部 */
}

.e-0-l{
 background-image: url('@/assets/ee-0-l.png');
}
.e-0-r{
 background-image: url('@/assets/ee-0-r.png');
}
.e-1-l{
 background-image: url('@/assets/ee-1-l.png');
}
.e-1-r{
 background-image: url('@/assets/ee-1-r.png');
}
.e-2-l{
 background-image: url('@/assets/ee-2-l.png');
}
.e-2-r{
 background-image: url('@/assets/ee-2-r.png');
}

.text{
    text-shadow:
    0 0 5px rgba(var(--shadow-color), 1),  /* 较轻的光晕 */
    0 0 10px rgba(var(--shadow-color), 0.9), /* 更强的光晕 */
    0 0 15px rgba(var(--shadow-color), 0.7); /* 更强的光晕 */
}
</style>
