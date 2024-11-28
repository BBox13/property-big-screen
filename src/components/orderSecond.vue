<template>
  <div class="h-392px flex flex-col items-end justify-between">
    <div class="relative h-55px w-407px">
      <img :src="head" alt="" class="object-contain object-right-center" />
      <div class="absolute bottom-6px left-16px text-26px color-#fff">
        <span> 报修工单 </span>
        <span class="m-l-6px text-10px"> Warranty Work Order </span>
      </div>
    </div>

    <div class="h-404px w-406px flex flex-col items-center border color-#fff">
      <div class="m-t-13px w-369px flex justify-between">
        <div class="order-1 h-73px w-87px flex flex-col items-center p-r-6px">
          <span class="m-t-10px text-14.5px color-#1afcff font-900">1780</span>
          <span class="text-12px">工单总数</span>
        </div>
        <div class="order-2 h-73px w-92px flex flex-col items-center">
          <span class="m-t-10px text-14.5px color-#07ffcd font-900">729%</span>
          <span class="text-12px">完成率</span>
        </div>
        <div class="order-3 h-73px w-95px flex flex-col items-center p-l-6px">
          <span class="m-t-10px text-14.5px color-#bb36c0 font-900">72%</span>
          <span class="text-12px">客户投诉量</span>
        </div>
        <div class="order-4 h-73px w-83px flex flex-col items-center p-l-6px">
          <span class="m-t-10px text-14.5px color-#fca8a8 font-900">87</span>
          <span class="text-12px">周品检整改量</span>
        </div>
      </div>
      <div class="m-8-10px w-440px flex">
        <div class="relative m-l-10px">
          <div ref="leftRef" class="h-110px w-110px"></div>
          <div class="absolute left-38px top-60px flex flex-col items-center color-#00edff">
            <span class="text-18px">50%</span>
            <span class="m-t--4px text-12px">回访</span>
          </div>
          <div class="border-img absolute left-105px top-45px h-35px w-80px flex">
            <div class="w-42px flex flex-col items-center justify-between p-y-4px color-#ffb508">
              <span class="text-10px">已回访</span>
              <span class="text-12px">8111</span>
            </div>
            <div class="w-38px flex flex-col items-center justify-between p-y-4px color-#00ff84">
              <span class="text-10px">未回访</span>
              <span class="text-12px">8111</span>
            </div>
          </div>
        </div>
        <div class="relative m-l-110px">
          <div ref="rightRef" class="h-110px w-110px"></div>
          <div class="absolute left-38px top-60px flex flex-col items-center color-#ffd725">
            <span class="text-18px">50%</span>
            <span class="m-t--4px text-12px">验收</span>
          </div>
          <div class="border-img absolute left-105px top-45px h-35px w-80px flex">
            <div class="w-42px flex flex-col items-center justify-between p-y-4px color-#ffb508">
              <span class="text-10px">已验收</span>
              <span class="text-12px">8111</span>
            </div>
            <div class="w-38px flex flex-col items-center justify-between p-y-4px color-#00ff84">
              <span class="text-10px">未验收</span>
              <span class="text-12px">8111</span>
            </div>
          </div>
        </div>
      </div>
      <div class="relative m--30px">
        <div ref="acrossRef" class="h-166px w-406px"></div>
        <div class="absolute left-20px top-20px w-400px flex items-center justify-between">
          <div class="flex items-center">
            <img :src="icon" />
            <span class="m-l-10px text-18px">工单保修数量统计</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import head from '@/assets/head-2.png';
import icon from '@/assets/work-icon.png';
import * as echarts from 'echarts';
const leftRef = ref();
const rightRef = ref();
const acrossRef = ref();

onMounted(()=>{
  leftInit();
  rightInit();
  acrossInit();
});

