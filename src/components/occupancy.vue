<template>
  <div class="m-t-38px h-292px flex flex-col items-end justify-between color-#fff">
    <div class="relative h-50px w-383px">
      <img :src="head" alt="" class="object-contain object-right-center" />
      <div class="absolute bottom-0px left-16px text-26px color-#fff">
        <span> 用户、入住情况 </span>
        <span class="m-l-6px text-10px"> User occupancy status </span>
      </div>
    </div>
    <div class="m-t-26px h-60px w-342px flex gap-40px">
      <div class="h-60px w-128px flex flex-col justify-between">
        <div class="flex items-end justify-between">
          <span class="text-11.5px">用户总数</span>
          <div class="flex items-end text-10px color-#fcff00">
            <span>28.9%</span>
            <div class="icon-mdi:arrow-up-bold m-l-2px text-14px color-#fcff00"></div>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <div class="h-37px w-21px border-1px border-#000 rounded-3px border-solid bg-#052457 text-center text-28.8px">2</div>
          <div class="h-37px w-21px border-1px border-#000 rounded-3px border-solid bg-#052457 text-center text-28.8px">2</div>
          <div class="h-37px w-21px border-1px border-#000 rounded-3px border-solid bg-#052457 text-center text-28.8px">2</div>
          <div class="h-37px w-21px border-1px border-#000 rounded-3px border-solid bg-#052457 text-center text-28.8px">2</div>
          <div class="h-37px w-21px border-1px border-#000 rounded-3px border-solid bg-#052457 text-center text-28.8px">2</div>
        </div>
      </div>
      <div class="h-60px w-128px flex flex-col justify-between">
        <div class="flex items-end justify-between">
          <span class="text-11.5px">认证用户</span>
          <div class="flex items-end text-10px color-#fcff00">
            <span>28.9%</span>
            <div class="icon-mdi:arrow-up-bold m-l-2px text-14px color-#fcff00"></div>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <div class="h-37px w-21px border-1px border-#000 rounded-3px border-solid bg-#00144e text-center text-28.8px">2</div>
          <div class="h-37px w-21px border-1px border-#000 rounded-3px border-solid bg-#00144e text-center text-28.8px">2</div>
          <div class="h-37px w-21px border-1px border-#000 rounded-3px border-solid bg-#00144e text-center text-28.8px">2</div>
          <div class="h-37px w-21px border-1px border-#000 rounded-3px border-solid bg-#00144e text-center text-28.8px">2</div>
          <div class="h-37px w-21px border-1px border-#000 rounded-3px border-solid bg-#00144e text-center text-28.8px">2</div>
        </div>
      </div>
    </div>
    <div class="relative m-t-15px h-141px w-100% flex justify-between">
      <div class="absolute left-0 top-0 h-132px w-132px border-3px border-#0a6176 rounded-50% border-solid"></div>
      <div ref="echartRef" class="h-132px w-132px"></div>
      <div class="bg-border h-120px w-248px text-14px">
        <div class="flex flex-wrap p-4px">
          <div class="h-56px w-120px flex flex-col justify-between p-y-6px">
            <div class="flex items-center">
              <div class="m-x-15px h-12px w-12px bg-#00e4ff"></div>
              <span>未入住率</span>
            </div>
            <span class="m-l-50px text-18px color-#00e4ff">306</span>
          </div>
          <div class="h-56px w-120px flex flex-col justify-between p-y-6px">
            <div class="flex items-center">
              <div class="m-x-15px h-12px w-12px bg-#f53f8c"></div>
              <span>入住率</span>
            </div>
            <span class="m-l-50px text-18px color-#f53f8c">306</span>
          </div>
          <div class="h-56px w-120px flex flex-col justify-between p-y-6px">
            <div class="flex items-center">
              <div class="m-x-15px h-12px w-12px bg-#ffae00"></div>
              <span>月迁出数量</span>
            </div>
            <span class="m-l-50px text-18px color-#ffae00">306</span>
          </div>
          <div class="h-56px w-120px flex flex-col justify-between p-y-6px">
            <div class="flex items-center">
              <div class="m-x-15px h-12px w-12px bg-#158efe"></div>
              <span>月迁入数量</span>
            </div>
            <span class="m-l-50px text-18px color-#158efe">306</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import head from '@/assets/head.png';
import * as echarts from 'echarts';
const echartRef = ref();

onMounted(() => {
  const myChart = echarts.init(echartRef.value);
  type EChartsOption = echarts.EChartsOption;
  let option: EChartsOption;
  option = {
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: [ '55%', '80%' ],  // 饼图的半径范围
        avoidLabelOverlap: false,
        padAngle: 5,
        itemStyle: {
          borderRadius: 0, // 禁用圆角
        },
        label: {
          show: false, // 显示标签
          position: 'center', // 标签放置在中心
          fontSize: 20, // 设置中间文字的字体大小
          fontWeight: 'bold', // 设置中间文字的字体粗细
          color: '#333' // 设置中间文字颜色
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false // 不显示标签的连线
        },
        color: [
          '#52ffff', '#f53f8c', '#158efe', '#ffae00'
        ],
        data: [
          { value: 735, name: '未入住率' },
          { value: 580, name: '入住率' },
          { value: 484, name: '月迁入数量' },
          { value: 300, name: '月迁出数量' }
        ]
      }
    ],
    graphic: [
      {
        type: 'text',
        left: 'center',
        top: '40%',
        style: {
          text: '90%', // 第一行文字
          fontSize: 25,  // 字体大小
          fill: '#fffc00'  // 第一行文字颜色（例如：番茄色）
        }
      },
      {
        type: 'text',
        left: 'center',
        top: '60%',
        style: {
          text: '入住率', // 第二行文字
          fontSize: 12,  // 第二行文字的字体大小
          fill: '#fff',  // 第二行文字颜色（例如：钢铁蓝）
        },
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
  background: url('@/assets/occupancy-border.png') no-repeat;
}
</style>
