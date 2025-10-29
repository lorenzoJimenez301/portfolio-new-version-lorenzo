"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Environment,
  Html,
  useProgress,
} from "@react-three/drei";
import { useRef, useState, useEffect, Suspense } from "react";
import { Spinner } from "react-spinner-toolkit";
import { useTheme } from "next-themes";

function Loader() {
  const { theme } = useTheme();

  const color =
    theme === "dark"
      ? "var(--color-lorenzo-green)"
      : "var(--color-lorenzo-dark)";
  return (
    <Html center>
      <div className="flex flex-col justify-center items-center gap-2 w-max">
        <Spinner
          color={color}
          shape="cubeGrid"
          loading
          speed={1}
          size={50}
          transition={true}
        />
        <p className="text-lorenzo-dark dark:text-lorenzo-green">
          Loading 3D Model
        </p>
      </div>
    </Html>
  );
}

function Modelo({ model, scale }) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1020);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scene } = useGLTF(model);
  const ref = useRef();

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta / 3;
      ref.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group ref={ref} scale={scale}>
      <primitive object={scene} />
    </group>
  );
}

// Componente principal
export default function Escena3D({ model, scale }) {
  const modelRef = useRef();
  const lightRef = useRef();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1020);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
      <Suspense fallback={<Loader />}>
        <Modelo scale={scale} model={model} ref={modelRef} />
        <directionalLight ref={lightRef} position={[0, 0, 3]} intensity={1} />
        <directionalLight ref={lightRef} position={[0, 0, -3]} intensity={1} />
        <ambientLight intensity={0.3} />
        <Environment preset="lobby" background blur={0} intensity={0} />
      </Suspense>
      {!isMobile && (
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      )}
    </Canvas>
  );
}
