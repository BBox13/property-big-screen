<template>
  <div class="m-t-15px h-268px flex flex-col items-end justify-between">
    <div class="relative h-55px w-407px">
      <img :src="head" alt="" class="object-contain object-right-center" />
      <div class="absolute bottom-6px left-16px text-26px color-#fff">
        <span> 停车管理 </span>
        <span class="m-l-6px text-10px"> Parking management</span>
      </div>
    </div>

    <div class="m-r-20px h-40px w-353px flex justify-between">
      <div>
        <span class="text-14px color-#41deee">固定车位数量</span>
        <span class="text-24px color-#ffca00 font-900 tracking--1px">1899</span>
      </div>
      <div>
        <span class="text-14px color-#41deee">月租车位数量</span>
        <span class="text-24px color-#ffca00 font-900 tracking--1px">1899</span>
      </div>
    </div>
    <div class="bg-car relative h-160px w-370px">
      <div class="absolute left-10px top-50px text-24px color-#30fdff">325</div>
      <div class="absolute right-10px top-50px text-24px color-#30fdff">325</div>
      <div class="absolute left-160px top-110px text-24px color-#fff">1988</div>
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

.bg-car{
  background: url('@/assets/car-total.png') no-repeat;
}
</style>
