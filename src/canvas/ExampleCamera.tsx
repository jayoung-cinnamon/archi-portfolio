import React from "react";
import { PerspectiveCamera } from "@react-three/drei";

const { innerWidth, innerHeight } = window;

export default function ExampleCamera(): JSX.Element {
  return (
    <PerspectiveCamera
      makeDefault
      fov={40}
      aspect={innerWidth / innerHeight}
      near={1}
      far={500}
      position={[0, 0, 10]}
    />
  );
}
