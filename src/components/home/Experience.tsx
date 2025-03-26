import PortalScene from '@/components/home/PortalScene'
import { Canvas } from '@react-three/fiber'

export default function Experience() {
  return (
    <Canvas
      className="h-60 overflow-hidden bg-zinc-900
      sm:grid-rows-subgrid sm:grid-cols-subgrid sm:col-span-1 sm:row-span-3
      lg:row-start-1 lg:col-span-4 lg:row-span-7"
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [1, 2, 6],
      }}
      flat // remove default toneMapping applied by r3f
    >
      <PortalScene />
    </Canvas>
  )
}
