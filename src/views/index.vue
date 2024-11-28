<template>
  <div>
    <div class="bg h-1080px w-3840px flex flex-col">
      <div class="title-bar h-106px flex color-#197caf">
        <div class="m-l-auto m-r-68px m-t-25px h-46px w-615px flex items-end justify-between">
          <img src="@/assets/t-h.png" class="h-28px w-28px" />
          <div class="m-b-2px w-240px flex justify-between text-15.6px">
            <span>
              {{ date }}
            </span>
            <span>
              {{ time }}
            </span>
            <span class="line-height-15.6px">
              {{ weekday }}
            </span>
          </div>
          <div class="w-230px flex justify-between text-12.11px">
            <div class="w-60px flex flex-col items-center justify-between">
              <img src="@/assets/t-w.png" class="h-28px w-33px" />
              <span class="m-t-4px">06-09</span>
            </div>
            <div class="w-60px flex flex-col items-center justify-between">
              <img src="@/assets/t-w.png" class="h-28px w-33px" />
              <span class="m-t-4px">06-09</span>
            </div>
            <div class="w-60px flex flex-col items-center justify-between">
              <img src="@/assets/t-w.png" class="h-28px w-33px" />
              <span class="m-t-4px">06-09</span>
            </div>
            <div class="w-60px flex flex-col items-center justify-between">
              <span class="text-20px">16&deg;</span>
              <span>PM2.5 35</span>
            </div>
          </div>
          <img src="@/assets/t-p.png" class="h-36px w-36px" />
        </div>
      </div>
      <div class="flex justify-between">
        <div class="m-l-17px w-983px flex flex-wrap justify-between">
          <project></project>
          <user></user>
          <fee></fee>
          <inspection></inspection>
        </div>
        <div class="relative w-1840px">
          <div class="absolute left-0 top-0 z-2 color-#fff">
            <div class="h-885px w-1840px flex justify-between">
              <div class="left m-t-240px h-434px w-337px flex flex-col">
                <div class="m-l-80px m-t-15px flex flex-col">
                  <span class="text text-48px font-bold tracking-0">1080</span>
                  <span class="m-l-20px text-20.4px">项目数</span>
                </div>
                <div class="m-l-30px m-t-40px flex flex-col">
                  <span class="text text-48px font-bold tracking-0">1080</span>
                  <span class="m-l-20px text-20.4px">房屋总数</span>
                </div>
                <div class="m-l-40px m-t-30px flex flex-col">
                  <span class="text text-48px font-bold tracking-0">1080</span>
                  <span class="m-l-40px text-20.4px">总户数</span>
                </div>
                <div class="m-l-90px m-t-15px flex flex-col">
                  <span class="text text-48px font-bold tracking-0">1080</span>
                  <span class="m-l-20px text-20.4px">车位总数</span>
                </div>
              </div>
              <!-- <img src="@/assets/c-c.png" class="m-t-80px h-858px w-1171px" /> -->
              <div id="china-map" class="m-auto h-858px w-1171px"></div>
              <div class="right m-t-240px h-434px w-337px">
                <div class="m-l-160px m-t-15px flex flex-col">
                  <span class="text text-48px font-bold tracking-0">1080</span>
                  <span class="m-l-20px text-20.4px">收费面积</span>
                </div>
                <div class="m-l-200px m-t-40px flex flex-col">
                  <span class="text text-48px font-bold tracking-0">1080</span>
                  <span class="m-l-10px text-20.4px">管理面积</span>
                </div>
                <div class="m-l-200px m-t-30px flex flex-col">
                  <span class="text text-48px font-bold tracking-0">1080</span>
                  <span class="m-l-0px text-20.4px">平均收缴率</span>
                </div>
                <div class="m-l-140px m-t-15px flex flex-col">
                  <span class="text text-48px font-bold tracking-0">1080</span>
                  <span class="m-l-0px text-20.4px">员工总数</span>
                </div>
              </div>
            </div>
          </div>
          <div class="absolute left-0 top-716px">
            <img src="@/assets/c-b.png" class="h-257px w-1771px" />
          </div>
          <div class="absolute left--20px top-838px z-2 color-#fff">
            <div class="bg-b h-136px w-576px flex items-center justify-between p-x-70px p-t-30px">
              <img src="@/assets/b-1.png" alt="" class="" @click="popupHouseShow=true" />
              <img src="@/assets/b-2.png" alt="" @click="popupHouseShow=true" />
              <img src="@/assets/b-3.png" alt="" @click="popupHouseShow=true" />
              <img src="@/assets/b-4.png" alt="" @click="popupHouseShow=true" />
            </div>
          </div>
          <div class="absolute right--20px top-838px z-2 color-#fff">
            <div class="bg-b h-136px w-576px flex items-center justify-between p-x-70px p-t-30px">
              <img src="@/assets/b-5.png" alt="" @click="popupHouseShow=true" />
              <img src="@/assets/b-6.png" alt="" @click="popupHouseShow=true" />
              <img src="@/assets/b-7.png" alt="" @click="popupHouseShow=true" />
              <img src="@/assets/b-8.png" alt="" @click="popupHouseShow=true" />
            </div>
          </div>
        </div>
        <div class="m-r-17px w-983px flex flex-wrap justify-between">
          <income></income>
          <order></order>
          <equipment></equipment>
          <robot></robot>
        </div>
      </div>
    </div>
    <popup-house v-if="popupHouseShow" @close-popup="popupHouseShow=false"></popup-house>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts';
