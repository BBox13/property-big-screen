<template>
  <div class="popup-house-bg fixed left-0 top-0 z-2 h-1080px w-3840px flex items-center justify-center">
    <div class="bg-inner relative h-1080px w-1838px flex flex-col">
      <div class="absolute right-55px top-59px" @click="emits('closePopup')">
        <img src="@/assets/x.png" />
      </div>
      <div class="h-660px w-1838px flex justify-between bg-center">
        <div class="m-l-60px m-t-128px h-660px w-380px">
          <div class="flex items-center">
            <div class="line"></div>
            <span class="text-24.7px color-#fff line-height-24.7px">居民住宅项目数量</span>
          </div>
          <div class="bg-border m-l-6px m-t-28px h-81px w-307px flex items-center justify-end">
            <span class="text-54.25px color-#13f1cf">1003612</span>
            <span class="m-x-20px m-t-24px text-12.25px color-#13f1cf">项</span>
          </div>

          <div class="m-t-30px w-360px flex items-center justify-between">
            <div class="w-312px flex flex-col">
              <div class="flex items-center justify-between">
                <div class="m-x-1px h-8px flex-1 bg-#ffae00"></div>
                <div :style="{ width: '70%' }" class="relative flex">
                  <div class="absolute left--10px top--6px">
                    <img src="@/assets/popup-house-round.png" />
                  </div>
                  <div class="h-8px w-100% border-1px bg-#105149"></div>
                </div>
              </div>
            </div>
            <span class="text-16px color-#ffae00">40%</span>
          </div>

          <div class="h-68px w-330px flex flex-col justify-end">
            <div class="m-b-18px flex">
              <div class="flex items-center">
                <div class="m-r-16px h-5px w-15px bg-#ffae00"></div>
                <span class="text-16px color-#b2cef8">居民住宅项目 </span>
              </div>
              <div class="m-l-72px flex items-center">
                <div class="m-r-16px h-5px w-15px bg-#027b60"></div>
                <span class="text-16px color-#b2cef8">居民住宅项目 </span>
              </div>
            </div>
            <img class="h-2px w-330px" src="@/assets/popup-house-line-l.png" />
          </div>

          <div class="m-t-25px flex items-center">
            <div class="line"></div>
            <span class="text-24.7px color-#fff line-height-24.7px">居民住宅平均收缴率</span>
          </div>

          <div class="relative">
            <div ref="houseChargeRef" class="h-240px w-380px"></div>
            <div class="absolute left-155px top-85px h-70px w-70px flex flex-col items-center justify-center">
              <span class="text-20px color-#ff6600 font-900">25%</span>
              <span class="text-10px color-#18fff7">平均收缴率</span>
            </div>
            <img class="absolute left-7px top-27px" src="@/assets/popup-house-r-1.png" />
            <img class="absolute left-7px top-173px" src="@/assets/popup-house-r-2.png" />
            <img class="absolute right-100px top-27px" src="@/assets/popup-house-r-3.png" />
            <img class="absolute right-100px top-173px" src="@/assets/popup-house-r-1.png" />
            <div class="absolute left-150px top-80px h-80px w-80px border-2px border-#395674 rounded-80px border-solid"></div>
            <div class="absolute left-105px top-34px h-170px w-170px border-2px border-#395674 rounded-170px border-solid"></div>
            <img class="absolute h-2px w-330px" src="@/assets/popup-house-line-l.png" />
          </div>
        </div>
        <div class="m-t-112px h-100% w-100%">
          <img src="@/assets/popup-house-map.png" />
        </div>
        <div class="m-r-60px m-t-128px h-660px w-380px">
          <div class="flex items-center">
            <div class="line"></div>
            <span class="text-24.7px color-#fff line-height-24.7px">居民住宅收入占比</span>
          </div>
          <div class="m-t-25px h-170px w-300px flex justify-between">
            <div class="m-t-5px">
              <el-progress :width="168" stroke-linecap="square" class="progress-class-popup" type="circle" :percentage="20" :stroke-width="14">
                <div class="flex flex-col items-center justify-between">
                  <span class="text-38px color-#fff font-700">354</span>
                  <span class="m-t-10px text-19px color-#24dcf7">+19.2%</span>
                </div>
              </el-progress>
              <svg class="h-0 w-0">
                <defs>
                  <linearGradient id="popup-dismantle" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color: #fd03ee; stop-opacity:1" />
                    <stop offset="100%" style="stop-color: #fd03ee;stop-opacity:1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div class="flex flex-col justify-between">
              <div class="flex flex-col justify-between color-#fff">
                <div class="h-64px w-100px flex flex-col">
                  <span class="text-30px">39</span>
                  <span class="m-b-12px m-t-2px text-12px color-#9fa9ba">总项目收入</span>
                  <el-progress :show-text="false" :stroke-width="8" :percentage="70" color="#289df5" />
                </div>
              </div>
              <div class="m-b-10px flex flex-col justify-between color-#fff">
                <div class="h-64px w-100px flex flex-col">
                  <span class="text-30px">39</span>
                  <span class="m-b-12px m-t-2px text-12px color-#9fa9ba">居民住宅收入</span>
                  <el-progress :show-text="false" :stroke-width="8" :percentage="20" color="#fd03ee" />
                </div>
              </div>
            </div>
          </div>
          <img class="m-t-25px h-2px w-330px" src="@/assets/popup-house-line-l.png" />
          <div class="m-t-25px flex items-center">
            <div class="line"></div>
            <span class="text-24.7px color-#fff line-height-24.7px">居民住宅面积与占比</span>
          </div>
          <div class="relative m-t-40px h-142px w-380px">
            <div ref="houseAreaRef" class="m-t-20px h-142px w-380px"></div>
            <img class="absolute left-50px top--27px" src="@/assets/popup-house-r.png" />
            <div class="absolute left-120px top-45px flex flex-col items-center justify-between">
              <div class="m-b-5px color-#ffa951">
                <span class="text-23px font-700">2400</span>
                <span class="text-13px font-700">km</span>
              </div>
              <span class="text-11px color-#fff">项目面积占比</span>
            </div>
          </div>
          <img class="m-t-45px h-2px w-330px" src="@/assets/popup-house-line-l.png" />
        </div>
      </div>
      <div class="h-267px w-1838px flex-row justify-between">
        <div class="m-l-60px flex justify-between">
          <div>
            <div class="m-t-28px flex items-center">
              <div class="line"></div>
              <span class="text-24.7px color-#fff line-height-24.7px">居民住宅项目增长曲线</span>
            </div>
            <div class="m-t-15px">
              <div ref="houseGrowRef" class="h-192px w-835px"></div>
            </div>
          </div>
          <div class="m-r-32px">
            <div class="m-t-28px flex items-center justify-between">
              <div class="flex">
                <div class="line"></div>
                <span class="text-24.7px color-#fff line-height-24.7px">居民住宅收入</span>
              </div>
              <div class="m-r-16px flex items-center">
                <div class="h-9px w-25px bg-#00aeff"></div>
                <span class="m-x-8px text-12.7px color-#c4deff">物业费</span>
                <div class="h-9px w-25px bg-#fdad60"></div>
                <span class="m-x-8px text-12.7px color-#c4deff">停车费</span>
              </div>
            </div>
            <div class="m-t-15px">
              <div ref="houseIncomeRef" class="h-192px w-835px"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="h-153px w-1838px flex items-end justify-between p-x-114px">
        <img src="@/assets/b-1.png" alt="" class="" />
        <img src="@/assets/b-2.png" alt="" />
        <img src="@/assets/b-3.png" alt="" />
        <img src="@/assets/b-4.png" alt="" />
        <img src="@/assets/b-5-a.png" alt="" />
        <img src="@/assets/b-6.png" alt="" />
        <img src="@/assets/b-7.png" alt="" />
        <img src="@/assets/b-8.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue';
