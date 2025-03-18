import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const SpinningCube = () => {
  const meshRef = useRef();
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });
  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#00aaff" />
    </mesh>
  );
};

const AnimatedModel = () => (
  <Canvas style={{ height: '400px' }}>
    <ambientLight intensity={0.5} />
    <pointLight position={[10, 10, 10]} />
    <SpinningCube />
  </Canvas>
);

export default AnimatedModel;
