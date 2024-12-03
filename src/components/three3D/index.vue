<template>
    <div class="three" @click.stop="threeClick($event)" ref="threejsRef"></div>
</template>
<script lang="ts" setup>
import { defineComponent, onMounted, onUnmounted, reactive, ref, watch } from "vue";

import { 
  Scene,PerspectiveCamera,WebGLRenderer,Box3,Vector3,Color,PointLight,
  MeshBasicMaterial,Vector2,Raycaster,Mesh,AmbientLight,DirectionalLight,HemisphereLight
 } from 'three';
 import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { functions } from "lodash-es";
import { object } from "vue-types";

const threejsRef = ref<HTMLDivElement>()

const props = defineProps({ 
  stopBoo:Boolean,
  moData:{} as any
});
const emits = defineEmits(["handleClick"])
onMounted(()=>{
  initThree()
})
watch(()=>props.stopBoo,val=>{
  console.log(val);
  controls.enableRotate = !val;
})
function threeClick(event:MouseEvent){
  let el=event.target as HTMLElement
  let mouse:any={};
  mouse.x = (event.offsetX / el.offsetWidth) * 2 - 1
  mouse.y = -(event.offsetY / el.offsetHeight) *2 + 1
  //点击后画一条射线
  console.log(event.clientX,el.offsetWidth,event);
  
  raycaster.setFromCamera(mouse, camera)
  // console.log(scene,controls  );
  
  //射线与模型的相交点
  // return
  let intersects = raycaster.intersectObjects(
    scene.children.find(val=>val.type=="Group")
    .children.filter((val)=>{
      //大厦的模型的name是___1和___
      return val.type=="Group"&& ["___","___1"].includes(val.name)
    }),true)
  //射线穿过的模型
  // TODO::处理点击后的操作
    console.log(intersects.length);
  if(intersects.length>3){
  //射线穿过的模型
    console.log(intersects[0]);
    emits("handleClick",event)
  }
}

let scene:any,camera:any,renderer:any,controls:any,raycaster:any,mouse:any  ;

const initThree = ()=>{
  scene = new Scene()
  camera = new PerspectiveCamera(75,threejsRef.value?.offsetWidth/threejsRef.value?.offsetHeight,0.1,1000)
  camera.position.set(60, 30, 120);//设置相机位置
  
  renderer = new WebGLRenderer({alpha: true});
  // renderer.LinearEncoding=sRGBEncoding
  renderer.setSize( threejsRef.value?.offsetWidth,threejsRef.value?.offsetHeight );
  raycaster=new Raycaster()
  mouse=new Vector3()
  
 
  const hesLight = new HemisphereLight(0xffffff,0x000000)
    hesLight.intensity = 3
    scene.add(hesLight)
    let Ambient = new AmbientLight(0xcccccc, 2);
    scene.add(Ambient);
  //   let ambientLight = new AmbientLight(0xffffff,2); //设置环境光
  // scene.add(ambientLight); //将环境光添加到场景中
  // let pointLight = new PointLight(0xffffff, 1, 0);
  // pointLight.position.set(60, 30, 120); //设置点光源位置
  // scene.add(pointLight); //将点光源添加至场景


  controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 0, 0); //设定中心点
  controls.update(0); 
  controls.autoRotate =true;
  controls.saveState()
  load_Fbx()
  //挂载dom
  threejsRef.value?.appendChild(renderer.domElement)
  renderer.render(scene, camera);
  animate()

}
function load_Fbx() {
	    var loader = new FBXLoader();
	    loader.load(`./src/assets/贴图/汉阳大厦.FBX`, function (fbx) {
        console.log(fbx,123);//贴图/汉阳大厦 荆楚大厦
        // return
	        fbx.traverse(function (item) {
	           if(item instanceof Mesh){
	               item.castShadow = true;
                //  item.material.emissive = item.material.color
                //  item.material.emissiveMap = item.material.map
	               item.receiveShadow = true;
                // item?.object?.material&&item.object.material.color?.set(0xff0000)
	           }
	        });
          // fbx.rotation.z=Math.PI/180*4
          // fbx.rotation.x=-Math.PI/180*12
          // fbx.rotation.y=-Math.PI/180*6
          let {x,y,z}=props.moData?.rotation as any
          fbx.rotation.set(x,y,z)
          console.log(fbx.rotation);
          
          // _ChangeMaterialEmissive(fbx)
          let scale=props.moData?.scale||0.00047
	        fbx.scale.set(scale,scale,scale);
          ModelAutoCenter(fbx,1)
	        scene.add(fbx);
	    });
      }
function ModelAutoCenter(group:any,scale:number){
    let box3 = new Box3()
    // 计算层级模型group的包围盒
    // 模型group是加载一个三维模型返回的对象，包含多个网格模型
    box3.expandByObject(group)
    // 计算一个层级模型对应包围盒的几何体中心在世界坐标中的位置
    let center = new Vector3()
    box3.getCenter(center)

    // 重新设置模型的位置，使之居中。
    group.position.x = (group.position.x - center.x)/scale-5
    group.position.y = (group.position.y - center.y)/scale-10
    group.position.z = (group.position.z - center.z)/scale
    console.log("center.x", group.position,center)
}
function animate() {
  renderer.render( scene, camera ); //渲染界面
  
  requestAnimationFrame(animate); //循环调用函数
  // controls.update(); //自动旋转
}


</script>

<style lang="scss" scoped>
.three{
  width: 100%;
  height: 100%;
}
</style>