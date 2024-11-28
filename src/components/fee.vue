<template>
  <div class="m-t-28px">
    <div class="relative">
      <img :src="head" alt="" />
      <div class="absolute bottom-6px left-16px text-26px color-#fff">
        <span> 运营收费 </span>
        <span class="text-14px"> Operating fees </span>
      </div>
    </div>
    <div class="m-t-20px h-376px w-479px flex flex-col items-center border">
      <div class="m-l-auto m-r-8% m-t-20px h-64px w-382px flex items-center overflow-hidden color-#fff">
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
        <div ref="echartsRef" class="m-l-10px h-310px w-430px"></div>
        <div class="button-bg absolute right-5% top-10% m-t-5px h-13px w-40px flex items-center text-10px color-#fff line-height-13px">
          <span class="m-l-13px m-r-6px">周</span>
          <span class="icon-fluent:triangle-down-16-filled text-6px"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import head from '@/assets/head.png';
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
  // 图例设置
    legend: {
      type: 'scroll',            // 设置为滚动模式
      orient: 'horizontal',      // 水平排列
      top: '10%',                // 设置图例距离顶部的距离
      right: '16%',            // 设置图例居中
      textStyle: {
        color: '#fff',           // 图例文字颜色
        fontSize: 11,            // 图例文字大小
      },
      itemWidth: 11,             // 每个图例项矩形框的宽度
      itemHeight: 11,            // 每个图例项矩形框的高度
      itemGap: 11,               // 每个图例项之间的间距
      itemStyle: {
        borderRadius: 0,         // 确保矩形框没有圆角
      },
      icon: 'rect',
    },
    tooltip: {},
    dataset: {
      source: [
        [
          'feeType', '物业费', '车位费'
        ],
        [
          '周一', 43.3, 85.8
        ],
        [
          '周二', 83.1, 73.4
        ],
        [
          '周三', 86.4, 65.2
        ],
        [
          '周四', 72.4, 53.9
        ],
        [
          '周五', 72.4, 53.9
        ],
        [
          '周六', 72.4, 53.9
        ],
        [
          '周日', 72.4, 53.9
        ]
      ]
    },
    xAxis: {
      type: 'category',
      data: [
        '周一', '周二', '周三', '周四', '周五', '周六', '周日'
      ],
      axisLine: {
        show: true,  // 控制是否显示 X 轴轴线
        lineStyle: {
          color: '#2b5162',  // X 轴轴线颜色
          width: 2,  // 轴线宽度
        }
      },
      axisLabel: {
        color: '#dcdcdc',  // 设置 X 轴底部文字的颜色
        fontSize: 14,  // 设置 X 轴文字的大小
        fontFamily: 'Arial',  // 设置字体
        fontWeight: 'bold',  // 设置字体粗细
        padding: [
          10, 0, 0, 0
        ]
      },
    },
    yAxis: {
      type: 'value',
      axisLine: {
        show: true,  // 控制是否显示 Y 轴轴线
        lineStyle: {
          color: '#2b5162',  // Y 轴轴线颜色
          width: 2,  // 轴线宽度
        }
      },
      axisLabel: {
        color: '#fff',  // 设置 Y 轴刻度文字颜色
        fontSize: 14,  // 设置 Y 轴刻度文字大小
        padding: [
          0, 10, 0, 0
        ]
      },
      splitLine: {
        show: true,  // 显示网格线
        lineStyle: {
          color: '#2b5162',  // 网格线的颜色
          width: 1,  // 网格线的宽度
        }
      }
    },
    series: [
      {
        name: '物业费',
        type: 'bar',
        datasetIndex: 0, // 使用 dataset 中的第 0 个数据集（即 '物业费' 和 '车位费'）
        encode: {
          x: 'feeType', // x 轴对应的列是 'feeType'
          y: '物业费'   // y 轴对应的列是 '物业费'
        },
        itemStyle: {
          color: '#83467b', // 设置柱状条的填充颜色
          borderColor: '#cd5596', // 设置边框颜色
          borderWidth: 1 // 设置边框宽度
        }
      },
      {
        name: '车位费',
        type: 'bar',
        datasetIndex: 0,
        encode: {
          x: 'feeType',
          y: '车位费'  // y 轴对应的列是 '车位费'
        },
        itemStyle: {
          color: '#6bffef', // 设置柱状条的填充颜色
          borderColor: '#0084e1', // 设置边框颜色
          borderWidth: 1 // 设置边框宽度
        }
      }
    ],

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
    0 0 0 0.1px #12e7e8, /* 上边框 */
    0 0 0 0.1px #12e7e8 inset, /* 下边框 */
    0 0 0 0.1px #12e7e8, /* 左边框 */
    0 0 0 0.1px #12e7e8 inset; /* 右边框 */
}


.type-progress {
  // position: relative;
  flex: 1;
  height: 8px;
  /* 核心代码 */
  background: linear-gradient(to right, #001431 50%, transparent 50%) 0 0/8px
    100% repeat-x;
  transform: skew(30deg);
}

.type-progress-rect {
  width: 100%;
  height: 100%;
  /* 核心代码 */
  background: linear-gradient(to right, #00ffcc 50%, transparent 50%) 0 0/8px
    100% repeat-x;
}

.triangle-down {
  width: 0;
  height: 0;
  border-left: 4px solid transparent;   /* 左侧透明 */
  border-right: 4px solid transparent;  /* 右侧透明 */
  border-top: 6px solid #00ffcc;          /* 顶部实心白色，形成三角形 */
}
</style>
