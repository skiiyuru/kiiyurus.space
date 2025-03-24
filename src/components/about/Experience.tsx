import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

export default function Experience() {
  return (
    <Canvas
      className="bg-zinc-900 grid-cols-subgrid  grid-rows-subgrid col-span-6 row-span-7 h-full"
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [1, 2, 6],
      }}
      flat
    >
      <OrbitControls />
      <mesh>
        <torusKnotGeometry />
        <meshNormalMaterial flatShading />
      </mesh>
    </Canvas>
  )
}