function acrossInit(){
  const myChart = echarts.init(acrossRef.value);
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
    // legend: {
    //   data: [ 'Email' ]
    // },
    toolbox: {
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '0%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: [
          '周一', '周二', '周三', '周四', '周五', '周六', '周日'
        ],
        axisLine: {
          show: true,  // 控制是否显示 X 轴轴线
          lineStyle: {
            color: '#20405c',  // X 轴轴线颜色
            width: 1,  // 轴线宽度
          }
        },
        axisLabel: {
          margin: 15,
          color: '#ffffff',  // 设置 X 轴底部文字的颜色
          fontSize: 7.5,  // 设置 X 轴文字的大小
          fontWeight: 'bold',  // 设置字体粗细
        },
      },

    ],
    yAxis: [
      {
        type: 'value',
        splitLine: {
          show: true,  // 显示网格线
          lineStyle: {
            color: '#2b5162',  // 网格线的颜色
            width: 1,  // 网格线的宽度
          }
        },
        axisLabel: {
          color: '#cccccc',  // 设置 Y 轴刻度文字颜色
          fontSize: 7.64,  // 设置 Y 轴刻度文字大小
        },
      }
    ],
    series: [
      {
        type: 'line',
        smooth: true,  // 平滑曲线
        emphasis: {
          focus: 'series'
        },
        data: [
          120, 132, 101, 134, 90, 230, 210
        ],
        itemStyle: {
          color: '#ffce52'
        },
        areaStyle: {
          normal: {
            //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {

                offset: 0,
                color: 'rgba(255,206,82,0.3)'
              }, {
                offset: 1,
                color: 'rgba(255,206,82,0.05)'
              }
            ])

          }
        }, //区域颜色渐变

      }
    ]
  };

  myChart.setOption(option);
}

function leftInit(){
  const myChart = echarts.init(leftRef.value);
  type EChartsOption = echarts.EChartsOption;
  let option: EChartsOption;

  const color = new echarts.graphic.LinearGradient(0, 0, 1, 0, [
    {
      offset: 0,
      color: '#1c9cdc',
    },
    {
      offset: 1,
      color: '#31dff1',
    },
  ]);
  // colorSet倒过来
  const colorSet = [ [ 1, color ] ];

  option = {
    series: [
      {
        type: 'gauge',
        startAngle: -20,
        endAngle: 200,
        min: 100, // min和max倒过来
        max: 0,
        splitNumber: 10,
        clockwise: false, // 设置数据逆时针增长
        itemStyle: {
          color: "#093b8e", // 用于替代背景色的颜色
          borderColor: "#093b8e", // 用跟上面一样的颜色遮住露出的背景色
        },
        progress: {
          show: true,
          roundCap: false, // 只适用于平角
          width: 19
        },
        emphasis: {
        // 禁用高亮（从v5.3.0开始支持）低版本可以通过设置color为'inherit'或与普通状态相同颜色实现
          disabled: true
        },
        pointer: {
          show: false // 隐藏指针
        },
        axisLine: {
          roundCap: false, // 只适用于平角
          lineStyle: {
            width: 19,
            color: colorSet // 渐变色作为轴的背景色
          }
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        title: {
          show: false
        },
        detail: {
          show: false
        },
        data: [
          {
            value: 40
          }
        ]
      }
    ]
  };

  myChart.setOption(option);
}

function rightInit(){
  const myChart = echarts.init(rightRef.value);
  type EChartsOption = echarts.EChartsOption;
  let option: EChartsOption;

  const color = new echarts.graphic.LinearGradient(0, 0, 1, 0, [
    {
      offset: 0,
      color: '#ce9b30',
    },
    {
      offset: 1,
      color: '#ceb83a',
    },
  ]);
  // colorSet倒过来
  const colorSet = [ [ 1, color ] ];

  option = {
    series: [
      {
        type: 'gauge',
        startAngle: -20,
        endAngle: 200,
        min: 100, // min和max倒过来
        max: 0,
        splitNumber: 10,
        clockwise: false, // 设置数据逆时针增长
        itemStyle: {
          color: "#093b8e", // 用于替代背景色的颜色
          borderColor: "#093b8e", // 用跟上面一样的颜色遮住露出的背景色
        },
        progress: {
          show: true,
          roundCap: false, // 只适用于平角
          width: 19
        },
        emphasis: {
        // 禁用高亮（从v5.3.0开始支持）低版本可以通过设置color为'inherit'或与普通状态相同颜色实现
          disabled: true
        },
        pointer: {
          show: false // 隐藏指针
        },
        axisLine: {
          roundCap: false, // 只适用于平角
          lineStyle: {
            width: 19,
            color: colorSet // 渐变色作为轴的背景色
          }
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        title: {
          show: false
        },
        detail: {
          show: false
        },
        data: [
          {
            value: 40
          }
        ]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

<style lang="scss" scoped>
.bg-bottom{
  background: url('@/assets/vibe-bottom.png') no-repeat;
  background-position: bottom right; /* 背景图片对齐到容器底部 */
}

.order-1{
    background-image: url('@/assets/order-1-a.png');
}
.order-2{
    background-image: url('@/assets/order-2-a.png');
}
.order-3{
    background-image: url('@/assets/order-3-a.png');
}
.order-4{
    background-image: url('@/assets/order-4-a.png');
}

.border-img{
  background-image: url('@/assets/border.png');
}

.button-bg{
  background: url('@/assets/button.png') ;
}
</style>
