<template>
  <div class="m-t-28px">
    <div class="relative">
      <img :src="head" alt="" />
      <div class="absolute bottom-6px left-16px text-26px color-#fff">
        <span> 安保巡检 </span>
        <span class="text-14px"> Security inspection </span>
      </div>
    </div>
    <div class="relative m-t-20px h-376px w-479px flex flex-col items-center border">
      <div class="m-t-20px w-384px flex items-center justify-between">
        <div class="flex flex-col items-center">
          <el-progress :width="84" stroke-linecap="square" class="progressClass" type="dashboard" :percentage="58" :stroke-width="14">
            <div style="--shadow-color:23,109,188" class="text text-20px color-#fff">123</div>
          </el-progress>
          <svg class="h-0 w-0">
            <defs>
              <linearGradient id="dismantle" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color: #1c9cdc; stop-opacity:1" />
                <stop offset="100%" style="stop-color: #31dff1;stop-opacity:1" />
              </linearGradient>
            </defs>
          </svg>
          <span class="m-t--10px text-14px color-#d7e5e6">隐患整改数</span>
          <img :src="inspectionLine" />
        </div>
        <div class="flex flex-col items-center">
          <el-progress :width="84" stroke-linecap="square" class="progressClass" type="dashboard" :percentage="58" :stroke-width="14">
            <div style="--shadow-color:230,218,133" class="text text-20px color-#fff">123</div>
          </el-progress>
          <svg class="h-0 w-0">
            <defs>
              <linearGradient id="dismantle" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color: #1c9cdc; stop-opacity:1" />
                <stop offset="100%" style="stop-color: #31dff1;stop-opacity:1" />
              </linearGradient>
            </defs>
          </svg>
          <span class="m-t--10px text-14px color-#d7e5e6">已整改数</span>
          <img :src="inspectionLine" />
        </div>
        <div class="flex flex-col items-center">
          <el-progress :width="84" stroke-linecap="square" class="progressClass" type="dashboard" :percentage="58" :stroke-width="14">
            <div style="--shadow-color:58,180,161" class="text text-20px color-#fff">123</div>
          </el-progress>
          <svg class="h-0 w-0">
            <defs>
              <linearGradient id="dismantle" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color: #1c9cdc; stop-opacity:1" />
                <stop offset="100%" style="stop-color: #31dff1;stop-opacity:1" />
              </linearGradient>
            </defs>
          </svg>
          <span class="m-t--10px text-14px color-#d7e5e6">隐患整改数</span>
          <img :src="inspectionLine" />
        </div>

        <div class="button-bg absolute right-10px top-10px m-t-5px h-13px w-40px flex items-center text-10px color-#fff line-height-13px">
          <span class="m-l-13px m-r-6px">日</span>
          <span class="icon-fluent:triangle-down-16-filled text-6px"></span>
        </div>
      </div>

      <div class="m-x-auto m-t-30px w-320px flex items-center justify-between text-10px color-#fff">
        <div class="relative">
          <img :src="inspectionLeftLabel" />
          <div class="absolute right-0 top-12px w-80px flex flex-col items-center justify-between">
            <span>计划巡检数</span>
            <span class="text-24px font-bold">53</span>
          </div>
        </div>
        <div class="relative">
          <img :src="inspectionRightLabel" />
          <div class="absolute right-0 top-12px w-80px flex flex-col items-center justify-between">
            <span>完成率</span>
            <div>
              <span class="m-l-10px text-24px font-bold">53</span>
              <span>%</span>
            </div>
          </div>
        </div>
      </div>
      <div class="m-r-160px m-t--30px">
        <pie3D :data="pieData" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import head from '@/assets/head.png';
import inspectionLine from '@/assets/inspectionLine.png';
import inspectionLeftLabel from '@/assets/inspectionLeftLabel.png';
import inspectionRightLabel from '@/assets/inspectionRightLabel.png';
import * as echarts from 'echarts';


const pieData = ref<Array<any>>([
  {
    name: "未启动",
    value: 30,
  },
  {
    name: "巡检中",
    value: 40,
  },
  {
    name: "已完成",
    value: 60,
  },
]);
</script>

<style lang="scss" scoped>
.progressClass {
  position: relative;
  :deep(svg > path:nth-child(2)) {
    stroke: url(#dismantle) !important;
  }
  :deep(svg > path:nth-child(1)) {
    stroke: #023f5f;

  }
}

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

.text{
    text-shadow:
    0 0 5px rgba(var(--shadow-color), 1),  /* 较轻的光晕 */
    0 0 10px rgba(var(--shadow-color), 0.9), /* 更强的光晕 */
    0 0 15px rgba(var(--shadow-color), 0.7); /* 更强的光晕 */
}
</style>
