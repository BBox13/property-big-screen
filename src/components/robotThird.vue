<template>
  <div class="m-t-25px h-242px flex flex-col items-end justify-between">
    <div class="relative h-55px w-407px">
      <img :src="head" alt="" class="object-contain object-right-center" />
      <div class="absolute bottom-6px left-16px text-26px color-#fff">
        <span> 智能机器人 </span>
        <span class="m-l-6px text-10px"> intelligent robot </span>
      </div>
    </div>

    <div class="w-407px flex items-start justify-between">
      <img :src="car" alt="" class="h-160px w-120px" />
      <div class="w-253px flex flex-col">
        <div class="flex items-center justify-between text-11px color-#fff">
          <div class="r-bg m-r-4px h-45px w-109px flex items-center">
            <span class="p-l-11px">实时画面</span>
          </div>
          <div class="r-bg m-r-4px h-45px w-109px flex items-center color-#ffd725">
            <span class="p-l-11px">预警信息</span>
          </div>
          <div class="r-bg m-r-4px h-45px w-109px flex items-center">
            <span class="p-l-11px">机器人状态</span>
          </div>
        </div>
        <div class="h-126px w-253px flex items-center justify-between container">
          <div class="corner top-left"></div>
          <div class="corner top-right"></div>
          <div class="corner bottom-left"></div>
          <div class="corner bottom-right"></div>
          <div ref="echartsRef" class="m-l-2px h-140px w-140px"></div>
          <div class="m-r-16px h-117px w-87px flex flex-wrap items-center justify-between text-6.88px color-#2aaef2">
            <div class="h-31px w-38px flex flex-col items-center justify-around bg-#00bb9f text-#fff">
              <span>红外高温</span>
              <span>一级优</span>
            </div>
            <div class="h-31px w-38px flex flex-col items-center justify-around bg-#0a2043">
              <span>黑名单人员</span>
              <span>二级优</span>
            </div>
            <div class="h-31px w-38px flex flex-col items-center justify-around bg-#0a2043">
              <span>温度湿度</span>
              <span>三级优</span>
            </div>
            <div class="h-31px w-38px flex flex-col items-center justify-around bg-#0a2043">
              <span>噪声超高</span>
              <span>四级优</span>
            </div>
            <div class="h-31px w-38px flex flex-col items-center justify-around bg-#0a2043">
              <span>人员倒地</span>
              <span>五级优</span>
            </div>
            <div class="h-31px w-38px flex flex-col items-center justify-around bg-#0a2043">
              <span>垃圾桶溢出</span>
              <span>六级优</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import head from '@/assets/head-2.png';
import car from '@/assets/car-2.png';

import * as echarts from 'echarts';

const echartsRef = ref();


onMounted(()=>{
  const myChart = echarts.init(echartsRef.value);
  type EChartsOption = echarts.EChartsOption;
  let option: EChartsOption;

  option = {
    color: [ '#28ce57' ], // 保留颜色配置
    legend: {},
    radar: [
      {
        indicator: [
          { text: '红外高温',  color: '#16ffdc'  },  // 红外高温标签颜色
          { text: '温度湿度', color: '#fff' },  // 温度湿度标签颜色
          { text: '人员倒地', color: '#fff' },  // 人员倒地标签颜色
          { text: '垃圾桶溢出识别', color: '#fff' },  // 垃圾桶溢出识别标签颜色
          { text: '噪音超高', color: '#fff' },  // 噪音超高标签颜色
          { text: '黑名单人员', color: '#fff' },  // 黑名单人员标签颜色
        ],
        nameGap: 5,
        center: [ '50%', '50%' ],  // 将雷达图居中
        radius: 30,  // 调整半径
        startAngle: 90,
        splitNumber: 3,
        shape: 'circle',
        axisName: {
          fontSize: 8,
          color: '#fff',
        },

        axisLine: {
          lineStyle: {
            color: 'rgba(211, 253, 250, 0)'  // 去除轴线
          }
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(188, 118, 12, 1)'  // 设置交叉线颜色
          }
        },
        splitArea: {
          areaStyle: {
            color: [ 'transparent' ]  // 确保背景透明
          }
        }
      }
    ],
    series: [
      {
        type: 'radar',
        emphasis: {
          lineStyle: {
            width: 4
          }
        },
        data: [
          {
            value: [
              100, 80, 60, 40, 20, 20
            ],  // 设置数据
            lineStyle: {
              width: 3,  // 设置线条宽度
              color: '#28ce57'  // 设置线条颜色
            },
            symbol: 'circle',  // 设置连接点为圆形
            symbolSize: 8,  // 设置圆点大小
            areaStyle: {
              opacity: 0  // 不显示填充区域
            }
          }
        ]
      }
    ]
  };

  myChart.setOption(option);
});
</script>

<style lang="scss" scoped>
.bg-bottom{
  background: url('@/assets/vibe-bottom.png') no-repeat;
  background-position: bottom right; /* 背景图片对齐到容器底部 */
}


.r-bg{
    background-image: url('@/assets/r-icon-2.png') ;
    background-position: right center;  /* 从右边开始显示背景 */
    background-size: cover;  /* 让背景图像完全覆盖容器 */
    background-repeat: no-repeat;  /* 防止背景图片重复 */
}

.r-b{
    background-image: url('@/assets/r-b.png') ;
    background-position: right center;  /* 从右边开始显示背景 */
    background-size: cover;  /* 让背景图像完全覆盖容器 */
    background-repeat: no-repeat;  /* 防止背景图片重复 */
}

.container{
  background-color: rgba(2, 54, 93, 0.5);
  position: relative;

    /* 四个角的L型 */
    .corner {
      position: absolute;
      width: 6px;
      height: 6px;
    }

    /* 左上角 */
    .top-left {
      top: 0;
      left: 0;
      border-left: 2px solid #449aea;
      border-top: 2px solid #449aea;
    }

    /* 右上角 */
    .top-right {
      top: 0;
      right: 0;
      border-right: 2px solid #449aea;
      border-top: 2px solid #449aea;
    }

    /* 左下角 */
    .bottom-left {
      bottom: 0;
      left: 0;
      border-left: 2px solid #449aea;
      border-bottom: 2px solid #449aea;
    }

    /* 右下角 */
    .bottom-right {
      bottom: 0;
      right: 0;
      border-right: 2px solid #449aea;
      border-bottom: 2px solid #449aea;
    }
}
</style>
