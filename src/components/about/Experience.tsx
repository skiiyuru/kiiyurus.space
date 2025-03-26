import { Canvas } from '@react-three/fiber'
import Scene from './Scene'

export default function Experience() {
  return (
    <Canvas
      className="bg-zinc-900 col-span-6 row-span-8"
      camera={{
        fov: 35,
        near: 0.1,
        far: 200,
        position: [0, 0, 2],
      }}
      flat
    >
      <Scene />
    </Canvas>
  )
}
