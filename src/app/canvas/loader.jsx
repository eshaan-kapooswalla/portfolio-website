// components/loader.js
import React from 'react';

const CanvasLoader = () => (
  <mesh>
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial color="gray" />
  </mesh>
);

export default CanvasLoader;
