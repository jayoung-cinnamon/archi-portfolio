import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "./modeling/three_js_test_section.glb");
  return (
    <>
      <primitive object={gltf.scene} scale={0.4} />
    </>
  );
};

export default function Sample() {
  return (
    <Canvas camera={{ position: [0, 10, 0], fov: 30 }}>
      <Suspense fallback={null}>
        <Model />
        <OrbitControls />
        <Environment preset="sunset" />
      </Suspense>
    </Canvas>
  );
}
