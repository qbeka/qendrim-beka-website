import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

const AnimatedBackground = () => {
  return (
    <Canvas style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh' }}>
      <Stars />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default AnimatedBackground;
