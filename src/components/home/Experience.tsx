import { Canvas } from "@react-three/fiber"
import PortalScene from "@/components/home/PortalScene"

export default function Experience() {
  return (
    <Canvas
      className="min-h-72 overflow-hidden bg-zinc-900
       sm:max-h-64 sm:grid-rows-subgrid sm:grid-cols-subgrid sm:col-span-1 sm:row-span-3
      md:row-start-4 md:row-span-2 md:max-h-none
      lg:row-start-1 lg:col-span-4 lg:row-span-7 lg:max-h-none"
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
