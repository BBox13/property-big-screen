<template>
  <div class="m-t-28px">
    <div class="relative">
      <img :src="head" alt="" />
      <div class="absolute bottom-6px left-16px text-26px color-#fff">
        <span> 设备保养 </span>
        <span class="text-14px"> Equipment maintenance </span>
      </div>
    </div>
    <div class="m-t-20px h-376px w-479px flex flex-col border color-#fff">
      <div class="m-l-52px h-52px flex items-center">
        <img :src="icon" alt="" />
        <span class="m-x-13px text-20px">|</span>
        <span class="text-16.5px">设备保养总数</span>
      </div>
      <div class="m-l-28px w-394px flex justify-between">
        <div class="relative">
          <img :src="round" alt="" />
          <div class="absolute left-60px top-66px flex flex-col items-center justify-center">
            <span class="text-36px font-bold"> 2888</span>
            <span class="text-14px">设备总数</span>
          </div>
        </div>
        <div class="flex flex-col justify-between">
          <div class="e-1 h-57px w-178px">
            <div class="m-l-60px flex flex-col">
              <span class="text m-t-12px text-14px" style="--shadow-color:55,211,255">1280</span>
              <span class="m-t-8px text-12px text-#dcdcdc">本月设备保养计划</span>
            </div>
          </div>
          <div class="e-2 h-57px w-178px">
            <div class="m-l-60px flex flex-col">
              <span class="text m-t-12px text-14px" style="--shadow-color:55,255,234">1280</span>
              <span class="m-t-6px text-12px text-#dcdcdc">已保养设备数</span>
            </div>
          </div>
          <div class="e-3 h-57px w-178px">
            <div class="m-l-60px flex flex-col">
              <span class="text m-t-12px text-14px" style="--shadow-color:255,229,124">1280</span>
              <span class="m-t-4px text-12px text-#dcdcdc">已维修设备数</span>
            </div>
          </div>
        </div>
      </div>
      <div class="m-l-28px m-t-24px h-80px w-414px flex flex-col justify-between text-12.2px">
        <div class="flex items-center justify-between">
          <div class="w-105px">本月设备保养计划</div>
          <el-progress class="w-309px" :percentage="10" color="#00b7ee" :stroke-width="10" />
        </div>
        <div class="flex items-center justify-between">
          <div class="w-105px">已保养设备数</div>
          <el-progress class="w-309px" :percentage="10" color="#ff3bea" :stroke-width="10" />
        </div>
        <div class="flex items-center justify-between">
          <div class="w-105px">已保养设备数</div>
          <el-progress class="w-309px" :percentage="10" color="#00dfb5" :stroke-width="10" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import head from '@/assets/head.png';
import round from '@/assets/e-0.png';
import icon from '@/assets/e-icon.png';
</script>

<style lang="scss" scoped>
.button-bg{
  background: url('@/assets/button.png') ;
}

.border{
  box-shadow:
    0 0 0 0.1px #12e7e8, /* 上边框 */
    0 0 0 0.1px #12e7e8 inset, /* 下边框 */
    0 0 0 0.1px #12e7e8, /* 左边框 */
    0 0 0 0.1px #12e7e8 inset; /* 右边框 */
}

.e-1{
 background-image: url('@/assets/e-1.png');
}
.e-2{
 background-image: url('@/assets/e-2.png');
}
.e-3{
 background-image: url('@/assets/e-3.png');
}

.text{
    text-shadow:
    0 0 5px rgba(var(--shadow-color), 1),  /* 较轻的光晕 */
    0 0 10px rgba(var(--shadow-color), 0.9), /* 更强的光晕 */
    0 0 15px rgba(var(--shadow-color), 0.7); /* 更强的光晕 */
}
:deep(.el-progress-bar__outer){
  background-color: #0d4982;
  border-radius: inherit;
}

:deep(.el-progress-bar__inner){
  border-radius: inherit;
}

:deep(.el-progress__text){
  color: #fff;
  font-size: 10px !important;
}
</style>
