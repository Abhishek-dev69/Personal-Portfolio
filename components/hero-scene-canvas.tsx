"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";
import type { Group } from "three";

function OrbitalCore() {
  const group = useRef<Group>(null);

  useFrame((state, delta) => {
    if (!group.current) {
      return;
    }

    group.current.rotation.y += delta * 0.28;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.45) * 0.08;
  });

  return (
    <group ref={group}>
      <Float speed={1.45} rotationIntensity={0.35} floatIntensity={0.45}>
        <mesh>
          <icosahedronGeometry args={[1.12, 1]} />
          <meshStandardMaterial
            color="#c44732"
            metalness={0.62}
            roughness={0.28}
            transparent
            opacity={0.78}
          />
        </mesh>
        <mesh scale={1.18}>
          <icosahedronGeometry args={[1.12, 1]} />
          <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.16} />
        </mesh>
      </Float>

      <mesh rotation={[Math.PI / 2.7, 0, 0]}>
        <torusGeometry args={[1.78, 0.012, 12, 120]} />
        <meshStandardMaterial
          color="#315fa6"
          emissive="#172f56"
          metalness={0.5}
          roughness={0.4}
        />
      </mesh>
      <mesh rotation={[Math.PI / 2.1, 0.45, 0.35]}>
        <torusGeometry args={[2.05, 0.01, 12, 120]} />
        <meshStandardMaterial
          color="#c44732"
          emissive="#4d1d14"
          metalness={0.5}
          roughness={0.34}
        />
      </mesh>
      <mesh position={[1.65, 0.32, 0.18]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#315fa6" emissive="#315fa6" emissiveIntensity={0.35} />
      </mesh>
      <mesh position={[-1.55, -0.36, 0.2]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial color="#c44732" emissive="#c44732" emissiveIntensity={0.42} />
      </mesh>
    </group>
  );
}

export function HeroSceneCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.2], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[3, 4, 5]} intensity={1.4} color="#ffffff" />
      <pointLight position={[-3, -2, 3]} intensity={2.4} color="#c44732" />
      <pointLight position={[3, 1.8, 3]} intensity={1.5} color="#315fa6" />
      <OrbitalCore />
    </Canvas>
  );
}
