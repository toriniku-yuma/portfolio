import { useEffect, useRef, useState } from "react";
import * as THREE from 'three';
import * as TWEEN from "@tweenjs/tween.js";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { VRM, VRMLoaderPlugin } from '@pixiv/three-vrm';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass"
import { loadMixamoAnimation } from './loadMixamoAnimation';
import {TextGeometry} from "three/examples/jsm/geometries/TextGeometry"
import helvetiker from "three/examples/fonts/helvetiker_bold.typeface.json"
import {FontLoader} from "three/examples/jsm/loaders/FontLoader"
import { MeshToonMaterial } from "three/src/Three";

export function ThreeVRM(){
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [loading,setLoading] = useState<string>();
    const [threeProgress,setThreeProgress] = useState<number>();
    useEffect(()=>{
        // ページの読み込みを待つ
    init()

    async function init() {
      // 始点と終点のベクトルを作成
      let startVector = new THREE.Vector3(1.3,0,0);
      let endVector = new THREE.Vector3(0,0,0);

      THREE.DefaultLoadingManager.onLoad = function ( ) {
        console.log( 'Loading Complete!');
        setLoading("hidden");

        vrm.scene.position.set(1.3,0,0);
        // Tween.jsのアニメーションを作成
        let tween = new TWEEN.Tween(startVector)
          .delay(500)
          .to(endVector, 1500) // 1秒かけて終点に移動
          .easing(TWEEN.Easing.Cubic.Out) // イージングを設定
          .onUpdate(function() {
            // ベクトルを更新
            vrm.scene.position.copy(startVector);
          })
          .start(); // アニメーションを開始
      };

      THREE.DefaultLoadingManager.onProgress = function (url,loaded,total){
        setThreeProgress(Math.round(loaded/total*100))
      }

      const widthScrollBar = window.innerWidth - document.body.clientWidth;
      let width = document.body.clientWidth;
      let height = window.innerHeight;

      // レンダラーを作成
      const renderer = new THREE.WebGLRenderer({
        canvas:canvasRef.current!,
        antialias: true,
      });
      renderer.setSize(width, height,false);
      renderer.clearColor();

      // シーンを作成
      const scene = new THREE.Scene();
      scene.fog = new THREE.Fog("rgb(34%, 34%, 34%)", 30, 500);

      scene.background = new THREE.Color("rgb(34%, 34%, 34%)");
    
      // カメラを作成
      const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 10000);
      camera.position.set(0.2, 1.8, 0.2);

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

      async function textGeometryFunc(text:string):Promise<[TextGeometry,MeshToonMaterial]>{
        const loader = new FontLoader();
        const font = await loader.loadAsync('fonts/helvetiker_regular.typeface.json')
        const geometry = new TextGeometry(text, {
          font:font,
          size: 80,
          height: 5,
          curveSegments: 12,
          bevelEnabled: true,
          bevelThickness: 10,
          bevelSize: 8,
          bevelOffset: 0,
          bevelSegments: 5
        } );
        const material = new THREE.MeshToonMaterial({color: 0x6699FF});
        return [geometry,material];
      }

      // const textW = await textGeometryFunc("W")
      // const meshW = new THREE.Mesh(textW[0],textW[1]) 
      // scene.add(meshW);

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
      camera.lookAt(new THREE.Vector3(camera.position.x,headBonePosition.y,headBonePosition.z));

      // 環境光源を作成
      // new THREE.AmbientLight(色, 光の強さ)
      const light = new THREE.AmbientLight(0xFFFFFF, 0.5);
      scene.add(light);

      //パーティクルを作成
      // 形状データを作成
      const SIZE = 1000;
      // 配置する個数
      const LENGTH = 10000;
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
        color: "rgb(0%, 0%, 0%)",
        transparent: true, // 透過処理を有効化
        alphaTest: 0.2 // 適切な透過閾値を設定（0から1の範囲）
      });

      // 物体を作成
      const mesh = new THREE.Points(geometry, material);
      scene.add(mesh); // シーンは任意の THREE.Scene インスタンス

      const renderScene = new RenderPass( scene, camera );

      const bloomPass = new UnrealBloomPass( new THREE.Vector2( width, height ), 1.5, 0.4, 0.85 );
      bloomPass.threshold = 0;
      bloomPass.strength = 0.65;
      bloomPass.radius = 0.3;

      const composer = new EffectComposer( renderer );
      composer.addPass( renderScene );
      composer.addPass( bloomPass );

      let currentMixer:THREE.AnimationMixer;
      let currentAnimationUrl;
      // mixamo animation
      function loadFBX( animationUrl:string ) {

        currentAnimationUrl = animationUrl;

        // create AnimationMixer for VRM
        currentMixer = new THREE.AnimationMixer( newVrm.scene );

        // Load animation
        loadMixamoAnimation( animationUrl, newVrm ).then( ( clip ) => {

          if(!clip){
            return
          }
          // Apply the loaded animation to mixer and play
          const firstMotion = currentMixer.clipAction( clip );
          firstMotion.clampWhenFinished = true;
          firstMotion.loop = THREE.LoopOnce;
          firstMotion.play();
          currentMixer.timeScale = 1.0;

          currentMixer.addEventListener("finished",()=>{
            console.log("finished");
          });
        } );

      }
      const clock = new THREE.Clock();
      loadFBX("./Yawn.fbx");

      tick();
    
      // 毎フレーム時に実行されるループイベントです
      function tick() {
        // メッシュを回転させる
        //vrm.scene.rotation.y += 0.01;
        mesh.rotation.y += 0.0003;

        TWEEN.update();

        const deltaTime = clock.getDelta();
        currentMixer.update(deltaTime);
        newVrm.update(deltaTime);

        // レンダリング
        composer.render();
    
        requestAnimationFrame(tick);
      }
    }
    },[])
    return(
      <div>
        <div className={` fixed top-0 left-0 z-10 w-full h-full bg-neutral ${loading}`}>
          <div className="absolute left-[50%] top-[50%] text-white">Loading... {threeProgress}%</div>
        </div>
        <canvas className="" id="myCanvas" ref={canvasRef}></canvas>
      </div>
    )
}

export default ThreeVRM;