import * as echarts from 'echarts';
import dot from '@/assets/popup-house-d.png';
import bg from '@/assets/popup-house-round-n.png';
const houseChargeRef = ref();
const houseAreaRef = ref();
const houseGrowRef = ref();
const houseIncomeRef = ref();

const chargePercentageList = ref([
  40, 20, 30, 60
]);



onMounted(() => {
  initCharge();
  initArea();
  initGrow();
  initIncome();
});

function initCharge(){
  const myChart = echarts.init(houseChargeRef.value);
  type EChartsOption = echarts.EChartsOption;
  let option: EChartsOption;
  option = {
    // backgroundColor: '#2c343c',
    tooltip: {
      trigger: 'item'
    },
    visualMap: {
      show: false,
      min: 0,
      max: 100,
    },
    series: [
      {
        name: '居民住宅平均收缴率',
        type: 'pie',
        radius: '78%',
        center: [ '50%', '50%' ],
        roseType: 'area',
        data: [
          { value: chargePercentageList.value[3], name: '第四季度', itemStyle: {
            color: new echarts.graphic.RadialGradient(
              0, 1, 1, [
                { offset: 0, color: 'rgba(255, 204, 0, 0.01)' },
                { offset: 0.2, color: 'rgba(255, 204, 0, 0.05)' },
                { offset: 0.6, color: 'rgba(255, 204, 0, 0.1)' },
                { offset: 1, color: 'rgba(255, 204, 0, 0.5)' },
              ]
            ),
          }
          },
          { value: chargePercentageList.value[2], name: '第三季度', itemStyle: {
            color: new echarts.graphic.RadialGradient(
              0, 0, 1, [
                { offset: 0, color: 'rgba(0, 203, 255, 0.01)' },
                { offset: 0.2, color: 'rgba(0, 203, 255, 0.05)' },
                { offset: 0.6, color: 'rgba(0, 203, 255, 0.1)' },
                { offset: 1, color: 'rgba(0, 203, 255, 0.5)' },
              ]
            )
          }
          },
          { value: chargePercentageList.value[1], name: '第二季度', itemStyle: {
            color: new echarts.graphic.RadialGradient(
              1, 0, 1, [
                { offset: 0, color: 'rgba(253, 102, 0, 0.01)' },
                { offset: 0.2, color: 'rgba(253, 102, 0, 0.05)' },
                { offset: 0.6, color: 'rgba(253, 102, 0, 0.1)' },
                { offset: 1, color: 'rgba(253, 102, 0, 0.5)' },
              ]
            )
          }
          },
          { value: chargePercentageList.value[0], name: '第一季度', itemStyle: {
            color: new echarts.graphic.RadialGradient(
              1, 1, 1, [
                { offset: 0, color: 'rgba(0, 203, 255, 0.01)' },
                { offset: 0.2, color: 'rgba(0, 203, 255, 0.05)' },
                { offset: 0.6, color: 'rgba(0, 203, 255, 0.1)' },
                { offset: 1, color: 'rgba(0, 203, 255, 0.5)' },
              ]
            )
          }
          }
        ],
        label: {
          position: 'outside', // 将label放置在外部
          formatter: function(params) {
          // 根据条件来格式化标签内容
            if (params.name === '第四季度') {
              return '{a|第四季度 25%}';
            } else if (params.name === '第三季度') {
              return '{a|第三季度 25%}';
            }else if (params.name === '第二季度') {
              return '{b|第二季度 25%}';
            }else if (params.name === '第一季度') {
              return '{b|第一季度 25%}';
            }
          },
          rich: {
            a: {
              color: '#b7cffc',
              fontSize: 11.13,
              padding: [
                -25, 0, 0, -80
              ],
            },
            b: {
              color: '#b7cffc',
              fontSize: 11.13,
              padding: [
                -25, -80, 0, 0
              ]
            },
          }
        },
        labelLine: {
          lineStyle: {
            color: '#375d77',
            type: 'dashed'   // labelLine 为虚线
          },
          smooth: 0.2,
          length: 10,
          length2: 100
        },
        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: function(idx) {
          return Math.random() * 200;
        }
      },
      {
        name: '第四季度',
        type: 'pie',
        roseType: 'area',
        clockWise: false, // 逆时针
        radius: borderRadius(3), // 边框大小
        center: [ '50%', '50%' ], // 边框位置
        startAngle: 1, // 起始角度
        endAngle: 89, // 结束角度
        data: [
          {
            value: 10,
            itemStyle: {
              normal: {
                borderWidth: 5, // 设置边框粗细
                borderColor: 'rgba(255, 204, 0, 1)' // 边框颜色
              }
            }
          }
        ],
        // 取消鼠标悬浮时显示的 tooltip
        tooltip: {
          show: false
        },
        // 不显示标签和标签线
        label: {
          show: false
        },
      },
      {
        name: '第三季度',
        type: 'pie',
        roseType: 'area',
        clockWise: false, // 逆时针
        radius: borderRadius(2), // 边框大小
        center: [ '50%', '50%' ], // 边框位置
        startAngle: 271, // 起始角度
        endAngle: 359, // 结束角度
        data: [
          {
            value: 10,
            itemStyle: {
              normal: {
                borderWidth: 5, // 设置边框粗细
                borderColor: 'rgba(0, 203, 255, 1)' // 边框颜色
              }
            }
          }
        ],
        // 取消鼠标悬浮时显示的 tooltip
        tooltip: {
          show: false
        },
        // 不显示标签和标签线
        label: {
          show: false
        },
      },
      {
        name: '第二季度',
        type: 'pie',
        roseType: 'area',
        clockWise: false, // 逆时针
        radius: borderRadius(1), // 边框大小
        center: [ '50%', '50%' ], // 边框位置
        startAngle: 181, // 起始角度
        endAngle: 269, // 结束角度
        data: [
          {
            value: 10,
            itemStyle: {
              normal: {
                borderWidth: 5, // 设置边框粗细
                borderColor: 'rgba(253, 102, 0, 1)' // 边框颜色
              }
            }
          }
        ],
        // 取消鼠标悬浮时显示的 tooltip
        tooltip: {
          show: false
        },
        // 不显示标签和标签线
        label: {
          show: false
        },
      },
      {
        name: '第一季度',
        type: 'pie',
        roseType: 'area',
        clockWise: false, // 逆时针
        radius: borderRadius(0), // 边框大小
        center: [ '50%', '50%' ], // 边框位置
        startAngle: 91, // 起始角度
        endAngle: 179, // 结束角度
        data: [
          {
            value: 10,
            itemStyle: {
              normal: {
                borderWidth: 5, // 设置边框粗细
                borderColor: 'rgba(0, 203, 255, 1)' // 边框颜色
              }
            }
          }
        ],
        // 取消鼠标悬浮时显示的 tooltip
        tooltip: {
          show: false
        },
        // 不显示标签和标签线
        label: {
          show: false
        },
      },
    ]
  };

  function borderRadius(position:number){
    let max = 0;
    chargePercentageList.value.forEach((item)=>{
      if(item > max){
        max = item;
      }
    });

    return [ (chargePercentageList.value[position] / max * 80).toFixed(2) + '%', (chargePercentageList.value[position] / max * 80).toFixed(2) + '%' ];
  }

  myChart.setOption(option);
}

