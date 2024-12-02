<template>
  <div class="bg h-1080px w-3840px flex flex-col">
    <div class="title-bar h-106px flex color-#197caf">
      <div class="m-l-auto m-r-68px m-t-25px h-46px w-615px flex items-end justify-between">
        <img src="@/assets/t-h.png" class="h-28px w-28px" @click="router.push('/index')" />
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
    <div class="center w-1000px h-700px pos-absolute top-200px left-1300px">
      <three3D  @handleClick="()=>{console.log('点击大厦')}"/>
    </div>
    <div class="flex justify-between">
      <div class="m-l-31px m-t-4px w-910px flex justify-between">
        <div class="w-406px flex flex-col">
          <vibe></vibe>
          <occupancy></occupancy>
          <energy></energy>
        </div>
        <div class="w-406px flex flex-col">
          <user-second></user-second>
          <inspection-second></inspection-second>
        </div>
      </div>
      <div class="h-974px w-1928px flex flex-col items-center justify-between">
        <div class="m-t-32px h-78px w-1418px flex justify-between">
          <div class="icon-bg-1 flex flex-col">
            <span class="m-b-5px m-l-57px m-t-10px text-12px color-#1ff2ff">房屋总数</span>
            <div class="flex">
              <img src="@/assets/s-i-1.png" class="m-l-12px m-r-8px h-27px w-38px" />
              <div class="rect text-21px color-#e8feff">9，289，218</div>
            </div>
          </div>
          <div class="icon-bg-2 flex flex-col">
            <span class="m-b-5px m-l-57px m-t-10px text-12px color-#1ff2ff">总户数</span>
            <div class="flex">
              <img src="@/assets/s-i-2.png" class="m-l-12px m-r-8px h-28px w-35px" />
              <div class="rect text-21px color-#e8feff">9，289，218</div>
            </div>
          </div>
          <div class="icon-bg-1 flex flex-col">
            <span class="m-b-5px m-l-57px m-t-10px text-12px color-#1ff2ff">车位总量</span>
            <div class="flex">
              <img src="@/assets/s-i-3.png" class="m-l-12px m-r-8px h-28px w-38px" />
              <div class="rect text-21px color-#e8feff">9，289，218</div>
            </div>
          </div>
          <div class="icon-bg-2 flex flex-col">
            <span class="m-b-5px m-l-57px m-t-10px text-12px color-#1ff2ff">收费面积</span>
            <div class="flex">
              <img src="@/assets/s-i-4.png" class="m-l-12px m-r-8px h-33px w-34px" />
              <div class="rect text-21px color-#e8feff">9，289，218</div>
            </div>
          </div>
          <div class="icon-bg-1 flex flex-col">
            <span class="m-b-5px m-l-57px m-t-10px text-12px color-#1ff2ff">管理面积</span>
            <div class="flex">
              <img src="@/assets/s-i-5.png" class="m-l-12px m-r-8px h-32px w-32px" />
              <div class="rect text-21px color-#e8feff">9，289，218</div>
            </div>
          </div>
          <div class="icon-bg-2 flex flex-col">
            <span class="m-b-5px m-l-57px m-t-10px text-12px color-#1ff2ff">收费面积</span>
            <div class="flex">
              <img src="@/assets/s-i-4.png" class="m-l-12px m-r-8px h-33px w-34px" />
              <div class="rect text-21px color-#e8feff">9，289，218</div>
            </div>
          </div>
        </div>
        <div class="flex flex-center flex-col items-center">
          <img src="@/assets/s-b-1.png" class="h-97px w-1451px select-none" />
          <div class="b-bg m-b-13px h-68px w-1704px flex items-center text-26px color-#90d5fc">
            <div class="w-96px flex items-center justify-center" @click="handleChangeTab(-1)">
              <img src="@/assets/s-b-2-l.png" class="m-t-6px h-26px w-22px select-none" />
            </div>
            <div class="w-342px flex justify-center color-#fff font-700">{{tabs[0]}}</div>
            <div class="w-163px flex justify-center">{{tabs[1]}}</div>
            <div class="w-513px flex justify-center">{{tabs[2]}}</div>
            <div class="w-203px flex justify-center">{{tabs[3]}}</div>
            <div class="m-l-20px w-289px flex justify-center">{{tabs[4]}}</div>
            <div class="w-76px flex items-center justify-center" @click="handleChangeTab(1)">
              <img src="@/assets/s-b-2-r.png" class="m-b-6px m-r-20px h-26px w-22px select-none" />
            </div>
          </div>
        </div>
      </div>

      <div class="m-r-61px m-t-4px w-910px flex justify-between">
        <div class="w-406px flex flex-col">
          <property></property>
          <equipment-second></equipment-second>
          <park></park>
        </div>
        <div class="w-406px flex flex-col">
          <order-second></order-second>
          <robot-second></robot-second>
          <robot-third></robot-third>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import router from '@/router';
import three3D from '../components/three3D/index.vue';

const totalTabs = ref([
  [
    '项目名称', '项目期数', '项目地点', '项目业态', '项目负责人'
  ],
  [
    '项目名称1', '项目期数1', '项目地点1', '项目业态1', '项目负责人1'
  ],
  [
    '项目名称2', '项目期数2', '项目地点2', '项目业态2', '项目负责人2'
  ],
  [
    '项目名称3', '项目期数3', '项目地点3', '项目业态3', '项目负责人3'
  ]
]);

const tabIndex = ref(0);

const tabs = computed(() => totalTabs.value[tabIndex.value]);

dayjs.locale('zh-cn');

const date = ref('');
const time = ref('');
const weekday = ref('');
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
});

onUnmounted(() => {
  clearInterval(interval);
});

function handleChangeTab(current:number){
  const newIndex = tabIndex.value += current;
  console.log(newIndex);
  tabIndex.value = ((newIndex % totalTabs.value.length) + totalTabs.value.length) % totalTabs.value.length;
}
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

.icon-bg-1{
  height: 78px;
  width: 183px;
  background: url('@/assets/s-r-g-1.png') no-repeat;
  .rect{
    height: 32px;
    width: 124px;
    background: url('@/assets/s-r-g-2.png') no-repeat;
  }
}

.icon-bg-2{
  height: 78px;
  width: 183px;
  background: url('@/assets/s-r-b-1.png') no-repeat;
  .rect{
    height: 32px;
    width: 124px;
    background: url('@/assets/s-r-b-2.png') no-repeat;
  }
}

.b-bg{
 background-image: url('@/assets/s-b-2.png');
}
</style>
