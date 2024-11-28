<template>
  <div class="h-446px flex flex-col items-end justify-between">
    <div class="relative h-50px w-383px">
      <img :src="head" alt="" class="object-contain object-right-center" />
      <div class="absolute bottom-6px left-16px text-26px color-#fff">
        <span> 人员岗位 </span>
        <span class="m-l-6px text-10px"> Personnel positions </span>
      </div>
    </div>

    <div class="m-t-24px h-404px w-100% flex flex-col border">
      <div class="m-t-5px flex items-center justify-between p-x-30px">
        <div class="relative">
          <img :src="profile" alt="" />
          <view class="absolute bottom-0px left-0px w-100% flex flex-center flex-col items-center">
            <span class="m-b-2px text-14px text-#fff">员工总数</span>
            <span class="m-b-6px text-24px text-#00ffcc">89</span>
          </view>
        </div>
        <div class="relative">
          <img :src="profile" alt="" />
          <view class="absolute bottom-0px left-0px w-100% flex flex-center flex-col items-center">
            <span class="m-b-2px text-14px text-#fff">外包人员</span>
            <span class="m-b-6px text-24px text-#00ffcc">89</span>
          </view>
        </div>
        <div class="relative">
          <img :src="profile" alt="" />
          <view class="absolute bottom-0px left-0px w-100% flex flex-center flex-col items-center">
            <span class="m-b-2px text-14px text-#fff">内部人员</span>
            <span class="m-b-6px text-24px text-#00ffcc">89</span>
          </view>
        </div>
      </div>

      <div class="m-t-0px h-244px flex flex-col items-center justify-around">
        <div class="h-32px w-398px flex flex-col">
          <div class="flex justify-between text-12px color-#fff">
            <div>
              <span>管理人员</span>
              <span class="text-24px color-#00ffcc">11</span>
              <span>人</span>
            </div>
            <div>
              <span>占比</span>
              <span class="text-24px color-#00ffcc">11%</span>
            </div>
          </div>
          <div class="flex items-center justify-between">
            <div class="m-r-1px h-8px w-2px flex-none bg-#fff"></div>
            <div class="type-progress m-x-4px flex-none">
              <div class="type-progress-rect"></div>
            </div>
            <div :style="{ width: '11%' }" class="flex">
              <div class="relative m-r-1px h-8px w-2px flex-none bg-#fff">
                <div class="triangle-down absolute bottom-10px left--3px"></div>
              </div>
              <div class="h-8px w-100% border-1px border-color-#00ffcc border-solid"></div>
            </div>
            <div class="m-l-1px h-8px w-2px flex-none bg-#fff"></div>
          </div>
        </div>
        <div class="h-32px w-398px flex flex-col">
          <div class="flex justify-between text-12px color-#fff">
            <div>
              <span>环境保洁人员</span>
              <span class="text-24px color-#bd00b9">11</span>
              <span>人</span>
            </div>
            <div>
              <span>占比</span>
              <span class="text-24px color-#bd00b9">11%</span>
            </div>
          </div>
          <div class="flex items-center justify-between">
            <div class="m-r-1px h-8px w-2px flex-none bg-#fff"></div>
            <div class="m-x-1px h-8px flex-1 bg-#bd00b9"></div>
            <div :style="{ width: '11%' }" class="flex">
              <div class="relative m-r-1px h-8px w-2px flex-none bg-#fff">
                <div class="triangle-down absolute bottom-10px left--3px"></div>
              </div>
              <div class="h-8px w-100% border-1px border-color-#00ffcc border-solid"></div>
            </div>
            <div class="m-l-1px h-8px w-2px flex-none bg-#fff"></div>
          </div>
        </div>
        <div class="h-32px w-398px flex flex-col">
          <div class="flex justify-between text-12px color-#fff">
            <div>
              <span>工程维修人员</span>
              <span class="text-24px color-#ffe400">11</span>
              <span>人</span>
            </div>
            <div>
              <span>占比</span>
              <span class="text-24px color-#ffe400">11%</span>
            </div>
          </div>
          <div class="flex items-center justify-between">
            <div class="m-r-1px h-8px w-2px flex-none bg-#fff"></div>
            <div class="type-progress m-x-4px flex-none">
              <div class="type-progress-rect"></div>
            </div>
            <div :style="{ width: '11%' }" class="flex">
              <div class="relative m-r-1px h-8px w-2px flex-none bg-#fff">
                <div class="triangle-down absolute bottom-10px left--3px"></div>
              </div>
              <div class="h-8px w-100% border-1px border-color-#44f0ff border-solid"></div>
            </div>
            <div class="m-l-1px h-8px w-2px flex-none bg-#fff"></div>
          </div>
        </div>
        <div class="h-32px w-398px flex flex-col">
          <div class="flex justify-between text-12px color-#fff">
            <div>
              <span>绿化维护人员</span>
              <span class="text-24px color-#00ffcc">11</span>
              <span>人</span>
            </div>
            <div>
              <span>占比</span>
              <span class="text-24px color-#00ffcc">11%</span>
            </div>
          </div>
          <div class="flex items-center justify-between">
            <div class="m-r-1px h-8px w-2px flex-none bg-#fff"></div>
            <div class="m-x-1px h-8px flex-1 bg-#00ffcc"></div>
            <div :style="{ width: '11%' }" class="flex">
              <div class="relative m-r-1px h-8px w-2px flex-none bg-#fff">
                <div class="triangle-down absolute bottom-10px left--3px"></div>
              </div>
              <div class="h-8px w-100% border-1px border-color-#00ffcc border-solid"></div>
            </div>
            <div class="m-l-1px h-8px w-2px flex-none bg-#fff"></div>
          </div>
        </div>
        <div class="h-32px w-398px flex flex-col">
          <div class="flex justify-between text-12px color-#fff">
            <div>
              <span>客户服务人员</span>
              <span class="text-24px color-#44f0ff">11</span>
              <span>人</span>
            </div>
            <div>
              <span>占比</span>
              <span class="text-24px color-#44f0ff">11%</span>
            </div>
          </div>
          <div class="flex items-center justify-between">
            <div class="m-r-1px h-8px w-2px flex-none bg-#fff"></div>
            <div class="type-progress m-x-4px flex-none">
              <div class="type-progress-rect"></div>
            </div>
            <div :style="{ width: '20%' }" class="flex">
              <div class="relative m-r-1px h-8px w-2px flex-none bg-#fff">
                <div class="triangle-down absolute bottom-10px left--3px"></div>
              </div>
              <div class="h-8px w-100% border-1px border-color-#44f0ff border-solid"></div>
            </div>
            <div class="m-l-1px h-8px w-2px flex-none bg-#fff"></div>
          </div>
        </div>
        <div class="h-32px w-398px flex flex-col">
          <div class="flex justify-between text-12px color-#fff">
            <div>
              <span>秩序维护人员</span>
              <span class="text-24px color-#ffe400">70</span>
              <span>人</span>
            </div>
            <div>
              <span>占比</span>
              <span class="text-24px color-#ffe400">30%</span>
            </div>
          </div>
          <div class="flex items-center justify-between">
            <div class="m-r-1px h-8px w-2px flex-none bg-#fff"></div>
            <div class="m-x-1px h-8px flex-1 bg-#ffe400"></div>
            <div :style="{ width: '70%' }" class="flex">
              <div class="relative m-r-1px h-8px w-2px flex-none bg-#fff">
                <div class="triangle-down absolute bottom-10px left--3px"></div>
              </div>
              <div class="h-8px w-100% border-1px border-color-#00ffcc border-solid"></div>
            </div>
            <div class="m-l-1px h-8px w-2px flex-none bg-#fff"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import head from '@/assets/head.png';
import profile from '@/assets/profile.png';
</script>

<style lang="scss" scoped>
.bg-bottom{
  background: url('@/assets/vibe-bottom.png') no-repeat;
  background-position: bottom right; /* 背景图片对齐到容器底部 */
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