function initArea(){
  const myChart = echarts.init(houseAreaRef.value);
  type EChartsOption = echarts.EChartsOption;
  let option: EChartsOption;

  option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      show: false,  // 隐藏图例
    },
    series: [
      {
        type: 'pie',
        radius: [ '75%', '90%' ],  // 内外半径
        avoidLabelOverlap: false,
        padAngle: 3,  // 扇形之间的间隙
        itemStyle: {
          borderRadius: 0  // 去掉圆角，改成直线边缘
        },
        center: [ '40%', '50%' ],  // 图表中心位置
        label: {
          show: true,  // 显示标签
          position: 'outside', // 将label放置在外部
          formatter: function(params) {
          // 根据条件来格式化标签内容
            return `{a|${params.value}%}\n{b|${params.name}}`;
          },
          rich: {
            a: {
              color: '#24dcf7',
              fontSize: 14.8,
              padding: [
                0, 0, 5, 0
              ],
            },
            b: {
              color: '#fff',
              fontSize: 11.4,
              padding: [
                0, 0, 10, 0
              ],
            },
          }
        },
        labelLine: {
          lineStyle: {
            color: '#1fc3dd', // labelLine 为虚线
          },
        },
        data: [
          { value: 40, name: '住宅物业项目面积', itemStyle: {
            color: '#24dcf7'
          } },
          { value: 20, name: '总项目面积', itemStyle: {
            color: '#ffae00'
          }  },
        ]
      }
    ]
  };

  myChart.setOption(option);
}

