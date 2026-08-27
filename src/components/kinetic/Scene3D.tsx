"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Stars } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function MorphBlob({
  color,
  position,
  scale = 1,
  speed = 1,
}: {
  color: string;
  position: [number, number, number];
  scale?: number;
  speed?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.15 * speed;
    ref.current.rotation.y = state.clock.elapsedTime * 0.22 * speed;
  });

  return (
    <Float speed={1.4 * speed} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={ref} position={position} scale={scale}>
        <icosahedronGeometry args={[1.2, 24]} />
        <MeshDistortMaterial
          color={color}
          roughness={0.15}
          metalness={0.55}
          distort={0.45}
          speed={2.2 * speed}
          transparent
          opacity={0.9}
        />
      </mesh>
    </Float>
  );
}

function OrbitRing({
  radius,
  color,
  speed = 1,
}: {
  radius: number;
  color: string;
  speed?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += delta * 0.25 * speed;
  });

  return (
    <mesh ref={ref} rotation={[Math.PI / 2.4, 0.3, 0]}>
      <torusGeometry args={[radius, 0.02, 16, 120]} />
      <meshBasicMaterial color={color} transparent opacity={0.55} />
    </mesh>
  );
}

function ParticleField() {
  const count = 120;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return arr;
  }, []);

  const ref = useRef<THREE.Points>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.04;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.035} color="#ffffff" transparent opacity={0.55} sizeAttenuation />
    </points>
  );
}

function SceneContent({ accent }: { accent: string }) {
  return (
    <>
      <color attach="background" args={["#050507"]} />
      <ambientLight intensity={0.35} />
      <pointLight position={[4, 3, 5]} intensity={1.4} color={accent} />
      <pointLight position={[-4, -2, -3]} intensity={0.8} color="#ff2d95" />
      <Stars radius={40} depth={30} count={1200} factor={3} saturation={0} fade speed={0.6} />
      <MorphBlob color={accent} position={[1.2, 0.2, 0]} scale={1.15} speed={1} />
      <MorphBlob color="#ff2d95" position={[-1.8, -0.6, -1.2]} scale={0.55} speed={1.4} />
      <MorphBlob color="#c8ff00" position={[2.4, -1.2, -0.8]} scale={0.35} speed={1.8} />
      <OrbitRing radius={2.1} color={accent} speed={1} />
      <OrbitRing radius={2.6} color="#ff2d95" speed={-0.7} />
      <ParticleField />
    </>
  );
}

export function Scene3D({ accent = "#00e5ff" }: { accent?: string }) {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <SceneContent accent={accent} />
      </Canvas>
    </div>
  );
}
