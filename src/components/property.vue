<template>
  <div class="h-384px flex flex-col items-end justify-between">
    <div class="relative h-55px w-407px">
      <img :src="head" alt="" class="object-contain object-right-center" />
      <div class="absolute bottom-6px left-16px text-26px color-#fff">
        <span> 物业收费 </span>
        <span class="m-l-6px text-10px"> Property fees </span>
      </div>
    </div>

    <div class="m-t-27px w-407px flex flex-col items-center border">
      <div class="h-50px w-362px flex items-center overflow-hidden color-#fff">
        <div class="h-100% w-178px flex flex-col justify-between">
          <div class="flex items-baseline">
            <span class="m-r-12px text-10.6px color-#fee49a">物业费数据展示</span>
            <span class="m-r-3px text-9.4px">同比</span>
            <span class="m-r-4px text-9.4px color-#f600ff">0.92%</span>
            <img :src="leftUp" alt="" />
          </div>
          <div>
            <span class="text-20px">12315648798</span>
            <span class="m-l-4px align-3px text-10.6px color-#eee">元</span>
          </div>
        </div>
        <img :src="line" alt="" />
        <div class="h-100% w-204px flex flex-col items-end justify-between">
          <div class="flex items-baseline">
            <span class="m-r-12px text-10.6px color-#aaddff">车位费数据展示</span>
            <span class="m-r-3px text-9.4px">同比</span>
            <span class="m-r-4px text-9.4px color-#f600ff">0.92%</span>
            <img :src="rightUp" alt="" />
          </div>
          <div>
            <span class="text-20px">12315648798</span>
            <span class="m-l-4px m-r-20px align-3px text-10.6px color-#eee">元</span>
            <img :src="eye" alt="" />
          </div>
        </div>
      </div>
      <div class="relative">
        <div class="absolute left-40px top-24px flex items-center text-18.3px color-#fff line-height-18.3px">
          <img class="m-r-6px h-15px w-14px" src="@/assets/fee-icon.png" />
          <span>物业费、停车费周统计</span>
        </div>
        <div ref="echartsRef" class="m-l-10px h-250px w-407px"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import head from '@/assets/head-2.png';
import line from '@/assets/line.png';
import leftUp from '@/assets/leftUp.png';
import rightUp from '@/assets/rightUp.png';
import eye from '@/assets/eye.png';
import * as echarts from 'echarts';

const echartsRef = ref();


onMounted(()=>{
  const myChart = echarts.init(echartsRef.value);
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
      left: '0%',
      right: '0%',
      bottom: '0%',
      containLabel: true
    },
    legend: {
      data: [ '物业费', '停车费' ],  // 指定显示的图例项名称
      textStyle: {
        color: '#ffffff',  // 设置图例文字颜色
        fontSize: 12,      // 设置图例文字大小
      },
      right: '0',
      top: '8%',  // 设置图例的位置（可以调整）
      itemWidth: 16,  // 设置图例方块的宽度
      itemHeight: 6,  // 设置图例方块的高度
      icon: 'rect',   // 设置图例为方块形状
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: [
          '周一', '周二', '周三', '周四', '周五', '周六', '周日'
        ],
        axisLine: {
          show: true,
          lineStyle: {
            color: '#00deff',
            width: 3
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
            color: '#3f4d60',
            width: 1
          }
        },
        axisLine: {
          show: true,  // 显示 Y 轴坐标线
          lineStyle: {
            color: '#00deff',  // 设置坐标线的颜色
            width: 3            // 设置坐标线的宽度
          }
        },
        axisLabel: {
          margin: 20,
          color: '#fff',
          fontSize: 12.8
        },
        splitNumber: 4  // 设置Y轴分割线为4条
      }
    ],
    series: [
      {
        name: '物业费',
        type: 'line',
        smooth: true,  // 设置为曲线
        emphasis: {
          focus: 'series'
        },
        data: [
          120, 132, 101, 134, 90, 230, 210
        ],
        itemStyle: {
          color: '#fff100'
        },
        symbol: 'none',  // 去除数据点
      },
      {
        name: '停车费',
        type: 'line',
        smooth: true,  // 设置为曲线
        emphasis: {
          focus: 'series'
        },
        data: [
          12, 200, 151, 132, 70, 120, 160
        ],
        itemStyle: {
          color: '#e4007f'
        },
        symbol: 'none',  // 去除数据点
      },
      {
        name: '水费',
        type: 'line',
        smooth: true,  // 设置为曲线
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
        },
        symbol: 'none',  // 去除数据点
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

.heat{
  font-size: 30px; /* 字体大小 */
  font-weight: bold; /* 可选，设置字体粗细 */
  background: linear-gradient(to right, #6bb2ff, #83e9fe); /* 渐变色 */
  -webkit-background-clip: text; /* 让背景渐变色应用于文本 */
  color: transparent; /* 隐藏文本的原始颜色 */
}
</style>