function initGrow(){
  const myChart = echarts.init(houseGrowRef.value);
  type EChartsOption = echarts.EChartsOption;
  let option: EChartsOption;

  option = {
    graphic: [
      {
        type: 'image', // 图形元素类型
        left: '4%',
        bottom: '14%',
        z: 0, // 层叠
        bounding: 'all', // 决定此图形元素在定位时，对自身的包围盒计算方式
        style: {
          image: bg,
          width: 817,
          height: 176,
        },
      },
    ],
    xAxis: {
      type: 'category',
      data: [
        '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'
      ],
      axisTick: { show: false },
      axisLabel: {
        margin: 13,
        color: '#56afe2',
        fontSize: 16,
      },
      axisLine: { show: false },
      splitLine: {
        show: false,
      },
    },
    yAxis: {
      position: 'left',
      scale: true,
      splitLine: {
        show: false,
      },
      axisTick: { show: false },
      type: 'value',
      axisLine: { show: false },
      axisLabel: {
        margin: 0,
        color: '#56afe2',
        fontSize: 14,
        formatter: function (value) {
          // 添加千位分隔符
          return value + '%';
        }
      }
    },
    series: [
      {
        data: [
          0, 2, 3, 4, 10, 5, 7, 8, 9, 10, 3, 5
        ],
        color: '#27db49',
        type: 'line',
        symbol: 'image://' + dot,
        symbolSize: 10,
        smooth: true,
        showSymbol: true,
        itemStyle: {
          color: '#27db49', // 设置线条颜色
          borderColor: 'red', // 设置边框颜色
          borderWidth: 4, // 设置边框宽度
        },
        lineStyle: { width: 4 },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(39,219,73,0.4)' },
              { offset: 1, color: 'rgba(255,255,255,0.01)' },
            ],
            global: false
          }
        }
      }
    ],
    tooltip: {
      trigger: 'axis',
      padding: [ 5, 25 ],
      axisPointer: {
        type: 'line',
        lineStyle: { color: '#6499FF', width: 3, type: 'dashed' }
      },
      textStyle: { color: 'black', align: 'left', fontSize: 14 },
      position: 'left'
    },
    itemStyle: {
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: '#6850F8' },
        { offset: 0.5, color: '#4989FD' },
        { offset: 1, color: '#66DEFF' }
      ])
    },
    grid: {
      top: '10.5%',
      left: '0%',
      right: '-2%',
      bottom: '0%',
      containLabel: true
    }
  };

  myChart.setOption(option);
}

