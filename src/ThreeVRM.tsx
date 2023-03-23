import { useEffect, useRef, useState } from "react";
import * as THREE from 'three';
import { GLTFLoader,GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { VRMLoaderPlugin } from '@pixiv/three-vrm';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass"

export function ThreeVRM(){
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(()=>{
        // ページの読み込みを待つ
    init()

    async function init() {

      let width = window.innerWidth;
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

      scene.background = new THREE.Color("rgb(33%, 33%, 33%)");
    
      // カメラを作成
      const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 10000);
      camera.position.set(0.2, 1.2, 0.7);

      // リサイズイベント発生時に実行
      window.addEventListener('resize', onResize);

      function onResize() {
        // サイズを取得
        width = window.innerWidth;
        height = window.innerHeight;

        // レンダラーのサイズを調整する
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(width, height);

        // カメラのアスペクト比を正す
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }

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

      //camera.lookAt()

      // 環境光源を作成
      // new THREE.AmbientLight(色, 光の強さ)
      const light = new THREE.AmbientLight(0xFFFFFF, 0.5);
      scene.add(light);

      const renderScene = new RenderPass( scene, camera );

      const bloomPass = new UnrealBloomPass( new THREE.Vector2( width, height ), 1.5, 0.4, 0.85 );
      bloomPass.threshold = 0;
      bloomPass.strength = 0.7;
      bloomPass.radius = 0.3;

      const composer = new EffectComposer( renderer );
      composer.addPass( renderScene );
      composer.addPass( bloomPass );

      //renderer.toneMappingExposure = Math.pow( 1.5 , 4.0 );
    
      tick();
    
      // 毎フレーム時に実行されるループイベントです
      function tick() {
        // メッシュを回転させる
        vrm.scene.rotation.y += 0.01;

        // レンダリング
        composer.render();
    
        requestAnimationFrame(tick);
      }
    }
    },[])
    return(
        <canvas className="" id="myCanvas" ref={canvasRef}></canvas>
    )
}

export default ThreeVRM;