import '@/map/china'; // 引入中国地图数据

import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';

import mappoint1 from '@/static/mappoint1.png';
import mappoint2 from '@/static/mappoint2.png';
import imgx1 from '@/static/mapicon.png';
import imgx2 from '@/static/mapicon2.png';
import china_map from '@/static/map.png';
import router from '@/router';
import cir from '@/static/cir.png';

dayjs.locale('zh-cn');

const date = ref('');
const time = ref('');
const weekday = ref('');
const popupHouseShow = ref(false);
let interval:number;

onMounted(() => {
  interval = setInterval(()=>{
    const now = dayjs();
    // 提取日期（年-月-日）
    date.value = now.format('YYYY-MM-DD');

    // 提取时间（时:分:秒）
    time.value = now.format('HH:mm:ss');

    // 提取星期几
    weekday.value = now.format('dddd');
  });

  const mapChart = echarts.init(document.getElementById('china-map'));

  var geoCoordMap = {
    '上海': [ 121.4648, 31.2891 ],
    '东莞': [ 113.8953, 22.901 ],
    '东营': [ 118.7073, 37.5513 ],
    '中山': [ 113.4229, 22.478 ],
    '临汾': [ 111.4783, 36.1615 ],
    '临沂': [ 118.3118, 35.2936 ],
    '丹东': [ 124.541, 40.4242 ],
    '丽水': [ 119.5642, 28.1854 ],
    '乌鲁木齐': [ 87.9236, 43.5883 ],
    '佛山': [ 112.8955, 23.1097 ],
    '保定': [ 115.0488, 39.0948 ],
    '兰州': [ 103.5901, 36.3043 ],
    '包头': [ 110.3467, 41.4899 ],
    '北京': [ 116.4551, 40.2539 ],
    '北海': [ 109.314, 21.6211 ],
    '南京': [ 118.8062, 31.9208 ],
    '南宁': [ 108.479, 23.1152 ],
    '南昌': [ 116.0046, 28.6633 ],
    '南通': [ 121.1023, 32.1625 ],
    '厦门': [ 118.1689, 24.6478 ],
    '台州': [ 121.1353, 28.6688 ],
    '合肥': [ 117.29, 32.0581 ],
    '呼和浩特': [ 111.4124, 40.4901 ],
    '咸阳': [ 108.4131, 34.8706 ],
    '哈尔滨': [ 127.9688, 45.368 ],
    '唐山': [ 118.4766, 39.6826 ],
    '嘉兴': [ 120.9155, 30.6354 ],
    '大同': [ 113.7854, 39.8035 ],
    '大连': [ 122.2229, 39.4409 ],
    '天津': [ 117.4219, 39.4189 ],
    '太原': [ 112.3352, 37.9413 ],
    '威海': [ 121.9482, 37.1393 ],
    '宁波': [ 121.5967, 29.6466 ],
    '宝鸡': [ 107.1826, 34.3433 ],
    '宿迁': [ 118.5535, 33.7775 ],
    '常州': [ 119.4543, 31.5582 ],
    '广州': [ 113.5107, 23.2196 ],
    '廊坊': [ 116.521, 39.0509 ],
    '延安': [ 109.1052, 36.4252 ],
    '张家口': [ 115.1477, 40.8527 ],
    '徐州': [ 117.5208, 34.3268 ],
    '德州': [ 116.6858, 37.2107 ],
    '惠州': [ 114.6204, 23.1647 ],
    '成都': [ 103.9526, 30.7617 ],
    '扬州': [ 119.4653, 32.8162 ],
    '承德': [ 117.5757, 41.4075 ],
    '拉萨': [ 91.1865, 30.1465 ],
    '无锡': [ 120.3442, 31.5527 ],
    '日照': [ 119.2786, 35.5023 ],
    '昆明': [ 102.9199, 25.4663 ],
    '杭州': [ 119.5313, 29.8773 ],
    '枣庄': [ 117.323, 34.8926 ],
    '柳州': [ 109.3799, 24.9774 ],
    '株洲': [ 113.5327, 27.0319 ],
    '武汉': [ 114.3896, 30.6628 ],
    '汕头': [ 117.1692, 23.3405 ],
    '江门': [ 112.6318, 22.1484 ],
    '沈阳': [ 123.1238, 42.1216 ],
    '沧州': [ 116.8286, 38.2104 ],
    '河源': [ 114.917, 23.9722 ],
    '泉州': [ 118.3228, 25.1147 ],
    '泰安': [ 117.0264, 36.0516 ],
    '泰州': [ 120.0586, 32.5525 ],
    '济南': [ 117.1582, 36.8701 ],
    '济宁': [ 116.8286, 35.3375 ],
    '海口': [ 110.3893, 19.8516 ],
    '淄博': [ 118.0371, 36.6064 ],
    '淮安': [ 118.927, 33.4039 ],
    '深圳': [ 114.5435, 22.5439 ],
    '清远': [ 112.9175, 24.3292 ],
    '温州': [ 120.498, 27.8119 ],
    '渭南': [ 109.7864, 35.0299 ],
    '湖州': [ 119.8608, 30.7782 ],
    '湘潭': [ 112.5439, 27.7075 ],
    '滨州': [ 117.8174, 37.4963 ],
    '潍坊': [ 119.0918, 36.524 ],
    '烟台': [ 120.7397, 37.5128 ],
    '玉溪': [ 101.9312, 23.8898 ],
    '珠海': [ 113.7305, 22.1155 ],
    '盐城': [ 120.2234, 33.5577 ],
    '盘锦': [ 121.9482, 41.0449 ],
    '石家庄': [ 114.4995, 38.1006 ],
    '福州': [ 119.4543, 25.9222 ],
    '秦皇岛': [ 119.2126, 40.0232 ],
    '绍兴': [ 120.564, 29.7565 ],
    '聊城': [ 115.9167, 36.4032 ],
    '肇庆': [ 112.1265, 23.5822 ],
    '舟山': [ 122.2559, 30.2234 ],
    '苏州': [ 120.6519, 31.3989 ],
    '莱芜': [ 117.6526, 36.2714 ],
    '菏泽': [ 115.6201, 35.2057 ],
    '营口': [ 122.4316, 40.4297 ],
    '葫芦岛': [ 120.1575, 40.578 ],
    '衡水': [ 115.8838, 37.7161 ],
    '衢州': [ 118.6853, 28.8666 ],
    '西宁': [ 101.4038, 36.8207 ],
    '西安': [ 109.1162, 34.2004 ],
    '贵阳': [ 106.6992, 26.7682 ],
    '连云港': [ 119.1248, 34.552 ],
    '邢台': [ 114.8071, 37.2821 ],
    '邯郸': [ 114.4775, 36.535 ],
    '郑州': [ 113.4668, 34.6234 ],
    '鄂尔多斯': [ 108.9734, 39.2487 ],
    '重庆': [ 107.7539, 30.1904 ],
    '金华': [ 120.0037, 29.1028 ],
    '铜川': [ 109.0393, 35.1947 ],
    '银川': [ 106.3586, 38.1775 ],
    '镇江': [ 119.4763, 31.9702 ],
    '长春': [ 125.8154, 44.2584 ],
    '长沙': [ 113.0823, 28.2568 ],
    '长治': [ 112.8625, 36.4746 ],
    '阳泉': [ 113.4778, 38.0951 ],
    '青岛': [ 120.4651, 36.3373 ],
    '韶关': [ 113.7964, 24.7028 ]
  };

  var XAData = [
    [
      {
        name: '武汉'
      }, {
        name: '北京',
        value: 100
      }
    ],
    [
      {
        name: '武汉'
      }, {
        name: '上海',
        value: 100
      }
    ],
    [
      {
        name: '武汉'
      }, {
        name: '广州',
        value: 100
      }
    ],
    [
      {
        name: '武汉'
      }, {
        name: '西宁',
        value: 100
      }
    ],
    [
      {
        name: '武汉'
      }, {
        name: '银川',
        value: 100
      }
    ]
  ];

  // var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
  var planePath = 'none';
  var convertData = function (data) {

    var res = [];
    for (var i = 0; i < data.length; i++) {

      var dataItem = data[i];

      var fromCoord = geoCoordMap[dataItem[0].name];
      var toCoord = geoCoordMap[dataItem[1].name];
      if (fromCoord && toCoord) {
        res.push({
          fromName: dataItem[0].name,
          toName: dataItem[1].name,
          coords: [ fromCoord, toCoord ],
          value: dataItem[1].value
        });
      }
    }
    return res;

  };

  var color = [
    '#a6c84c', '#ffa022', '#46bee9'
  ]; //航线的颜色
  var series = [];
  [ [ '武汉', XAData ] ].forEach(function (item, i) {
    series.push({
      name: item[0] + ' Top3',
      type: 'lines',
      zlevel: 1,
      effect: {
        show: true,
        period: 3,
        trailLength: 0,
        symbol: 'pin', // 尾巴形状，也可以设置成其他符号/
        color: 'red', //arrow箭头的颜色
        symbolSize: 10
      },
      lineStyle: {
        normal: {
          color: color[i],
          width: 0,
          curveness: 0.2
        }
      },
      data: convertData(item[1])
    }, {
      name: item[0] + ' Top3',
      type: 'lines',
      zlevel: 2,
      symbol: [ 'none', 'arrow' ],
      symbolSize: 10,
      effect: {
        show: true,
        period: 6,
        trailLength: 0,
        symbol: planePath,
        symbolSize: 15
      },
      lineStyle: {
        normal: {
          color: color[i],
          width: 1,
          opacity: 0.6,
          curveness: 0.2
        }
      },
      data: convertData(item[1])
    }, {
      name: item[0] + ' Top3',
      type: 'effectScatter',
      coordinateSystem: 'geo',
      zlevel: 2,
      rippleEffect: {
        brushType: 'stroke'
      },
      label: {
        normal: {
          show: true,
          position: 'right',
          formatter: '{b}'
        }
      },
      symbolSize: function (val) {
        return val[2] / 8;
      },
      itemStyle: {
        normal: {
          color: color[i],
        },
        emphasis: {
          areaColor: '#2B91B7'
        }
      },
      data: item[1].map(function (dataItem) {
        return {
          name: dataItem[1].name,
          value: geoCoordMap[dataItem[1].name].concat([ dataItem[1].value ])
        };
      })
    });
  });

  const option = {
    tooltip: {
      show: true,
      triggerOn: "mousemove", //mousemove、click
      padding: [ 4, 8 ],
      borderWidth: 1,
      borderColor: '#409eff',
      backgroundColor: 'rgba(255,255,255,0.7)',
      textStyle: {
        color: '#000000',
        fontSize: 13
      },
      formatter: function (e) {
        return e.name;
      }
    },
    geo: [
      // 第一层
      {
        map: "china",
        z: 3,
        zoom: 1.2,
        aspectScale: 0.85,
        roam: false,
        top: '10%',
        layoutSize: "100%", //保持地图宽高比
        label: {
          show: true, // 显示省份名称
          color: '#fff', // 文本颜色
          fontSize: 14, // 文本大小
          fontWeight: 'bold', // 字体加粗
          rich: {
            spaced: {
              padding: [
                0, 1, 0, 1
              ] // 设置左右 padding 增加字间距
            }
          },
          formatter: function (params) {
            // 将每个字符应用 rich 样式，增加间距
            return params.name.split('').map(char => `{spaced|${char}}`).join(' ');
          }
        },
        regions: [
          { // 隐藏南海诸岛,因为顶层已经添加过了
            name: '南海诸岛',
            itemStyle: {
              borderWidth: 0.5,
              shadowBlur: 0,
              borderColor: '#61aacb',
              areaColor: '#104584'
            }
          }
        ],
        itemStyle: {
          borderColor: '#c8feff',
          borderWidth: 0.5,
          shadowBlur: 3,
          shadowColor: '#66edff',
          // areaColor: '#0862db'
          areaColor: '#1f467d'
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            borderWidth: 1,
            areaColor: '#2da9ff',
          },
          label: {
            show: false,
            color: '#ffffff',
          }
        },
        select: {
          itemStyle: {
            shadowBlur: 10,
            borderWidth: 1,
            areaColor: '#2da9ff',
          },
          label: {
            color: '#ffffff',
          }
        }
      },
      // 第二层
      {
        map: "china",
        z: 2,
        zoom: 1.2,
        aspectScale: 0.85,
        roam: false,
        silent: true,
        top: '10%',
        layoutSize: "100%", //保持地图宽高比
        regions: [
          { // 隐藏南海诸岛,因为顶层已经添加过了
            name: '南海诸岛',
            itemStyle: {
              opacity: 0 // 为 0 时不绘制该图形
            },
            label: {
              show: false
            }
          }
        ],
        itemStyle: {
          borderColor: '#d8feff',
          borderWidth: 3,
          shadowBlur: 10,
          shadowColor: '#285781',
          areaColor: '#0862db',
          shadowOffsetX: 0,
          shadowOffsetY: 8
        },
      },
      // 第三层
      {
        map: "china",
        z: 1,
        zoom: 1.2,
        aspectScale: 0.85,
        top: '11.5%',
        silent: true,
        layoutSize: "100%", //保持地图宽高比
        itemStyle: {
          borderColor: '#c8feff',
          borderWidth: 1,
          shadowBlur: 0,
          shadowColor: '#99c4ff',
          areaColor: '#4ebaff',
        },
        regions: [
          { // 隐藏南海诸岛,因为顶层已经添加过了
            name: '南海诸岛',
            itemStyle: {
              opacity: 0 // 为 0 时不绘制该图形
            },
            label: {
              show: false
            }
          }
        ],
      },
      // 第四层
      {
        map: "china",
        z: 0,
        zoom: 1.2,
        aspectScale: 0.85,
        top: '12%',
        silent: true,
        layoutSize: "100%", //保持地图宽高比
        itemStyle: {
          borderColor: '',
          borderWidth: 2,
          shadowBlur: 20,
          shadowColor: '#010c1d',
          areaColor: '#1752ad',
          shadowOffsetX: 0,
          shadowOffsetY: 8
        },
        regions: [
          { // 隐藏南海诸岛,因为顶层已经添加过了
            name: '南海诸岛',
            itemStyle: {
              opacity: 0 // 为 0 时不绘制该图形
            },
            label: {
              show: false
            }
          }
        ],
      },
    ],
    // series: [
    //   {
    //     type: "map",
    //     map: 'china',
    //     geoIndex: 0
    //   }
    // ]
    series: series

  };

  let img2 = `image://${mappoint1}`;

  let mapDate = [
    {
      value: [ 114.226903, 37.119115 ],
      name: '西安',
      img: `image://${mappoint1}`, //地图上第一类点的背景图标
      img2: `image://${mappoint2}`, //地图上第二类点的背景图标
      img3: `image://${mappoint2}`, //切换文字背景图的地方

      imgx1: `image://${imgx1}`, //切换文字背景图的地方
      imgx2: `image://${imgx2}`, //切换文字背景图的地方
    }, {
      value: [ 121.226903, 30.119115 ],
      name: '武汉',
      img: `image://${mappoint1}`, //地图上第一类点的背景图标
      img2: `image://${mappoint2}`, //地图上第二类点的背景图标
      img3: `image://${mappoint2}`, //切换文字背景图的地方

      imgx1: `image://${imgx1}`, //切换文字背景图的地方
      imgx2: `image://${imgx2}`, //切换文字背景图的地方
    }, {
      value: [ 95.226903, 37.119115 ],
      name: '青海',
      img: `image://${mappoint1}`, //地图上第一类点的背景图标
      img2: `image://${mappoint2}`, //地图上第二类点的背景图标
      img3: `image://${mappoint2}`, //切换文字背景图的地方

      imgx1: `image://${imgx1}`, //切换文字背景图的地方
      imgx2: `image://${imgx2}`, //切换文字背景图的地方
    },
  ];

  var domImg = document.createElement('img');
  domImg.height = 858;
  domImg.style.height = "760px";
  domImg.width = 1171;
  domImg.style.width = '807px';
  domImg.src = china_map; //这个地址需要换成你们线上的   当前地址仅用于测试
  let option2 = {
    geo: {
      map: 'china',
      aspectScale: 0.75,
      layoutCenter: [ '45%', '45%' ], //调整地图层与 背景图片间的偏移
      layoutSize: '70%',
      silent: true,
      roam: false,
      z: 0,
      zoom: 1.4, //调整地图底层大小
      itemStyle: {
        normal: {
          areaColor: "rgba(0,0,0,0)",
          borderWidth: 0,
        },

      },
    },
    series: [
      {
        type: 'map',
        roam: true,
        silent: true,
        layoutCenter: [ '40%', '40%' ], ////调整偏移量
        layoutSize: "91008%",
        label: {
          normal: {
            show: false,
            textStyle: {
              color: '#fff',
            },
          },
          emphasis: {
            textStyle: {
              color: '#fff',
            },
          },
        },
        itemStyle: {
          normal: {

            borderWidth: 0,
            areaColor: {
              image: domImg,
              repeat: 'no-repeat',
            },

          },
        },
        zoom: 1, //调整大小
        // roam: false,
        map: 'china',
      },
      {

        tooltip: {
          show: false,
        },
        type: 'effectScatter',
        coordinateSystem: 'geo',
        rippleEffect: {
          scale: 10,
          brushType: 'stroke',
        },
        showEffectOn: 'render',
        itemStyle: {
          normal: {
            shadowColor: '#0ff',
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            color: function (params) {
              var colorList = [
                new echarts.graphic
                  .LinearGradient(1, 0, 0, 0,
                    [
                    {
                      offset: 0,
                      color: '#ffd17c',
                    },
                    {
                      offset: 1,
                      color: '#ffd17c',
                    },
                    ]),
              ];
              // return colorList[params.dataIndex];
              return colorList[0];
            },
          },
        },
        label: {
          normal: {
            color: '#fff',
          },
        },
        symbol: 'circle',
        symbolSize: [ 10, 5 ], //涟漪的大小
        data: mapDate,
        zlevel: 1,

      },
      {
        type: 'scatter',
        coordinateSystem: 'geo',
        label: {
          normal: {
            show: true,
            formatter: function (params) {
              var name = params.name;
              var text = params.name;
              return text;
            },
            color: '#f0f0f0',
            fontSize: 16,
            fontWeight: 400,

            fontFamily: "PangMenZhengDao",
            rich: {
              fline: {
                padding: [ 0, 25 ],
                color: 'red', //框中间的介绍
                textShadowColor: '#030615',
                textShadowBlur: '0',
                textShadowOffsetX: 1,
                textShadowOffsetY: 1,
                fontSize: 14,
                fontWeight: 400,
              },
              tline: {
                padding: [ 0, 27 ],
                color: 'ABF8FF',
                fontSize: 12,
              },
            },
          },
          emphasis: {
            show: true,
          },
        },
        itemStyle: {
          color: '#00FFF6',
        },
        symbol: function (value, params) {
          return params.data.imgx1; //切换文字背景图的地方
        },
        // img2,
        symbolSize: [ 90, 40 ],
        symbolOffset: [ 0, -70 ],
        z: 999,
        data: mapDate,
      },
      {
        type: 'scatter',
        coordinateSystem: 'geo', //
        itemStyle: {
          color: '#f00', //红色柱子的颜色
        },
        symbol: function (value, params) {
          return params.data.img2;
        },
        symbolSize: [ 30, 43 ], //红色柱子的大小
        symbolOffset: [ 0, -25 ], //红色柱子的位置
        z: 9999,
        //点的名称和经纬度
        data: mapDate,
      },
      {
        type: "lines",
        zlevel: 2,
        effect: {
          show: true,
          period: 4, //箭头指向速度，值越小速度越快
          trailLength: 0.2, //特效尾迹长度[0,1]值越大，尾迹越长重
          // symbol: "arrow", //箭头图标
          color:"",
          symbol: `image://${cir}`, //箭头图标
          symbolSize: 16, //图标大小
        },
        lineStyle: {
          normal: {
            color: "",
            width: 2, //线条宽度
            opacity: 0.5, //尾迹线条透明度
            curveness: 0.5, //尾迹线条曲直度
            // type: "solid",
            type: "solid", //实线

          },
        },
        data: [
          {
            coords: [
              [ 114.226903, 37.119115 ],
              [ 121.226903, 30.119115 ],

            ],
            lineStyle: {
              color: "rgba(35, 182, 233, 1.0)",
            }
          }, {
            coords: [
              [ 95.226903, 37.119115 ],
              [ 121.226903, 30.119115 ],

            ],
            lineStyle: {
              color: "rgba(35, 182, 233, 1.0)",
            }
          },
        ]
      }

    ]
  };


  mapChart.setOption(option2);
  mapChart.on('click', function (params) {
    // params 包含了点击事件的相关信息，比如点击的系列（series）的索引等
    console.log(params);
    echarts.dispose(mapChart);
    // 在这里编写你的点击事件逻辑
    // 例如，可以弹出一个提示框显示点击位置的信息
    router.push('/second');
  });

});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<style lang="scss" scoped>
.bg{
  background-image: url('@/assets/bg.png');
}

.title-bar{
  background-image: url('@/assets/titleBar.png');
}

.bg-b{
  background-image: url('@/assets/b.png');
}

.left{
  background-image: url('@/assets/c-l.png');
}

.right{
  background-image: url('@/assets/c-r.png');
}

.text{
    text-shadow:
    0 0 5px rgba(29,129,219, 1),  /* 较轻的光晕 */
    0 0 10px rgba(29,129,219, 0.9), /* 更强的光晕 */
    0 0 15px rgba(29,129,219, 0.7); /* 更强的光晕 */
}
</style>
