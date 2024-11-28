<template>
  <div class="m-t-28px">
    <div class="relative">
      <img :src="head" alt="" />
      <div class="absolute bottom-6px left-16px text-26px color-#fff">
        <span> 智能机器人 </span>
        <span class="text-14px"> intelligent robot </span>
      </div>
    </div>
    <div class="relative m-t-20px h-376px w-479px flex flex-col items-center border color-#fff">
      <div class="m-t-20px flex">
        <div class="w-140px p-l-10px p-t-20px">
          <img :src="car" alt="" />
        </div>
        <div class="w-329px flex flex-col">
          <div class="flex items-center justify-between p-r-20px text-13.2px">
            <div class="r-bg h-44px w-102px flex items-center">
              <span class="p-l-24px">实时画面</span>
            </div>
            <div class="r-bg h-44px w-102px flex items-center color-#ffd725">
              <span class="p-l-24px">预警信息</span>
            </div>
            <div class="r-bg h-44px w-102px flex items-center">
              <span class="p-l-24px">机器人状态</span>
            </div>
          </div>
          <div class="h-153px w-310px flex items-center justify-between container">
            <div class="corner top-left"></div>
            <div class="corner top-right"></div>
            <div class="corner bottom-left"></div>
            <div class="corner bottom-right"></div>
            <div ref="echartsRef" class="m-l-8px h-166px w-166px"></div>
            <div class="m-r-20px h-117px w-105px flex flex-wrap items-center justify-between text-6.88px color-#2aaef2">
              <div class="h-36px w-46px flex flex-col items-center justify-around bg-#00bb9f text-#fff">
                <span>红外高温</span>
                <span>一级优</span>
              </div>
              <div class="h-36px w-46px flex flex-col items-center justify-around bg-#0a2043">
                <span>黑名单人员</span>
                <span>二级优</span>
              </div>
              <div class="h-36px w-46px flex flex-col items-center justify-around bg-#0a2043">
                <span>温度湿度</span>
                <span>三级优</span>
              </div>
              <div class="h-36px w-46px flex flex-col items-center justify-around bg-#0a2043">
                <span>噪声超高</span>
                <span>四级优</span>
              </div>
              <div class="h-36px w-46px flex flex-col items-center justify-around bg-#0a2043">
                <span>人员倒地</span>
                <span>五级优</span>
              </div>
              <div class="h-36px w-46px flex flex-col items-center justify-around bg-#0a2043">
                <span>垃圾桶溢出</span>
                <span>六级优</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="m-t-13px flex items-center justify-between p-x-26px">
        <div class="r-b h-131px w-214px"></div>
        <div class="r-b h-131px w-214px"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import head from '@/assets/head.png';
import car from '@/assets/car.png';
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
        radius: 34,  // 调整半径
        startAngle: 90,
        splitNumber: 3,
        shape: 'circle',
        axisName: {
          fontSize: 9,
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

.button-bg{
  background: url('@/assets/button.png') ;
}

.border{
  box-shadow:
    0 0 0 0.1px #449aea, /* 上边框 */
    0 0 0 0.1px #449aea inset, /* 下边框 */
    0 0 0 0.1px #449aea, /* 左边框 */
    0 0 0 0.1px #449aea inset; /* 右边框 */
}

.r-bg{
    background-image: url('@/assets/r-icon.png') ;
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
      width: 10px;
      height: 10px;
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
