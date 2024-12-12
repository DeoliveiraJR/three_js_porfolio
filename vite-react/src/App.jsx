import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls }  from '@react-three/drei'; 
import { useRef } from 'react';

const RotatingCube = () => {
  const meshRef = useRef();
  useFrame(()=> {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  })

  return (
    <mesh ref={meshRef}>
      <cylinderGeometry args={[1, 1, 1, 32]} />
      <meshLambertMaterial color="#468585" emissive="#468585"/>
      <meshRotation x={0.5} y={0.5} />
    </mesh>
  );
}

const App = ( ) => {
  return (
    <Canvas style={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <OrbitControls  enableZoom enablePan enableRotate />
      <directionalLight 
        intensity={1}
        color={0x9CDBA6}
        position={[1, 1, 1]}
      />
      <color attach="background" args={['#F0F0F0']}/>

      <RotatingCube />
    </Canvas>
  );
}

export default App;