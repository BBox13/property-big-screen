<template>
  <div class="h-268px flex flex-col items-end justify-between color-#fff">
    <div class="relative h-50px w-383px">
      <img :src="head" alt="" class="object-contain object-right-center" />
      <div class="absolute bottom-6px left-16px text-26px color-#fff">
        <span> 能耗分析 </span>
        <span class="m-l-6px text-10px"> Energy consumption analysis </span>
      </div>
    </div>
    <div class="m-t-21px h-46px w-100% flex justify-around text-14px">
      <div class="bg-border h-46px w-169px flex justify-center line-height-46px">
        <span class="line-height-52px">总费用</span>
        <span class="text-30px color-#1cf1fa">51668</span>
        <span class="line-height-52px">元</span>
      </div>
      <div class="bg-border h-46px w-169px flex justify-center line-height-46px">
        <span class="line-height-52px">碳排放量</span>
        <span class="text-30px color-#fb5a1a">51668</span>
        <span class="line-height-52px">吨</span>
      </div>
    </div>
    <div class="m-y-12px w-100% flex items-center justify-center">
      <img :src="left" />
      <span class="text-16px">能耗变化趋势</span>
      <img :src="right" />
    </div>
    <div ref="echartRef" class="m-t--30px h-220px w-400px flex-none"></div>
  </div>
</template>

<script setup lang="ts">
import head from '@/assets/head.png';
import left from '@/assets/energy-left.png';
import right from '@/assets/energy-right.png';

import * as echarts from 'echarts';
const echartRef = ref();

onMounted(() => {
  const myChart = echarts.init(echartRef.value);
  type EChartsOption = echarts.EChartsOption;
  let option: EChartsOption;
  option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    toolbox: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    legend: {
      data: [ '电费', '水费' ],  // 指定显示的图例项名称
      textStyle: {
        color: '#ffffff',  // 设置图例文字颜色
        fontSize: 12,      // 设置图例文字大小
      },
      right: '0',
      top: '15%',  // 设置图例的位置（可以调整）
      itemWidth: 12,  // 设置图例方块的宽度
      itemHeight: 8,  // 设置图例方块的高度
      icon: 'rect',   // 设置图例为方块形状
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: [
          '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'
        ],
        axisLine: {
          show: true,
          lineStyle: {
            color: '#20405c',
            width: 1
          }
        },
        axisLabel: {
          margin: 20,
          color: '#ffffff',
          fontSize: 9.8,
          fontWeight: 'bold',
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        splitLine: {
          show: true,
          lineStyle: {
            color: '#2b5162',
            width: 1
          }
        },
        axisLine: {
          show: true,  // 显示 Y 轴坐标线
          lineStyle: {
            color: '#20405c',  // 设置坐标线的颜色
            width: 2            // 设置坐标线的宽度
          } },
        axisLabel: {
          color: '#fff',
          fontSize: 12.8
        },
        splitNumber: 3
      }
    ],
    series: [
      {
        name: '电费',
        type: 'line',
        smooth: false,  // 设置为 false，使其显示为折线
        emphasis: {
          focus: 'series'
        },
        data: [
          120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90
        ],
        itemStyle: {
          color: '#ff8721'
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(255,206,82,0.3)' },
              { offset: 1, color: 'rgba(255,206,82,0.05)' }
            ])
          }
        }
      },
      {
        name: '水费',
        type: 'line',
        smooth: false,  // 设置为 false，使其显示为折线
        emphasis: {
          focus: 'series'
        },
        data: [
          150, 130, 115, 120, 100, 190, 180, 140, 145, 110, 120, 130
        ],
        itemStyle: {
          color: '#1cf1fb'  // 设置第二条线的颜色
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(28,241,251,0.3)' },
              { offset: 1, color: 'rgba(28,241,251,0.05)' }
            ])
          }
        }
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

.bg-border{
  background: url('@/assets/energy-border.png') no-repeat;
}
</style>
