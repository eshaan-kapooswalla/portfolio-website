import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import Loader from './loader';

const Computers = ({ isMobile }) => {
  const { scene } = useGLTF('/models/windowspc3d.gltf');
  
  return (
    <mesh scale={[2.5, 2.5, 2.5]}> {/* Scale up the model */}
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <primitive object={scene} />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className="relative">
      <Canvas
        frameloop='demand'
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 70, 20], fov: 25 }} // Adjusted camera position to fit larger model
        style={{ height: '80vh' }} // Adjust height to ensure no overlap
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<Loader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile} />
        </Suspense>

        <Preload all />
      </Canvas>
      <div className="absolute bottom-0 left-0 right-0 p-8 text-center text-white bg-black bg-opacity-50">
        <p className="text-lg font-semibold mb-2">Explore the 3D Design!</p>
        <p className="text-base">Rotate and interact with the 3D model above.</p>
      </div>
    </div>
  );
};

export default ComputersCanvas;
