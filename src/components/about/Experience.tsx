import { Loader } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Scene from './Scene'

export default function Experience() {
  return (
    <>
      <Canvas
        className="bg-zinc-900 col-span-6 row-span-8"
        camera={{
          fov: 50,
          near: 0.1,
          far: 50,
          position: [0, 0, 2],
        }}
      // gl={{
      //   powerPreference: 'high-performance',
      //   antialias: false,
      //   stencil: false,
      //   depth: false,
      // }}
      >
        <Scene />
      </Canvas>
      <Loader />
    </>
  )
}