function initIncome(){
  const myChart = echarts.init(houseIncomeRef.value);
  type EChartsOption = echarts.EChartsOption;
  let option: EChartsOption;

  option = {
    graphic: [
      {
        type: 'image', // 图形元素类型
        left: '4%',
        bottom: '14%',
        z: 0, // 层叠
        bounding: 'all', // 决定此图形元素在定位时，对自身的包围盒计算方式
        style: {
          image: bg,
          width: 817,
          height: 176,
        },
      },
    ],
    xAxis: {
      type: 'category',
      data: [
        '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'
      ],
      axisTick: { show: false },
      axisLabel: {
        margin: 13,
        color: '#56afe2',
        fontSize: 16,
      },
      axisLine: { show: false },
      splitLine: {
        show: false,
      },
    },
    yAxis: {
      position: 'left',
      scale: true,
      splitLine: {
        show: false,
      },
      axisTick: { show: false },
      type: 'value',
      axisLine: { show: false },
      axisLabel: {
        margin: 0,
        color: '#56afe2',
        fontSize: 14,
      }
    },
    series: [
      {
        name: '停车费',
        data: [
          100, 200, 150, 250, 80, 20, 180, 210, 120, 100, 30, 300
        ],
        type: 'line',
        symbol: 'circle',
        symbolSize: 10,
        smooth: true,
        showSymbol: true,
        itemStyle: {
          color: '#fdad60', // 设置线条颜色
          borderColor: '#fdad60', // 设置边框颜色
          borderWidth: 4, // 设置边框宽度
        },
        lineStyle: { width: 4 },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(253,173,96,0.4)' },
              { offset: 1, color: 'rgba(255,255,255,0.01)' },
            ],
            global: false
          }
        }
      },
      {
        name: '物业费',
        data: [
          10, 20, 250, 150, 180, 120, 80, 110, 20, 200, 130, 300
        ],
        type: 'line',
        symbol: 'circle',
        symbolSize: 10,
        smooth: true,
        showSymbol: true,
        itemStyle: {
          color: '#00aeff', // 设置线条颜色
          borderColor: '#00aeff', // 设置边框颜色
          borderWidth: 4, // 设置边框宽度
        },
        lineStyle: { width: 4 },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(0,174,255,0.4)' },
              { offset: 1, color: 'rgba(255,255,255,0.01)' },
            ],
            global: false
          }
        }
      }
    ],
    tooltip: {
      trigger: 'axis',
      padding: [ 5, 25 ],
      axisPointer: {
        type: 'line',
        lineStyle: { color: '#6499FF', width: 3, type: 'dashed' }
      },
      textStyle: { color: 'black', align: 'left', fontSize: 14 },
      position: 'left'
    },
    itemStyle: {
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: '#6850F8' },
        { offset: 0.5, color: '#4989FD' },
        { offset: 1, color: '#66DEFF' }
      ])
    },
    grid: {
      top: '10.5%',
      left: '0%',
      right: '-2%',
      bottom: '0%',
      containLabel: true
    },
  };

  myChart.setOption(option);
}

const emits = defineEmits([ 'closePopup' ]);
</script>

<style lang="scss" scoped>
.popup-house-bg{
    background-color: rgba(0, 25, 56, 0.9);
    .bg-inner{
        background-image:url('@/assets/popup-house-top.png'), url('@/assets/popup-house-bg.png');
        background-position: center top, center top;  /* 第一张和第二张背景都居中对齐并头部对齐 */
        background-repeat: no-repeat, no-repeat;  /* 避免背景重复 */
    }

    .bg-center{
        background: url('@/assets/popup-house-center.png') no-repeat 0px 60px;
    }
}

.line{
    background-color: #00b8ff;
    width: 6px;
    height: 23px;
    margin-right:12px;
}

.bg-border{
    background-image: url('@/assets/popup-house-border.png');
}

.progress-class-popup {
  position: relative;
  :deep(svg > path:nth-child(2)) {
    stroke: url(#popup-dismantle) !important;
  }
  :deep(svg > path:nth-child(1)) {
    stroke: #289df5;

  }
}
</style>
