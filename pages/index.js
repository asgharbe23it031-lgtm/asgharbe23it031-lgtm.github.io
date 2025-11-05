import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Text } from '@react-three/drei';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className='min-h-screen bg-black text-white'>
      <header className='max-w-6xl mx-auto p-6 flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-black font-bold'>A</div>
          <div>
            <div className='text-sm opacity-80'>Adesh Chaudhary</div>
            <div className='text-xs opacity-60'>Flutter Developer</div>
          </div>
        </div>
      </header>
      <section className='relative h-[70vh] flex items-center justify-center'>
        <Canvas camera={{ position: [0, 0, 7] }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
            <mesh>
              <torusGeometry args={[1.6, 0.4, 64, 128]} />
              <meshStandardMaterial metalness={0.9} roughness={0.2} color={'#7c3aed'} />
            </mesh>
            <Text position={[0, 0, 0.6]} fontSize={0.3} color={'white'} anchorX='center' anchorY='middle'>A</Text>
          </Float>
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </section>
      <footer className='max-w-6xl mx-auto px-6 py-12 text-center opacity-60 text-sm'>
        © {new Date().getFullYear()} Adesh Chaudhary — Built for togetha.me
      </footer>
    </div>
  );
}
