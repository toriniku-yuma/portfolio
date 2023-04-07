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
import { MeshToonMaterial } from "three/src/Three";
import typefaceData from "@compai/font-recursive/data/typefaces/normal-400.json"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { gsap } from "gsap";

export function ThreeVRM(){
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [loading,setLoading] = useState<string>();
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
        setLoading("hidden");

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
      onResize()

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

      async function textGeometryFunc(text:string):Promise<[TextGeometry,MeshToonMaterial]>{
        const font = new FontLoader().parse(typefaceData);
        const geometry = new TextGeometry(text, {
          font:font,
          size: 0.5,
          height: 0.05,
          curveSegments: 12,
          bevelEnabled: false,
          bevelThickness: 10,
          bevelSize: 8,
          bevelOffset: 0,
          bevelSegments: 5
        } );
        const material = new THREE.MeshToonMaterial({color: 0x661AE6});
        return [geometry,material];
      }

       const textW = await textGeometryFunc("W")
       const meshW = new THREE.Mesh(textW[0],textW[1]) 
       scene.add(meshW);
       meshW.position.set(2,0.5,0.5)

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
      const light = new THREE.AmbientLight(0xFFFFFF, 0.5);
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
        alphaTest: 0.2 // 適切な透過閾値を設定（0から1の範囲）
      });

      // 物体を作成
      const mesh = new THREE.Points(geometry, material);
      scene.add(mesh); // シーンは任意の THREE.Scene インスタンス

      const renderScene = new RenderPass( scene, camera );

      const bloomPass = new UnrealBloomPass( new THREE.Vector2( width, height ), 1.5, 0.4, 0.85 );
      bloomPass.threshold = 0;
      bloomPass.strength = 0.8;
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
      function textSin(){
        return Math.sin(clock.elapsedTime*Math.PI/2)*0.001
      }

      const currentMixer = new THREE.AnimationMixer( newVrm.scene );
      const clip = loadFBX("./Yawn.fbx").then((clip)=>{
        if(!clip){
          return
        }
        const firstMotion = currentMixer.clipAction( clip );
        firstMotion.clampWhenFinished = true;
        firstMotion.loop = THREE.LoopOnce;
        firstMotion.play();
        currentMixer.timeScale = 1.0;
      });

      function firstAnimation(){
        vrm.scene.position.set(-2,0,0);
        gsap.to(vrm.scene.position,{ duration: 3, x: -1 ,ease:"power4.out"}).delay(0.5);
      }
      currentMixer.addEventListener("finished",()=>{
        console.log("finished");
        // Tween.jsのアニメーションを作成
        gsap.to(meshW.position,{ duration: 3, x: 0 ,ease:"power4.out"})
      });

      tick();
    
      // 毎フレーム時に実行されるループイベントです
      function tick() {
        // メッシュを回転させる
        //vrm.scene.rotation.y += 0.01;
        mesh.rotation.y += 0.0003;

        const deltaTime = clock.getDelta();
        currentMixer.update(deltaTime);
        newVrm.update(deltaTime);
        meshW.position.y = meshW.position.y + textSin();

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