import React, { useRef } from "react";
import { Mesh } from "three";
import { Box } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function ExampleBox(): JSX.Element {
  const mesh = useRef<Mesh>(null!);

  useFrame((state, delta) => {
    mesh.current.rotation.x = 0;
    mesh.current.rotation.y = 0;
  });

  return (
    <Box ref={mesh}>
      <OrbitControls />
      <mesh>
        <boxGeometry args={[10, 30, 10]} />
        <meshStandardMaterial color={"pink"} />
      </mesh>
    </Box>
  );
}
