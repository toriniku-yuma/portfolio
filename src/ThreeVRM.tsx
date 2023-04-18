import { useEffect, useRef, useState } from "react";
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { VRM, VRMLoaderPlugin } from '@pixiv/three-vrm';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass"
import { loadMixamoAnimation } from './loadMixamoAnimation';
import {TextGeometry} from "three/examples/jsm/geometries/TextGeometry"
import {FontLoader} from "three/examples/jsm/loaders/FontLoader"
import typefaceData from "@compai/font-anton/data/typefaces/normal-400.json"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { gsap } from "gsap";

export function ThreeVRM(){
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [loading,setLoading] = useState<string>("Loading...");
    const [complete,setComplete] = useState<string>();
    const [threeProgress,setThreeProgress] = useState<number>();
    useEffect(()=>{
        // ページの読み込みを待つ
    init()

    async function init() {
      THREE.DefaultLoadingManager.onProgress = function (url,loaded,total){
        setThreeProgress(Math.round(loaded/total*100))
      }
      THREE.DefaultLoadingManager.onLoad = function ( ) {
        console.log( 'Loading Complete!');
        setLoading("Complete!");
        setComplete("text-success");

        firstAnimation();
      };

      const widthScrollBar = window.innerWidth - document.body.clientWidth;
      let width = document.body.clientWidth;
      let height = window.innerHeight;

      // レンダラーを作成
      const renderer = new THREE.WebGLRenderer({
        canvas:canvasRef.current!,
        antialias: true,
      });
      renderer.clearColor();

      // シーンを作成
      const scene = new THREE.Scene();
      scene.fog = new THREE.Fog(0x000014, 30, 500);

      scene.background = new THREE.Color(0x000014);
    
      // カメラを作成
      const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 10000);
      camera.position.set(0, 0.7, 3);
      //camera.rotation.y = - * Math.PI / 180
      onResize()

      //カメラコントロール
      //const control = new OrbitControls(camera,renderer.domElement);

      // リサイズイベント発生時に実行
      window.addEventListener('resize', onResize);

      function onResize() {
        // サイズを取得
        width = window.innerWidth - widthScrollBar;
        height = window.innerHeight;

        // レンダラーのサイズを調整する
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(width, height);

        // カメラのアスペクト比を正す
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }

      async function scrollTextGeometryFunc(){
        const font = new FontLoader().parse(typefaceData);
        const geometry = new TextGeometry("↓ Please scroll down ↓",{
          font:font,
          size:0.08,
          height:0.01
        })
        const material = new THREE.MeshToonMaterial({color:0x1FB2A5,emissive:"white",emissiveIntensity:0.4})
        return new THREE.Mesh(geometry,material);
      } 

      const scrollTextMesh = await scrollTextGeometryFunc();
      scene.add(scrollTextMesh);
      scrollTextMesh.position.set(-0.9,-2,-0.5);

      async function textGeometryFunc(text:string):Promise<TextGeometry>{
        const font = new FontLoader().parse(typefaceData);
        const geometry = new TextGeometry(text, {
          font:font,
          size: 0.3,
          height: 0.05,
          curveSegments: 12,
          bevelEnabled: false,
        } );
        // BufferGeometryからposition属性を取得する
        const positionAttribute = geometry.attributes.position;

        // x座標が最小の値を取得する
        let minX = Infinity;
        for (let i = 0; i < positionAttribute.count; i++) {
          const x = (positionAttribute as any).getX(i);
          if (x < minX) {
            minX = x;
          }
        }

        // BufferAttributeからすべての頂点のx座標から最小値を引いた値を新しいBufferAttributeに格納する
        const newPositionArray = new Float32Array(positionAttribute.count * 3);
        for (let i = 0; i < positionAttribute.count; i++) {
          const x = (positionAttribute as any).getX(i) - minX;
          const y = (positionAttribute as any).getY(i);
          const z = (positionAttribute as any).getZ(i);
          newPositionArray[i * 3 + 0] = x;
          newPositionArray[i * 3 + 1] = y;
          newPositionArray[i * 3 + 2] = z;
        }

        // BufferGeometryのposition属性に新しいBufferAttributeを設定する
        geometry.setAttribute('position', new THREE.BufferAttribute(newPositionArray, 3));
        return geometry;
      }

      const meshText:{mesh:THREE.Mesh,geometry:THREE.BufferGeometry,maxX:number}[] = [];
      const meshTextString = []
      for(const value of "WELCOME"){
        meshTextString.push(value);
      }
      for(const [key,value] of meshTextString.entries()){
        const textGeo = await textGeometryFunc(value);
        let material;
        if(key<=2){
          material = new THREE.MeshToonMaterial({color: 0x661AE6});
        }else{
          material = new THREE.MeshToonMaterial({color: 0xF000B8});
        }
        meshText.push({mesh:new THREE.Mesh(textGeo,material),geometry:textGeo,maxX:0});
      }
      meshText.map((value,key)=>{
        const {mesh,geometry} = value
        scene.add(mesh);
        if(key === 0){
          mesh.position.set(2,0.5,0.5)
        }else{
          const {maxX} = meshText[key-1]
          mesh.position.set(maxX+(0.05),0.5,0.5)
        }
        const positions = (geometry.attributes.position as any).array as number[];
        const numVertices = positions.length / 3;
        let maxX = Number.NEGATIVE_INFINITY
        let maxPos: THREE.Vector3 | null = null
        for (let i = 0; i < numVertices; i++) {
          const x = positions[i * 3]
          if (x > maxX) {
            maxX = x
            maxPos = new THREE.Vector3(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2])
          }
        }
        meshText[key].maxX = mesh.position.x + maxX;
      })

      const loader = new GLTFLoader();
  
      // Install GLTFLoader plugin
      loader.register((parser) => {
        return new VRMLoaderPlugin(parser);
      });
      
      const vrm = await loader.loadAsync(
          "test.vrm",
          // called while loading is progressing
          (progress) => console.log('Loading model...', 100.0 * (progress.loaded / progress.total), '%')
      )

      scene.add(vrm.scene)
      vrm.scene.rotation.y = 220 * Math.PI / 180

      const newVrm:VRM = vrm.userData.vrm;

      const headBone = newVrm.humanoid.getNormalizedBoneNode("head");
      if (!headBone) {
        return
      }
      const headBonePosition = headBone.getWorldPosition(new THREE.Vector3())
      //camera.lookAt(new THREE.Vector3(camera.position.x,headBonePosition.y,headBonePosition.z));

      // 環境光源を作成
      // new THREE.AmbientLight(色, 光の強さ)
      const light = new THREE.DirectionalLight(0xFFFFFF, 0.5);
      light.position.set(0,0,2);
      scene.add(light);

      //パーティクルを作成
      // 形状データを作成
      const SIZE = 1000;
      // 配置する個数
      const LENGTH = 3000;
      // 頂点情報を格納する配列
      const vertices = [];
      for (let i = 0; i < LENGTH; i++) {
        const x = SIZE * (Math.random() - 0.5);
        const y = SIZE * (Math.random() - 0.5);
        const z = SIZE * (Math.random() - 0.5);

        vertices.push(x, y, z);
      }

      // 形状データを作成
      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

      // マテリアルを作成
      const material = new THREE.PointsMaterial({
        map: new THREE.TextureLoader().load('circle.png'), // パーティクルの形状を設定
        // 一つ一つのサイズ
        size: 20,
        // 色
        color: "white",
        transparent: true, // 透過処理を有効化
        alphaTest: 0.2, // 適切な透過閾値を設定（0から1の範囲）
      });

      // 物体を作成
      const mesh = new THREE.Points(geometry, material);
      scene.add(mesh); // シーンは任意の THREE.Scene インスタンス

      const renderScene = new RenderPass( scene, camera );

      const bloomPass = new UnrealBloomPass( new THREE.Vector2( width, height ), 1.5, 0.4, 0.85 );
      bloomPass.threshold = 0;
      bloomPass.strength = 0.6;
      bloomPass.radius = 0.3;

      const composer = new EffectComposer( renderer );
      composer.addPass( renderScene );
      composer.addPass( bloomPass );

      // mixamo animation
      async function loadFBX( animationUrl:string ){
        // Load animation
        return await loadMixamoAnimation( animationUrl, newVrm );
      }
      const clock = new THREE.Clock();
      function textSin(offset:number){
        return Math.sin(clock.elapsedTime+offset*Math.PI/2)*0.0005
      }

      const currentMixer = new THREE.AnimationMixer( newVrm.scene );

      let rotX = 0; // 角度
      let rotY = 0
      let mouseX = 0; // マウス座標
      let mouseY = 0
      let lastMouseX = 0;
      let lastMouseY = 0;
      let currentCameraPosition:THREE.Vector3;
      let cameraBool = false;

      tick();
      
      const clip = await loadFBX("./Yawn.fbx");

      function firstAnimation(){
        vrm.scene.position.set(-2,0,0);
        const timeline = gsap.timeline({});
        timeline.add(gsap.to("#loading",{duration:2,opacity:0}),"+=1")
        timeline.add(gsap.to(vrm.scene.position,{ duration: 3, x: -1 ,ease:"power4.out",onStart:()=>{
          if(!clip){
            return
          }
          const firstMotion = currentMixer.clipAction( clip );
          firstMotion.clampWhenFinished = true;
          firstMotion.loop = THREE.LoopOnce;
          firstMotion.play();
          currentMixer.timeScale = 1.0;
        }}),"-=2");
      }
      currentMixer.addEventListener("finished",()=>{
        console.log("finished");
        // Tween.jsのアニメーションを作成
        const timeline = gsap.timeline({});
        meshText.map((value,key)=>{
          const {mesh} = value;
          if(key === 0){
            timeline.add(gsap.to(mesh.position,{ duration: 2, x: mesh.position.x - 2.5 ,ease:"power4.out"}))
          }else{
            timeline.add(gsap.to(mesh.position,{ duration: 2, x: mesh.position.x - 2.5 ,ease:"power4.out"}),"-=1.8")
          }
        })
        const vrmHead = newVrm.humanoid.getNormalizedBoneNode("head")?.getWorldPosition(new THREE.Vector3())
        if(vrmHead){
          timeline.add(gsap.to(camera.position,{ duration: 2, x: vrmHead?.x + 0.3 , y: vrmHead.y + 0.12 , z: vrmHead.z + 1 ,ease:"power4.out",onComplete:()=>{
            currentCameraPosition = camera.position
            // マウス座標はマウスが動いた時のみ取得できる
            document.addEventListener("mousemove", (event) => {
              if(lastMouseX === 0){
                lastMouseX = event.clientX;
              }
              if(lastMouseY === 0){
                lastMouseY = event.clientY;
              }
              mouseX = event.clientX - lastMouseX;
              mouseY = event.clientY - lastMouseY;
              lastMouseX = event.clientX;
              lastMouseY = event.clientY;
              //cameraBool = true;
            });
          }}),"+=2")
        }
        timeline.add(gsap.to("#hedder",{duration: 2, top:0,ease:"bounce.out"}))
        timeline.add(gsap.to(scrollTextMesh.position,{y:0.7,duration:0}))
        timeline.add(gsap.to(scrollTextMesh.position,{y:1,duration:1,ease:"pawer4.out"}),"+=0.5")
      });
    
      // 毎フレーム時に実行されるループイベントです
      function tick() {
        // メッシュを回転させる
        //vrm.scene.rotation.y += 0.01;
        mesh.rotation.y += 0.0003;

        const deltaTime = clock.getDelta();
        currentMixer.update(deltaTime);
        newVrm.update(deltaTime);
        meshText.map((value,key)=>{
          const {mesh} = value;
          mesh.position.y = mesh.position.y + textSin(key);
        })
        scrollTextMesh.position.y = scrollTextMesh.position.y + textSin(0);

        if(cameraBool){       
          if(camera.position.x - currentCameraPosition.x >= 0.01||camera.position.x - currentCameraPosition.x <= -0.01){
            console.log("outx")
            mouseX = 0
          }
          if(camera.position.y - currentCameraPosition.y >= 0.01||camera.position.y - currentCameraPosition.y <= -0.01){
            console.log("outy")
            mouseY = 0
          }
          // イージングの公式を用いて滑らかにする
          // 値 += (目標値 - 現在の値) * 減速値
          rotX += (mouseX - rotX) * 0.02;
          rotY += (mouseY - rotY) * 0.02;
          // ラジアンに変換する
          const radianX = rotX * Math.PI / 180;
          const radianY = rotY * Math.PI / 180;
          // 角度に応じてカメラの位置を設定
          camera.position.x = camera.position.x + 0.001 * Math.sin(radianX);
          camera.position.y = camera.position.y + 0.001 * Math.sin(radianY);
          //camera.position.z = camera.position.z + 0.001 * Math.cos(radian);
          // 原点方向を見つめる
          
          camera.lookAt(new THREE.Vector3(currentCameraPosition.x,currentCameraPosition.y,currentCameraPosition.z - 0.5));
          
        }

        // レンダリング
        composer.render();
    
        requestAnimationFrame(tick);
      }
    }
    },[])
    return(
      <div>
        <div id="loading" className={` fixed top-0 left-0 z-10 w-full h-full bg-neutral`}>
          <div className={` text-primary-content absolute left-[50%] top-[50%] flex flex-col ${complete}`}>
            <div className="radial-progress" style={{"--value":threeProgress}}>{threeProgress}%</div>
            <div className=" text-center">{loading}</div>
          </div>
        </div>
        <canvas className=" fixed" id="myCanvas" ref={canvasRef}></canvas>
      </div>
    )
}

export default ThreeVRM;