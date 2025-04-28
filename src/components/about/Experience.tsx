import { Loader } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Scene from './Scene'

export default function Experience() {
  return (
    <>
      <Canvas
        className="h-screen overflow-hidden bg-zinc-900
        sm:grid-rows-subgrid sm:grid-cols-subgrid sm:col-span-2 sm:row-span-8
        lg:col-span-6 lg:row-span-8"
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
