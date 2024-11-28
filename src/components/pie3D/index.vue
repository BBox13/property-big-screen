<template>
  <div class="relative">
    <div ref="echartRef" class="z-1 h-220px w-539px"></div>
    <img src="@/assets/e-button.png" class="absolute left-140px top-50px z-0" />
  </div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";
import "echarts-gl";
import {
  getPie3D,
  getParametricEquation,
} from "./echart.js";
import { ref, shallowRef, onMounted, nextTick } from "vue";

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
  internalDiameterRatio: {
    type: Number,
    default: 0.6,
  },
  distance: {
    type: Number,
    default: 180,
  },
  alpha: {
    type: Number,
    default: 26,
  },
  pieHeight: {
    type: Number,
    default: 28,
  },
  opacity: {
    type: Number,
    default: 1,
  },
});

const color = [
  "#637fea", "#25bd97", "#ffea7c", "#383893"
];
const optionData = ref(props.data);

let option = {};
const echartRef = shallowRef<HTMLElement>();
const echart = shallowRef<echarts.ECharts>();

onMounted(() => {
  nextTick(() => {
    setLabel();
    initChart();
  });
  window.onresize = changeSize;
});

const setLabel = () => {
  optionData.value.forEach((item, index) => {
    item.itemStyle = {
      color: color[index],
    };
    item.label = {
      show: true,
      position: 'outside',
      rich: {
        d: {
          color: '#fff',
          fontSize: 10,
        },
        b: {
          color: '#fff',
          fontSize: 10,
        },
      },
      formatter: '{d|{d}% \n}{b|{b}}{d|}',
    };
    item.labelLine = {
      length: 10,
      length2: 10,
      lineStyle: {
        width: 2,
        color: '#fff',
      },
    };
  });
};

const initChart = () => {
  echart.value = echarts.init(echartRef.value);

  option = getPie3D(
    optionData.value,
    props.internalDiameterRatio,
    props.distance,
    props.alpha,
    props.pieHeight,
    props.opacity
  );

  option.legend = {
    orient: 'vertical',  // 图例垂直排列
    left: 'right',       // 图例在右侧
    top: 'center',       // 图例垂直居中
    itemWidth: 14,       // 图例图形宽度
    itemHeight: 4,      // 图例图形高度
    padding: 10,
    textStyle: {
      fontSize: 14,
      color: '#fff'
    }
  };

  echart.value.setOption(option);

  option.series.push({
    name: "信用评价",
    backgroundColor: "transparent",
    type: "pie",
    radius: [ "20%", "40%" ], // 调整饼图半径，可以影响连接线的位置
    label: {
      opacity: 1,
      fontSize: 10,
      lineHeight: 12,
      show: true,
      position: "outside", // 标签放置在外部
    },
    startAngle: -40, //起始角度，支持范围[0, 360]。
    clockwise: false, //饼图的扇区是否是顺时针排布。上述这两项配置主要是为了对齐3d的样式
    data: optionData.value,
    itemStyle: {
      opacity: 0,
    },
  });
  echart.value.setOption(option);

  bindListen(echart.value);
};

const bindListen = (myChart) => {
  let selectedIndex = "";
  let hoveredIndex = -1;

  myChart.on("mouseover", (params) => {
    let isSelected;
    let isHovered;
    let startRatio;
    let endRatio;
    let k;

    if (hoveredIndex === params.seriesIndex) {
      // Do nothing
    } else {
      if (hoveredIndex !== "" && hoveredIndex !== -1) {
        isSelected = option.series[hoveredIndex].pieStatus.selected;
        isHovered = false;
        startRatio = option.series[hoveredIndex].pieData.startRatio;
        endRatio = option.series[hoveredIndex].pieData.endRatio;
        k = option.series[hoveredIndex].pieStatus.k;

        if (
          typeof startRatio !== "undefined" &&
          typeof endRatio !== "undefined" &&
          typeof k !== "undefined"
        ) {
          option.series[hoveredIndex].parametricEquation =
            getParametricEquation(
              startRatio,
              endRatio,
              isSelected,
              isHovered,
              k,
              option.series[hoveredIndex].pieData.value
            );
        }

        option.series[hoveredIndex].pieStatus.hovered = isHovered;
        hoveredIndex = "";
      }

      if (
        params.seriesName !== "mouseoutSeries" &&
        params.seriesName !== "信用评价"
      ) {
        isSelected = option.series[params.seriesIndex].pieStatus.selected;
        isHovered = true;
        startRatio = option.series[params.seriesIndex].pieData.startRatio;
        endRatio = option.series[params.seriesIndex].pieData.endRatio;
        k = option.series[params.seriesIndex].pieStatus.k;

        if (
          typeof startRatio !== "undefined" &&
          typeof endRatio !== "undefined" &&
          typeof k !== "undefined"
        ) {
          option.series[params.seriesIndex].parametricEquation =
            getParametricEquation(
              startRatio,
              endRatio,
              isSelected,
              isHovered,
              k,
              option.series[params.seriesIndex].pieData.value + 60
            );
          option.series[params.seriesIndex].pieStatus.hovered = isHovered;
          hoveredIndex = params.seriesIndex;
        }
      }

      myChart.setOption(option);
    }
  });

  myChart.on("globalout", () => {
    let isSelected;
    let isHovered;
    let startRatio;
    let endRatio;
    let k;

    if (hoveredIndex !== "" && hoveredIndex !== -1) {
      isSelected = option.series[hoveredIndex].pieStatus.selected;
      isHovered = false;
      k = option.series[hoveredIndex].pieStatus.k;
      startRatio = option.series[hoveredIndex].pieData.startRatio;
      endRatio = option.series[hoveredIndex].pieData.endRatio;

      if (
        typeof startRatio !== "undefined" &&
        typeof endRatio !== "undefined" &&
        typeof k !== "undefined"
      ) {
        option.series[hoveredIndex].parametricEquation = getParametricEquation(
          startRatio,
          endRatio,
          isSelected,
          isHovered,
          k,
          option.series[hoveredIndex].pieData.value
        );
      }

      option.series[hoveredIndex].pieStatus.hovered = isHovered;
      hoveredIndex = "";
    }

    myChart.setOption(option);
  });
};

const changeSize = () => {
  echart.value && echart.value.resize();
};
</script>
