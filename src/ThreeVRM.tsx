import { useEffect, useRef } from "react";
import * as THREE from 'three';
import { GLTFLoader,GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { VRMLoaderPlugin } from '@pixiv/three-vrm';

class PromiseGLTFLoader extends GLTFLoader {
  promiseLoad(
    url: string,
    onProgress?: ((event: ProgressEvent<EventTarget>) => void) | undefined,
  ) {
    return new Promise<GLTF>((resolve, reject) => {
      super.load(url, resolve, onProgress, reject)
    })
  }
}

export function ThreeVRM(){
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(()=>{
        // ページの読み込みを待つ
    init()

    async function init() {

      // サイズを指定
      const width = window.innerWidth;
      const height = window.innerHeight;

      // レンダラーを作成
      const renderer = new THREE.WebGLRenderer({
        canvas:canvasRef.current!,
        antialias: true,
        alpha: true,
      });
      renderer.setSize(width, height);

      // シーンを作成
      const scene = new THREE.Scene();
    
      // カメラを作成
      const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
      camera.position.set(0, 0, +1000);

      const loader = new GLTFLoader();
  
      // Install GLTFLoader plugin
      loader.register((parser) => {
        return new VRMLoaderPlugin(parser);
      });
      
      loader.load(
        // URL of the VRM you want to load
        './test.vrm',
      
        // called when the resource is loaded
        (gltf) => {
          // retrieve a VRM instance from gltf
          const vrm = gltf.userData.vrm;
      
          // add the loaded vrm to the scene
          scene.add(vrm.scene);
      
          // deal with vrm features
          console.log(vrm);
        },
      
        // called while loading is progressing
        (progress) => console.log('Loading model...', 100.0 * (progress.loaded / progress.total), '%'),
      
        // called when loading has errors
        (error) => console.error(error),
      );
    
    
      // 平行光源
      const directionalLight = new THREE.DirectionalLight(0xFFFFFF);
      directionalLight.position.set(1, 1, 1);
      // シーンに追加
      scene.add(directionalLight);
    
      tick();
    
      // 毎フレーム時に実行されるループイベントです
      function tick() {
        // メッシュを回転させる
        //vrm.scene.rotation.y += 0.01;
        // レンダリング
        renderer.render(scene, camera);
    
        requestAnimationFrame(tick);
      }
    }
    },[])
    return(
        <canvas id="myCanvas" ref={canvasRef}></canvas>
    )
}

export default ThreeVRM;